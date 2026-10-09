package com.urbandrainage.portal.security;

import com.urbandrainage.portal.entity.User;

public record AuthenticatedUser(Long id, String name, String email, String role, String phone, String address, String department) {
    public static AuthenticatedUser from(User user) {
        return new AuthenticatedUser(user.getId(), user.getName(), user.getEmail(), user.getRole(), user.getPhone(), user.getAddress(), user.getDepartment());
    }
}
