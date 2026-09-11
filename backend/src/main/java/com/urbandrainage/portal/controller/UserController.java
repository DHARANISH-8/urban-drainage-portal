package com.urbandrainage.portal.controller;

import com.urbandrainage.portal.entity.User;
import com.urbandrainage.portal.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/staff")
    public ResponseEntity<List<User>> getStaffMembers() {
        return ResponseEntity.ok(userService.getStaffMembers());
    }
}
