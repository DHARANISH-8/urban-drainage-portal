package com.urbandrainage.portal.service;

import com.urbandrainage.portal.dto.ComplaintRequestDTO;
import com.urbandrainage.portal.dto.DashboardStatsDTO;
import com.urbandrainage.portal.dto.StatusUpdateDTO;
import com.urbandrainage.portal.entity.DrainageComplaint;
import com.urbandrainage.portal.repository.ComplaintRepository;
import com.urbandrainage.portal.repository.InfrastructureRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComplaintService {

    private final ComplaintRepository complaintRepository;
    private final InfrastructureRepository infrastructureRepository;
    private final NotificationService notificationService;

    public ComplaintService(ComplaintRepository complaintRepository,
                            InfrastructureRepository infrastructureRepository,
                            NotificationService notificationService) {
        this.complaintRepository = complaintRepository;
        this.infrastructureRepository = infrastructureRepository;
        this.notificationService = notificationService;
    }

    public DrainageComplaint createComplaint(ComplaintRequestDTO dto) {
        DrainageComplaint complaint = new DrainageComplaint();
        complaint.setUserId(dto.userId() != null ? dto.userId() : 1L);
        complaint.setUserName(dto.userName() != null ? dto.userName() : "Citizen User");
        complaint.setIssueType(dto.issueType());
        complaint.setDescription(dto.description());
        complaint.setLatitude(dto.latitude());
        complaint.setLongitude(dto.longitude());
        complaint.setAddress(dto.address() != null ? dto.address() : "Reported Location");
        complaint.setPhotoUrl(dto.photoUrl());
        complaint.setPriority(autoMapPriority(dto.issueType(), dto.priority()));
        complaint.setStatus("SUBMITTED");

        DrainageComplaint saved = complaintRepository.save(complaint);

        // Send notification to citizen
        notificationService.createNotification(
                saved.getUserId(),
                "Complaint Submitted",
                "Your drainage complaint (#CMP-" + saved.getId() + ") for " + saved.getIssueType().replace("_", " ") + " has been submitted successfully.",
                "COMPLAINT_SUBMITTED"
        );

        return saved;
    }

    public List<DrainageComplaint> getAllComplaints() {
        return complaintRepository.findAllByOrderByCreatedAtDesc();
    }

    public List<DrainageComplaint> getComplaintsByUser(Long userId) {
        return complaintRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    public List<DrainageComplaint> getComplaintsByStaff(Long staffId) {
        return complaintRepository.findByAssignedStaffIdOrderByCreatedAtDesc(staffId);
    }

    public Optional<DrainageComplaint> getComplaintById(Long id) {
        return complaintRepository.findById(id);
    }

    public DrainageComplaint assignStaff(Long complaintId, Long staffId, String staffName) {
        DrainageComplaint complaint = complaintRepository.findById(complaintId)
                .orElseThrow(() -> new IllegalArgumentException("Complaint not found with ID: " + complaintId));

        complaint.setAssignedStaffId(staffId);
        complaint.setAssignedStaffName(staffName != null ? staffName : "Staff Member");
        if ("SUBMITTED".equals(complaint.getStatus()) || "UNDER_REVIEW".equals(complaint.getStatus())) {
            complaint.setStatus("ASSIGNED");
        }

        DrainageComplaint updated = complaintRepository.save(complaint);

        // Notify user
        notificationService.createNotification(
                updated.getUserId(),
                "Complaint Assigned",
                "Your complaint (#CMP-" + updated.getId() + ") has been assigned to " + updated.getAssignedStaffName() + " for resolution.",
                "ASSIGNMENT"
        );

        return updated;
    }

    public DrainageComplaint updateStatus(Long complaintId, StatusUpdateDTO dto) {
        DrainageComplaint complaint = complaintRepository.findById(complaintId)
                .orElseThrow(() -> new IllegalArgumentException("Complaint not found with ID: " + complaintId));

        String oldStatus = complaint.getStatus();
        complaint.setStatus(dto.status().toUpperCase());

        if (dto.inspectionNotes() != null && !dto.inspectionNotes().isBlank()) {
            complaint.setInspectionNotes(dto.inspectionNotes());
        }
        if (dto.maintenanceNotes() != null && !dto.maintenanceNotes().isBlank()) {
            complaint.setMaintenanceNotes(dto.maintenanceNotes());
        }

        DrainageComplaint updated = complaintRepository.save(complaint);

        // Notify user if status changed
        if (!oldStatus.equalsIgnoreCase(updated.getStatus())) {
            notificationService.createNotification(
                    updated.getUserId(),
                    "Complaint Status Updated",
                    "Your complaint (#CMP-" + updated.getId() + ") status is now " + updated.getStatus().replace("_", " ") + ".",
                    "STATUS_UPDATE"
            );
        }

        return updated;
    }

    public void deleteComplaint(Long id) {
        complaintRepository.deleteById(id);
    }

    public DashboardStatsDTO getDashboardStats() {
        long total = complaintRepository.count();
        long submitted = complaintRepository.countByStatus("SUBMITTED");
        long underReview = complaintRepository.countByStatus("UNDER_REVIEW");
        long assigned = complaintRepository.countByStatus("ASSIGNED");
        long inProgress = complaintRepository.countByStatus("IN_PROGRESS");
        long resolved = complaintRepository.countByStatus("RESOLVED");
        long rejected = complaintRepository.countByStatus("REJECTED");
        long emergency = complaintRepository.countByPriority("EMERGENCY");
        long high = complaintRepository.countByPriority("HIGH");
        long totalInfra = infrastructureRepository.count();

        return new DashboardStatsDTO(
                total, submitted, underReview, assigned, inProgress, resolved, rejected, emergency, high, totalInfra
        );
    }

    private String autoMapPriority(String issueType, String userProvidedPriority) {
        if (userProvidedPriority != null && !userProvidedPriority.isBlank()) {
            return userProvidedPriority.toUpperCase();
        }
        if (issueType == null) return "MEDIUM";
        return switch (issueType.toUpperCase()) {
            case "FLOODING" -> "EMERGENCY";
            case "DRAIN_OVERFLOW", "WATERLOGGING", "BLOCKED_DRAIN" -> "HIGH";
            case "MANHOLE_PROBLEM", "OPEN_DRAIN", "DRAINAGE_LEAKAGE", "DAMAGED_DRAIN" -> "MEDIUM";
            default -> "LOW";
        };
    }
}
