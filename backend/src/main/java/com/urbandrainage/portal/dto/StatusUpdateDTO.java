package com.urbandrainage.portal.dto;

import jakarta.validation.constraints.NotBlank;

public record StatusUpdateDTO(
    @NotBlank(message = "Status is required")
    String status,

    String inspectionNotes,
    String maintenanceNotes,
    String workProgress,
    String resolutionDetails
) {
    public StatusUpdateDTO(String status, String inspectionNotes, String maintenanceNotes) {
        this(status, inspectionNotes, maintenanceNotes, null, null);
    }
}
