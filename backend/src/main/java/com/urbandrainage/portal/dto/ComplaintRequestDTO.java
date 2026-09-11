package com.urbandrainage.portal.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ComplaintRequestDTO(
    Long userId,
    String userName,

    @NotBlank(message = "Issue type is required")
    String issueType,

    @NotBlank(message = "Description is required")
    String description,

    @NotNull(message = "Latitude is required")
    Double latitude,

    @NotNull(message = "Longitude is required")
    Double longitude,

    String address,
    String photoUrl,

    @NotBlank(message = "Priority is required")
    String priority
) {}
