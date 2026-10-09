package com.urbandrainage.portal;

import com.urbandrainage.portal.entity.User;
import com.urbandrainage.portal.repository.UserRepository;
import com.urbandrainage.portal.service.AuthService;
import org.junit.jupiter.api.Test;
import org.springframework.mock.env.MockEnvironment;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class AdminBootstrapTest {
    private final UserRepository userRepository = mock(UserRepository.class);
    private final AuthService authService = mock(AuthService.class);
    private final MockEnvironment environment = new MockEnvironment();
    private final AdminBootstrap bootstrap = new AdminBootstrap(userRepository, authService, environment);

    @Test
    void doesNothingWhenBootstrapIsNotConfigured() {
        bootstrap.run();

        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    void createsAdminWithNormalizedEmailAndHashedPassword() {
        configure("அருள்மொழி செல்வன்", " Admin@example.test ", "LongAndRandomPassword123!");
        when(userRepository.findByEmail("admin@example.test")).thenReturn(Optional.empty());
        when(authService.encodePassword("LongAndRandomPassword123!")).thenReturn("bcrypt-hash");

        bootstrap.run();

        var captor = org.mockito.ArgumentCaptor.forClass(User.class);
        verify(userRepository).save(captor.capture());
        User saved = captor.getValue();
        assertEquals("அருள்மொழி செல்வன்", saved.getName());
        assertEquals("admin@example.test", saved.getEmail());
        assertEquals("ADMIN", saved.getRole());
        assertEquals("bcrypt-hash", saved.getPasswordHash());
        assertNotEquals("LongAndRandomPassword123!", saved.getPasswordHash());
    }

    @Test
    void doesNotResetPasswordWhenAdminAlreadyExists() {
        configure("Tamil Admin", "admin@example.test", "LongAndRandomPassword123!");
        User existing = new User();
        existing.setRole("ADMIN");
        when(userRepository.findByEmail("admin@example.test")).thenReturn(Optional.of(existing));

        bootstrap.run();

        verify(userRepository, never()).save(any(User.class));
        verify(authService, never()).encodePassword(any());
    }

    @Test
    void canExplicitlyResetAnExistingAdminPassword() {
        configure("Tamil Admin", "admin@example.test", "LongAndRandomPassword123!");
        environment.setProperty("ADMIN_BOOTSTRAP_RESET_PASSWORD", "true");
        User existing = new User();
        existing.setRole("ADMIN");
        when(userRepository.findByEmail("admin@example.test")).thenReturn(Optional.of(existing));
        when(authService.encodePassword("LongAndRandomPassword123!")).thenReturn("new-bcrypt-hash");

        bootstrap.run();

        verify(userRepository).save(existing);
        assertEquals("new-bcrypt-hash", existing.getPasswordHash());
    }

    @Test
    void rejectsPartialConfiguration() {
        environment.setProperty("ADMIN_BOOTSTRAP_NAME", "Tamil Admin");

        assertThrows(IllegalStateException.class, bootstrap::run);
    }

    @Test
    void rejectsBootstrapEmailAlreadyUsedByNonAdmin() {
        configure("Tamil Admin", "admin@example.test", "LongAndRandomPassword123!");
        User existing = new User();
        existing.setRole("CITIZEN");
        when(userRepository.findByEmail("admin@example.test")).thenReturn(Optional.of(existing));

        assertThrows(IllegalStateException.class, bootstrap::run);
    }

    private void configure(String name, String email, String password) {
        environment.setProperty("ADMIN_BOOTSTRAP_NAME", name);
        environment.setProperty("ADMIN_BOOTSTRAP_EMAIL", email);
        environment.setProperty("ADMIN_BOOTSTRAP_PASSWORD", password);
    }
}
