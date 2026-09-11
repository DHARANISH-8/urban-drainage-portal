package com.urbandrainage.portal.dto;

import jakarta.validation.constraints.NotNull;

public record AssignmentDTO(
    @NotNull(message = "Staff ID is required")
    Long staffId,

    String staffName
) {}
