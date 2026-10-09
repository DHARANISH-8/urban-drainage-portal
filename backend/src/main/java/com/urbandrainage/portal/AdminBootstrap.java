package com.urbandrainage.portal;

import com.urbandrainage.portal.entity.User;
import com.urbandrainage.portal.repository.UserRepository;
import com.urbandrainage.portal.service.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.util.Locale;
import java.util.Optional;

@Component
public class AdminBootstrap implements CommandLineRunner {
    private static final Logger logger = LoggerFactory.getLogger(AdminBootstrap.class);
    private static final String NAME_PROPERTY = "ADMIN_BOOTSTRAP_NAME";
    private static final String EMAIL_PROPERTY = "ADMIN_BOOTSTRAP_EMAIL";
    private static final String PASSWORD_PROPERTY = "ADMIN_BOOTSTRAP_PASSWORD";
    private static final String RESET_PASSWORD_PROPERTY = "ADMIN_BOOTSTRAP_RESET_PASSWORD";

    private final UserRepository userRepository;
    private final AuthService authService;
    private final Environment environment;

    public AdminBootstrap(UserRepository userRepository, AuthService authService, Environment environment) {
        this.userRepository = userRepository;
        this.authService = authService;
        this.environment = environment;
    }

    @Override
    public void run(String... args) {
        String name = environment.getProperty(NAME_PROPERTY);
        String email = environment.getProperty(EMAIL_PROPERTY);
        String password = environment.getProperty(PASSWORD_PROPERTY);
        String resetPasswordValue = environment.getProperty(RESET_PASSWORD_PROPERTY, "false").trim();
        if (!"true".equalsIgnoreCase(resetPasswordValue) && !"false".equalsIgnoreCase(resetPasswordValue)) {
            throw new IllegalStateException("ADMIN_BOOTSTRAP_RESET_PASSWORD must be true or false.");
        }
        boolean resetPassword = Boolean.parseBoolean(resetPasswordValue);
        boolean configured = hasText(name) || hasText(email) || hasText(password) || resetPassword;
        if (!configured) {
            return;
        }
        if (!hasText(name) || !hasText(email) || !hasText(password)) {
            throw new IllegalStateException("Set all three ADMIN_BOOTSTRAP_NAME, ADMIN_BOOTSTRAP_EMAIL, and ADMIN_BOOTSTRAP_PASSWORD values.");
        }
        if (password.length() < 16 || password.length() > 72) {
            throw new IllegalStateException("ADMIN_BOOTSTRAP_PASSWORD must be between 16 and 72 characters.");
        }

        String normalizedEmail = email.trim().toLowerCase(Locale.ROOT);
        Optional<User> existing = userRepository.findByEmail(normalizedEmail);
        if (existing.isPresent()) {
            if (!"ADMIN".equals(existing.get().getRole())) {
                throw new IllegalStateException("The bootstrap email is already assigned to a non-administrator account.");
            }
            if (resetPassword) {
                User admin = existing.get();
                admin.setPasswordHash(authService.encodePassword(password));
                userRepository.save(admin);
                logger.info("Password reset for the bootstrapped administrator.");
                return;
            }
            logger.info("Administrator bootstrap skipped because an administrator account already exists.");
            return;
        }

        User admin = new User();
        admin.setName(name.trim());
        admin.setEmail(normalizedEmail);
        admin.setRole("ADMIN");
        admin.setPasswordHash(authService.encodePassword(password));
        userRepository.save(admin);
        logger.info("Initial administrator account created.");
    }

    private boolean hasText(String value) {
        return value != null && !value.isBlank();
    }
}
