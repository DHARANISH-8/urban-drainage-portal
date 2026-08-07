package com.urbandrainage.portal.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;

public record StorageRequest(
        @NotNull(message = "Length is required")
        @DecimalMin(value = "0.0", inclusive = false, message = "Length must be greater than 0")
        Double length,

        @NotNull(message = "Width is required")
        @DecimalMin(value = "0.0", inclusive = false, message = "Width must be greater than 0")
        Double width,

        @NotNull(message = "Depth is required")
        @DecimalMin(value = "0.0", inclusive = false, message = "Depth must be greater than 0")
        Double depth
) {
}
