package com.urbandrainage.portal.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record InfrastructureDTO(
    Long id,

    @NotBlank(message = "Name is required")
    String name,

    @NotBlank(message = "Type is required")
    String type,

    String description,

    @NotNull(message = "Latitude is required")
    Double latitude,

    @NotNull(message = "Longitude is required")
    Double longitude,

    String address,

    String status
) {}
