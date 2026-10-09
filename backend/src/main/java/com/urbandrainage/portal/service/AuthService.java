package com.urbandrainage.portal.service;

import com.urbandrainage.portal.dto.AuthResponse;
import com.urbandrainage.portal.dto.LoginRequest;
import com.urbandrainage.portal.dto.ManagedUserRequest;
import com.urbandrainage.portal.dto.RegistrationRequest;
import com.urbandrainage.portal.entity.User;
import com.urbandrainage.portal.repository.UserRepository;
import com.urbandrainage.portal.security.AuthenticatedUser;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.stereotype.Service;

import java.util.Locale;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final Map<String, AuthenticatedUser> sessions = new ConcurrentHashMap<>();

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.email().trim().toLowerCase(Locale.ROOT))
                .orElseThrow(this::invalidCredentials);
        if (!user.getRole().equals(request.role()) || user.getPasswordHash() == null
                || !passwordEncoder.matches(request.password(), user.getPasswordHash())) {
            throw invalidCredentials();
        }
        String token = UUID.randomUUID().toString();
        AuthenticatedUser authenticatedUser = AuthenticatedUser.from(user);
        sessions.put(token, authenticatedUser);
        return response(token, authenticatedUser);
    }

    public AuthResponse register(RegistrationRequest request) {
        User user = new User();
        user.setName(request.name().trim());
        user.setEmail(normalizeNewAccountEmail(request.email()));
        user.setRole("CITIZEN");
        user.setPhone(request.phone().trim());
        user.setAddress(request.address().trim());
        user.setPasswordHash(passwordEncoder.encode(request.password()));
        User savedUser = userRepository.save(user);

        String token = UUID.randomUUID().toString();
        AuthenticatedUser authenticatedUser = AuthenticatedUser.from(savedUser);
        sessions.put(token, authenticatedUser);
        return response(token, authenticatedUser);
    }

    public User createManagedUser(ManagedUserRequest request) {
        User user = new User();
        user.setName(request.name().trim());
        user.setEmail(normalizeNewAccountEmail(request.email()));
        user.setRole(request.role().trim().toUpperCase(Locale.ROOT));
        user.setPhone(request.phone().trim());
        user.setAddress(request.address() == null || request.address().isBlank() ? null : request.address().trim());
        user.setPasswordHash(passwordEncoder.encode(request.password()));
        return userRepository.save(user);
    }

    private String normalizeNewAccountEmail(String input) {
        String email = input.trim().toLowerCase(Locale.ROOT);
        if (userRepository.findByEmail(email).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "An account with this email already exists.");
        }
        return email;
    }

    private AuthResponse response(String token, AuthenticatedUser user) {
        return new AuthResponse(token, user.id(), user.name(), user.email(), user.role(), user.phone(), user.address(), user.department());
    }

    public AuthenticatedUser getSession(String token) {
        return sessions.get(token);
    }

    public void logout(String token) {
        sessions.remove(token);
    }

    public String encodePassword(String plainTextPassword) {
        return passwordEncoder.encode(plainTextPassword);
    }

    private ResponseStatusException invalidCredentials() {
        return new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password.");
    }
}
