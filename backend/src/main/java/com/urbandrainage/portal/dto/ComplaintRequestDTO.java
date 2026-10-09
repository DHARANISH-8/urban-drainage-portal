package com.urbandrainage.portal.dto;

import jakarta.validation.constraints.NotBlank;

public record ComplaintRequestDTO(
    Long userId,
    String userName,

    @NotBlank(message = "Issue type is required")
    String issueType,

    @NotBlank(message = "Description is required")
    String description,

    Double latitude,

    Double longitude,

    String address,
    String photoUrl,

    @NotBlank(message = "Priority is required")
    String priority,
    Long drainId
) {
    public ComplaintRequestDTO(Long userId, String userName, String issueType, String description,
                               Double latitude, Double longitude, String address, String photoUrl, String priority) {
        this(userId, userName, issueType, description, latitude, longitude, address, photoUrl, priority, null);
    }
}
