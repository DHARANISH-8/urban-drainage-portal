package com.urbandrainage.portal.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "drainage_infrastructure")
public class DrainageInfrastructure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, length = 24)
    private String drainCode;

    @Column(nullable = false)
    private String type; // STORM_DRAIN, DRAINAGE_CHANNEL, OUTLET, CULVERT, MANHOLE, PUMPING_STATION

    @Column(length = 2000)
    private String description;

    @Column(nullable = false)
    private Double latitude;

    @Column(nullable = false)
    private Double longitude;

    private String address;

    @Column(nullable = false)
    private String status; // OPERATIONAL, MAINTENANCE_REQUIRED, UNDER_REPAIR, INACTIVE

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private LocalDateTime lastMaintenanceAt;

    public DrainageInfrastructure() {}

    @PrePersist
    public void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        this.createdAt = now;
        this.updatedAt = now;
        if (this.status == null) {
            this.status = "OPERATIONAL";
        }
    }

    @PreUpdate
    public void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDrainCode() { return drainCode; }
    public void setDrainCode(String drainCode) { this.drainCode = drainCode; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Double getLatitude() { return latitude; }
    public void setLatitude(Double latitude) { this.latitude = latitude; }

    public Double getLongitude() { return longitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public LocalDateTime getLastMaintenanceAt() { return lastMaintenanceAt; }
    public void setLastMaintenanceAt(LocalDateTime lastMaintenanceAt) { this.lastMaintenanceAt = lastMaintenanceAt; }
}
