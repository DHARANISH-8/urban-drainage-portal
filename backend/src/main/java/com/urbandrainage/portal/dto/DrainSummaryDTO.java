package com.urbandrainage.portal.dto;

import java.time.LocalDateTime;

public record DrainSummaryDTO(
        Long id,
        String drainCode,
        String name,
        String location,
        String type,
        Double latitude,
        Double longitude,
        String status,
        boolean active,
        boolean underMaintenance,
        long complaintCount,
        ComplaintSummary latestComplaint,
        LocalDateTime lastMaintenanceAt
) {
    public record ComplaintSummary(
            Long id,
            String issueType,
            String description,
            String status,
            String priority,
            LocalDateTime createdAt
    ) {}
}
