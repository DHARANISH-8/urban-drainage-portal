package com.urbandrainage.portal.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;

public record RunoffRequest(
        @NotNull(message = "Area is required")
        @DecimalMin(value = "0.0", inclusive = false, message = "Area must be greater than 0")
        Double area,

        @NotNull(message = "Rainfall intensity is required")
        @DecimalMin(value = "0.0", inclusive = false, message = "Rainfall intensity must be greater than 0")
        Double rainfallIntensity,

        @NotNull(message = "Runoff coefficient is required")
        @DecimalMin(value = "0.0", inclusive = false, message = "Runoff coefficient must be greater than 0")
        Double runoffCoefficient
) {
}
