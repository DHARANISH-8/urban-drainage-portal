package com.urbandrainage.portal.dto;

public record AuthResponse(String token, Long id, String name, String email, String role, String phone, String address, String department) {}
