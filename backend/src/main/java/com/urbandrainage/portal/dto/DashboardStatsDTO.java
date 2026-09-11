package com.urbandrainage.portal.dto;

public record DashboardStatsDTO(
    long totalComplaints,
    long submitted,
    long underReview,
    long assigned,
    long inProgress,
    long resolved,
    long rejected,
    long emergencyCount,
    long highPriorityCount,
    long totalInfrastructure
) {}
