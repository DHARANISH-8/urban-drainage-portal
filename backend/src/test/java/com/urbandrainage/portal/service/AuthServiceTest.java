package com.urbandrainage.portal.service;

import com.urbandrainage.portal.dto.AuthResponse;
import com.urbandrainage.portal.dto.LoginRequest;
import com.urbandrainage.portal.dto.RegistrationRequest;
import com.urbandrainage.portal.entity.User;
import com.urbandrainage.portal.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentCaptor.forClass;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class AuthServiceTest {
    private final UserRepository userRepository = mock(UserRepository.class);
    private final AuthService authService = new AuthService(userRepository);

    @Test
    void loginReturnsUserAndCreatesBearerSession() {
        User user = new User(7L, "Taylor Citizen", "taylor@example.com", "CITIZEN", "+1 555-0123", "Urban Drainage Department");
        user.setPasswordHash(authService.encodePassword("SecurePass123"));
        when(userRepository.findByEmail("taylor@example.com")).thenReturn(Optional.of(user));

        AuthResponse response = authService.login(new LoginRequest("TAYLOR@example.com", "SecurePass123", "CITIZEN"));

        assertNotNull(response.token());
        assertEquals(7L, response.id());
        assertEquals("taylor@example.com", response.email());
        assertEquals("CITIZEN", response.role());
        assertEquals(7L, authService.getSession(response.token()).id());
    }

    @Test
    void loginRejectsInvalidCredentialsWithUnauthorizedStatus() {
        when(userRepository.findByEmail("taylor@example.com")).thenReturn(Optional.empty());

        ResponseStatusException exception = assertThrows(ResponseStatusException.class, () ->
                authService.login(new LoginRequest("taylor@example.com", "wrong-password", "CITIZEN")));

        assertEquals(HttpStatus.UNAUTHORIZED, exception.getStatusCode());
    }

    @Test
    void registerCreatesCitizenAccountWithHashedPasswordAndStartsSession() {
        RegistrationRequest request = new RegistrationRequest(
                "  Taylor Citizen  ",
                " TAYLOR@example.com ",
                "+1 555-0123",
                "SecurePass123",
                " Riverside, North Area "
        );
        when(userRepository.save(any(User.class))).thenAnswer(invocation -> {
            User user = invocation.getArgument(0);
            user.setId(42L);
            return user;
        });

        AuthResponse response = authService.register(request);

        assertEquals(42L, response.id());
        assertEquals("Taylor Citizen", response.name());
        assertEquals("taylor@example.com", response.email());
        assertEquals("CITIZEN", response.role());
        assertEquals("+1 555-0123", response.phone());
        assertEquals("Riverside, North Area", response.address());
        assertNotNull(response.token());
        var savedUserCaptor = forClass(User.class);
        verify(userRepository).save(savedUserCaptor.capture());

        User savedUser = savedUserCaptor.getValue();
        assertEquals("CITIZEN", savedUser.getRole());
        assertNotEquals("SecurePass123", savedUser.getPasswordHash());
        assertTrue(new BCryptPasswordEncoder().matches("SecurePass123", savedUser.getPasswordHash()));
        assertEquals("Riverside, North Area", authService.getSession(response.token()).address());
    }

    @Test
    void registerRejectsExistingEmail() {
        when(userRepository.findByEmail("taylor@example.com")).thenReturn(Optional.of(new User()));

        ResponseStatusException exception = assertThrows(ResponseStatusException.class, () ->
                authService.register(new RegistrationRequest(
                        "Taylor Citizen",
                        "taylor@example.com",
                        "+1 555-0123",
                        "SecurePass123",
                        "Riverside"
                )));

        assertEquals(HttpStatus.CONFLICT, exception.getStatusCode());
    }
}
