package com.urbandrainage.portal.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record RegistrationRequest(
        @NotBlank @Size(max = 120) String name,
        @NotBlank @Email @Size(max = 255) String email,
        @NotBlank @Pattern(regexp = "^\\+?[0-9][0-9\\s().-]{7,19}$") String phone,
        @NotBlank @Size(min = 8, max = 72) String password,
        @NotBlank @Size(max = 300) String address
) {}
