package com.urbandrainage.portal.controller;

import com.urbandrainage.portal.dto.ManagedUserRequest;
import com.urbandrainage.portal.entity.User;
import com.urbandrainage.portal.service.AuthService;
import com.urbandrainage.portal.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;
    private final AuthService authService;

    public UserController(UserService userService, AuthService authService) {
        this.userService = userService;
        this.authService = authService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/staff")
    public ResponseEntity<List<User>> getStaffMembers() {
        return ResponseEntity.ok(userService.getStaffMembers());
    }

    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody ManagedUserRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.createManagedUser(request));
    }
}
