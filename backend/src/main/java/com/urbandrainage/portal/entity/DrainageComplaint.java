package com.urbandrainage.portal.entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDateTime;

@Entity
@Table(name = "drainage_complaints")
public class DrainageComplaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "drain_id")
    @JsonIgnore
    private DrainageInfrastructure drain;

    private String userName;

    @Column(nullable = false)
    private String issueType; // BLOCKED_DRAIN, DRAIN_OVERFLOW, WATERLOGGING, etc.

    @Column(length = 2000)
    private String description;

    private Double latitude;

    private Double longitude;

    private String address;

    @Column(columnDefinition = "TEXT")
    private String photoUrl;

    @Column(nullable = false)
    private String priority; // LOW, MEDIUM, HIGH, EMERGENCY

    @Column(nullable = false)
    private String status; // SUBMITTED, UNDER_REVIEW, ASSIGNED, IN_PROGRESS, RESOLVED, REJECTED

    private Long assignedStaffId;

    private String assignedStaffName;

    @Column(length = 2000)
    private String inspectionNotes;

    @Column(length = 2000)
    private String maintenanceNotes;

    @Column(length = 2000)
    private String workProgress;

    @Column(length = 2000)
    private String resolutionDetails;

    private Integer rating; // 1 to 5 stars rating given by citizen

    @Column(length = 2000)
    private String feedback; // Citizen feedback comment

    private LocalDateTime feedbackSubmittedAt;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public DrainageComplaint() {}

    @PrePersist
    public void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        this.createdAt = now;
        this.updatedAt = now;
        if (this.status == null) {
            this.status = "SUBMITTED";
        }
        if (this.priority == null) {
            this.priority = "MEDIUM";
        }
    }

    @PreUpdate
    public void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public DrainageInfrastructure getDrain() { return drain; }
    public void setDrain(DrainageInfrastructure drain) { this.drain = drain; }
    public Long getDrainId() { return drain == null ? null : drain.getId(); }

    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }

    public String getIssueType() { return issueType; }
    public void setIssueType(String issueType) { this.issueType = issueType; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Double getLatitude() { return latitude; }
    public void setLatitude(Double latitude) { this.latitude = latitude; }

    public Double getLongitude() { return longitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getPhotoUrl() { return photoUrl; }
    public void setPhotoUrl(String photoUrl) { this.photoUrl = photoUrl; }

    public String getPriority() { return priority; }
    public void setPriority(String priority) { this.priority = priority; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Long getAssignedStaffId() { return assignedStaffId; }
    public void setAssignedStaffId(Long assignedStaffId) { this.assignedStaffId = assignedStaffId; }

    public String getAssignedStaffName() { return assignedStaffName; }
    public void setAssignedStaffName(String assignedStaffName) { this.assignedStaffName = assignedStaffName; }

    public String getInspectionNotes() { return inspectionNotes; }
    public void setInspectionNotes(String inspectionNotes) { this.inspectionNotes = inspectionNotes; }

    public String getMaintenanceNotes() { return maintenanceNotes; }
    public void setMaintenanceNotes(String maintenanceNotes) { this.maintenanceNotes = maintenanceNotes; }

    public String getWorkProgress() { return workProgress; }
    public void setWorkProgress(String workProgress) { this.workProgress = workProgress; }

    public String getResolutionDetails() { return resolutionDetails; }
    public void setResolutionDetails(String resolutionDetails) { this.resolutionDetails = resolutionDetails; }

    public Integer getRating() { return rating; }
    public void setRating(Integer rating) { this.rating = rating; }

    public String getFeedback() { return feedback; }
    public void setFeedback(String feedback) { this.feedback = feedback; }

    public LocalDateTime getFeedbackSubmittedAt() { return feedbackSubmittedAt; }
    public void setFeedbackSubmittedAt(LocalDateTime feedbackSubmittedAt) { this.feedbackSubmittedAt = feedbackSubmittedAt; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
