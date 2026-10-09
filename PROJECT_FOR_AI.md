# Urban Drainage Portal — AI Review Bundle

Generated from the working project on 2026-09-18. This document contains all text-based source code, configuration, tests, documentation, and dependency manifests required for code analysis and enhancement.

Security note: the PostgreSQL password in `backend/src/main/resources/application.properties` has been redacted. Provide credentials only through environment variables when running the project.

## Included text files

- `backend/duplicate_backend.py`
- `backend/pom.xml`
- `backend/src/main/java/com/urbandrainage/portal/controller/ComplaintController.java`
- `backend/src/main/java/com/urbandrainage/portal/controller/DrainageController.java`
- `backend/src/main/java/com/urbandrainage/portal/controller/InfrastructureController.java`
- `backend/src/main/java/com/urbandrainage/portal/controller/NotificationController.java`
- `backend/src/main/java/com/urbandrainage/portal/controller/UserController.java`
- `backend/src/main/java/com/urbandrainage/portal/DataInitializer.java`
- `backend/src/main/java/com/urbandrainage/portal/dto/AssignmentDTO.java`
- `backend/src/main/java/com/urbandrainage/portal/dto/ComplaintRequestDTO.java`
- `backend/src/main/java/com/urbandrainage/portal/dto/DashboardStatsDTO.java`
- `backend/src/main/java/com/urbandrainage/portal/dto/InfrastructureDTO.java`
- `backend/src/main/java/com/urbandrainage/portal/dto/RunoffRequest.java`
- `backend/src/main/java/com/urbandrainage/portal/dto/StatusUpdateDTO.java`
- `backend/src/main/java/com/urbandrainage/portal/dto/StorageRequest.java`
- `backend/src/main/java/com/urbandrainage/portal/entity/DrainageComplaint.java`
- `backend/src/main/java/com/urbandrainage/portal/entity/DrainageInfrastructure.java`
- `backend/src/main/java/com/urbandrainage/portal/entity/Notification.java`
- `backend/src/main/java/com/urbandrainage/portal/entity/User.java`
- `backend/src/main/java/com/urbandrainage/portal/repository/ComplaintRepository.java`
- `backend/src/main/java/com/urbandrainage/portal/repository/InfrastructureRepository.java`
- `backend/src/main/java/com/urbandrainage/portal/repository/NotificationRepository.java`
- `backend/src/main/java/com/urbandrainage/portal/repository/UserRepository.java`
- `backend/src/main/java/com/urbandrainage/portal/service/ComplaintService.java`
- `backend/src/main/java/com/urbandrainage/portal/service/DrainageCalculationService.java`
- `backend/src/main/java/com/urbandrainage/portal/service/InfrastructureService.java`
- `backend/src/main/java/com/urbandrainage/portal/service/NotificationService.java`
- `backend/src/main/java/com/urbandrainage/portal/service/UserService.java`
- `backend/src/main/java/com/urbandrainage/portal/UrbanDrainagePortalApplication.java`
- `backend/src/main/resources/application.properties`
- `backend/src/test/java/com/urbandrainage/portal/service/ComplaintServiceTest.java`
- `backend/src/test/java/com/urbandrainage/portal/service/DrainageCalculationServiceTest.java`
- `frontend/index.html`
- `frontend/package.json`
- `frontend/package-lock.json`
- `frontend/public/favicon.svg`
- `frontend/public/icons.svg`
- `frontend/README.md`
- `frontend/src/App.css`
- `frontend/src/App.jsx`
- `frontend/src/assets/react.svg`
- `frontend/src/assets/vite.svg`
- `frontend/src/components/ComplaintDetail.jsx`
- `frontend/src/components/ComplaintList.jsx`
- `frontend/src/components/DrainageMap.jsx`
- `frontend/src/components/EmergencyMonitoring.jsx`
- `frontend/src/components/InfrastructureManager.jsx`
- `frontend/src/components/MaintenanceBoard.jsx`
- `frontend/src/components/NavbarHeader.jsx`
- `frontend/src/components/NotificationsView.jsx`
- `frontend/src/components/ProfileView.jsx`
- `frontend/src/components/ReportIssue.jsx`
- `frontend/src/components/SidebarNav.jsx`
- `frontend/src/components/StormwaterAnalysis.jsx`
- `frontend/src/index.css`
- `frontend/src/main.jsx`
- `frontend/vite.config.js`
- `README.md`

## Binary/static asset manifest

- `frontend/src/assets/hero.png` (13057 bytes; omitted because it is binary)

## Source files

### `backend/duplicate_backend.py`

``python
"""Example backend module with duplicate code blocks."""

def calculate_runoff(area, rainfall_intensity, runoff_coefficient):
    """Calculate runoff volume from basic hydrologic inputs."""
    return area * rainfall_intensity * runoff_coefficient


def calculate_runoff(area, rainfall_intensity, runoff_coefficient):
    """Duplicate implementation of the same runoff calculation."""
    return area * rainfall_intensity * runoff_coefficient


def compute_storage_capacity(length, width, depth):
    """Compute storage capacity for a rectangular basin."""
    return length * width * depth


def compute_storage_capacity(length, width, depth):
    """Duplicate implementation of the same storage capacity calculation."""
    return length * width * depth
````

### `backend/pom.xml`

``xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.3.2</version>
        <relativePath/>
    </parent>

    <groupId>com.urbandrainage</groupId>
    <artifactId>urban-drainage-portal</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>urban-drainage-portal</name>
    <description>Spring Boot backend for the Urban Drainage Portal</description>

    <properties>
        <java.version>17</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
````

### `backend/src/main/java/com/urbandrainage/portal/controller/ComplaintController.java`

``java
package com.urbandrainage.portal.controller;

import com.urbandrainage.portal.dto.AssignmentDTO;
import com.urbandrainage.portal.dto.ComplaintRequestDTO;
import com.urbandrainage.portal.dto.DashboardStatsDTO;
import com.urbandrainage.portal.dto.StatusUpdateDTO;
import com.urbandrainage.portal.entity.DrainageComplaint;
import com.urbandrainage.portal.service.ComplaintService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/complaints")
@CrossOrigin(origins = "*")
public class ComplaintController {

    private final ComplaintService complaintService;

    public ComplaintController(ComplaintService complaintService) {
        this.complaintService = complaintService;
    }

    @PostMapping
    public ResponseEntity<DrainageComplaint> createComplaint(@Valid @RequestBody ComplaintRequestDTO dto) {
        DrainageComplaint created = complaintService.createComplaint(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @GetMapping
    public ResponseEntity<List<DrainageComplaint>> getAllComplaints() {
        return ResponseEntity.ok(complaintService.getAllComplaints());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<DrainageComplaint>> getComplaintsByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(complaintService.getComplaintsByUser(userId));
    }

    @GetMapping("/staff/{staffId}")
    public ResponseEntity<List<DrainageComplaint>> getComplaintsByStaff(@PathVariable Long staffId) {
        return ResponseEntity.ok(complaintService.getComplaintsByStaff(staffId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<DrainageComplaint> getComplaintById(@PathVariable Long id) {
        return complaintService.getComplaintById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/assign")
    public ResponseEntity<DrainageComplaint> assignStaff(@PathVariable Long id, @Valid @RequestBody AssignmentDTO dto) {
        DrainageComplaint updated = complaintService.assignStaff(id, dto.staffId(), dto.staffName());
        return ResponseEntity.ok(updated);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<DrainageComplaint> updateStatus(@PathVariable Long id, @Valid @RequestBody StatusUpdateDTO dto) {
        DrainageComplaint updated = complaintService.updateStatus(id, dto);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComplaint(@PathVariable Long id) {
        complaintService.deleteComplaint(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/stats")
    public ResponseEntity<DashboardStatsDTO> getStats() {
        return ResponseEntity.ok(complaintService.getDashboardStats());
    }

    @GetMapping("/map")
    public ResponseEntity<List<DrainageComplaint>> getComplaintsForMap() {
        return ResponseEntity.ok(complaintService.getAllComplaints());
    }
}
````

### `backend/src/main/java/com/urbandrainage/portal/controller/DrainageController.java`

``java
package com.urbandrainage.portal.controller;

import com.urbandrainage.portal.dto.RunoffRequest;
import com.urbandrainage.portal.dto.StorageRequest;
import com.urbandrainage.portal.entity.DrainageComplaint;
import com.urbandrainage.portal.entity.DrainageInfrastructure;
import com.urbandrainage.portal.service.ComplaintService;
import com.urbandrainage.portal.service.DrainageCalculationService;
import com.urbandrainage.portal.service.InfrastructureService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DrainageController {

    private final DrainageCalculationService drainageCalculationService;
    private final ComplaintService complaintService;
    private final InfrastructureService infrastructureService;

    public DrainageController(DrainageCalculationService drainageCalculationService,
                              ComplaintService complaintService,
                              InfrastructureService infrastructureService) {
        this.drainageCalculationService = drainageCalculationService;
        this.complaintService = complaintService;
        this.infrastructureService = infrastructureService;
    }

    @PostMapping("/runoff")
    public ResponseEntity<Map<String, Double>> calculateRunoff(@Valid @RequestBody RunoffRequest request) {
        double runoff = drainageCalculationService.calculateRunoff(
                request.area(),
                request.rainfallIntensity(),
                request.runoffCoefficient()
        );

        return ResponseEntity.ok(Map.of("runoffVolume", runoff));
    }

    @PostMapping("/storage")
    public ResponseEntity<Map<String, Double>> calculateStorage(@Valid @RequestBody StorageRequest request) {
        double capacity = drainageCalculationService.calculateStorageCapacity(
                request.length(),
                request.width(),
                request.depth()
        );

        return ResponseEntity.ok(Map.of("storageCapacity", capacity));
    }

    @GetMapping("/drainage/map")
    public ResponseEntity<Map<String, Object>> getCompleteMapData() {
        List<DrainageComplaint> complaints = complaintService.getAllComplaints();
        List<DrainageInfrastructure> infrastructure = infrastructureService.getAllInfrastructure();

        Map<String, Object> mapData = new HashMap<>();
        mapData.put("complaints", complaints);
        mapData.put("infrastructure", infrastructure);

        return ResponseEntity.ok(mapData);
    }
}
````

### `backend/src/main/java/com/urbandrainage/portal/controller/InfrastructureController.java`

``java
package com.urbandrainage.portal.controller;

import com.urbandrainage.portal.dto.InfrastructureDTO;
import com.urbandrainage.portal.entity.DrainageInfrastructure;
import com.urbandrainage.portal.service.InfrastructureService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drainage/infrastructure")
@CrossOrigin(origins = "*")
public class InfrastructureController {

    private final InfrastructureService infrastructureService;

    public InfrastructureController(InfrastructureService infrastructureService) {
        this.infrastructureService = infrastructureService;
    }

    @PostMapping
    public ResponseEntity<DrainageInfrastructure> createInfrastructure(@Valid @RequestBody InfrastructureDTO dto) {
        DrainageInfrastructure created = infrastructureService.createInfrastructure(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @GetMapping
    public ResponseEntity<List<DrainageInfrastructure>> getAllInfrastructure() {
        return ResponseEntity.ok(infrastructureService.getAllInfrastructure());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DrainageInfrastructure> getInfrastructureById(@PathVariable Long id) {
        return infrastructureService.getInfrastructureById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<DrainageInfrastructure> updateInfrastructure(@PathVariable Long id, @Valid @RequestBody InfrastructureDTO dto) {
        DrainageInfrastructure updated = infrastructureService.updateInfrastructure(id, dto);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInfrastructure(@PathVariable Long id) {
        infrastructureService.deleteInfrastructure(id);
        return ResponseEntity.noContent().build();
    }
}
````

### `backend/src/main/java/com/urbandrainage/portal/controller/NotificationController.java`

``java
package com.urbandrainage.portal.controller;

import com.urbandrainage.portal.entity.Notification;
import com.urbandrainage.portal.service.NotificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin(origins = "*")
public class NotificationController {

    private final NotificationService notificationService;

    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Notification>> getUserNotifications(@PathVariable Long userId) {
        return ResponseEntity.ok(notificationService.getUserNotifications(userId));
    }

    @PutMapping("/{id}/read")
    public ResponseEntity<Void> markAsRead(@PathVariable Long id) {
        notificationService.markAsRead(id);
        return ResponseEntity.noContent().build();
    }
}
````

### `backend/src/main/java/com/urbandrainage/portal/controller/UserController.java`

``java
package com.urbandrainage.portal.controller;

import com.urbandrainage.portal.entity.User;
import com.urbandrainage.portal.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/staff")
    public ResponseEntity<List<User>> getStaffMembers() {
        return ResponseEntity.ok(userService.getStaffMembers());
    }
}
````

### `backend/src/main/java/com/urbandrainage/portal/DataInitializer.java`

``java
package com.urbandrainage.portal;

import com.urbandrainage.portal.entity.DrainageComplaint;
import com.urbandrainage.portal.entity.DrainageInfrastructure;
import com.urbandrainage.portal.entity.Notification;
import com.urbandrainage.portal.entity.User;
import com.urbandrainage.portal.repository.ComplaintRepository;
import com.urbandrainage.portal.repository.InfrastructureRepository;
import com.urbandrainage.portal.repository.NotificationRepository;
import com.urbandrainage.portal.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ComplaintRepository complaintRepository;
    private final InfrastructureRepository infrastructureRepository;
    private final NotificationRepository notificationRepository;

    public DataInitializer(UserRepository userRepository,
                           ComplaintRepository complaintRepository,
                           InfrastructureRepository infrastructureRepository,
                           NotificationRepository notificationRepository) {
        this.userRepository = userRepository;
        this.complaintRepository = complaintRepository;
        this.infrastructureRepository = infrastructureRepository;
        this.notificationRepository = notificationRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() == 0) {
            seedUsers();
        }
        if (infrastructureRepository.count() == 0) {
            seedInfrastructure();
        }
        if (complaintRepository.count() == 0) {
            seedComplaints();
        }
        if (notificationRepository.count() == 0) {
            seedNotifications();
        }
    }

    private void seedUsers() {
        User citizen = new User(1L, "John Doe", "john.citizen@city.gov", "CITIZEN", "+1 555-0192", "Urban Drainage Department");
        User staff1 = new User(2L, "Robert Vance", "robert.vance@city.gov", "STAFF", "+1 555-0143", "Urban Drainage Department");
        User staff2 = new User(3L, "Elena Rostova", "elena.rostova@city.gov", "STAFF", "+1 555-0188", "Urban Drainage Department");
        User admin = new User(4L, "Admin Officer", "admin.drainage@city.gov", "ADMIN", "+1 555-0100", "Urban Drainage Department");

        userRepository.saveAll(List.of(citizen, staff1, staff2, admin));
    }

    private void seedInfrastructure() {
        DrainageInfrastructure inf1 = new DrainageInfrastructure();
        inf1.setName("Greely Valley Main Storm Outlet");
        inf1.setType("OUTLET");
        inf1.setDescription("High capacity discharge outlet serving Sector 4 urban catchment.");
        inf1.setLatitude(19.0760);
        inf1.setLongitude(72.8777);
        inf1.setAddress("Greely Valley, Sector 4");
        inf1.setStatus("OPERATIONAL");

        DrainageInfrastructure inf2 = new DrainageInfrastructure();
        inf2.setName("Main St Box Culvert C-14");
        inf2.setType("CULVERT");
        inf2.setDescription("Reinforced concrete twin box culvert crossing 5th Avenue.");
        inf2.setLatitude(19.0820);
        inf2.setLongitude(72.8850);
        inf2.setAddress("Main St & 5th Ave");
        inf2.setStatus("MAINTENANCE_REQUIRED");

        DrainageInfrastructure inf3 = new DrainageInfrastructure();
        inf3.setName("Zone 8 Drainage Channel");
        inf3.setType("DRAINAGE_CHANNEL");
        inf3.setDescription("Primary open trapezoidal concrete channel for stormwater diversion.");
        inf3.setLatitude(19.0680);
        inf3.setLongitude(72.8690);
        inf3.setAddress("Bridge Ln, Zone 8");
        inf3.setStatus("OPERATIONAL");

        DrainageInfrastructure inf4 = new DrainageInfrastructure();
        inf4.setName("Park Ave Deep Pumping Station");
        inf4.setType("PUMPING_STATION");
        inf4.setDescription("Dual submersible 150HP stormwater dewatering pump facility.");
        inf4.setLatitude(19.0900);
        inf4.setLongitude(72.8920);
        inf4.setAddress("Park Ave, Drain D-17");
        inf4.setStatus("OPERATIONAL");

        infrastructureRepository.saveAll(List.of(inf1, inf2, inf3, inf4));
    }

    private void seedComplaints() {
        DrainageComplaint c1 = new DrainageComplaint();
        c1.setUserId(1L);
        c1.setUserName("John Doe");
        c1.setIssueType("BLOCKED_DRAIN");
        c1.setDescription("Heavy siltation and plastic debris blocking the curb inlet storm drain.");
        c1.setLatitude(19.0785);
        c1.setLongitude(72.8790);
        c1.setAddress("Perundurai Road, Sector 3");
        c1.setPriority("HIGH");
        c1.setStatus("IN_PROGRESS");
        c1.setAssignedStaffId(2L);
        c1.setAssignedStaffName("Robert Vance");
        c1.setInspectionNotes("Site inspected. Vacuum truck dispatched for jetting operation.");
        c1.setMaintenanceNotes("Crews actively clearing silt blockages from line.");

        DrainageComplaint c2 = new DrainageComplaint();
        c2.setUserId(1L);
        c2.setUserName("John Doe");
        c2.setIssueType("FLOODING");
        c2.setDescription("Severe monsoon flooding across 200m road section near school.");
        c2.setLatitude(19.0740);
        c2.setLongitude(72.8710);
        c2.setAddress("Greely Valley, Sector 4");
        c2.setPriority("EMERGENCY");
        c2.setStatus("ASSIGNED");
        c2.setAssignedStaffId(3L);
        c2.setAssignedStaffName("Elena Rostova");
        c2.setInspectionNotes("Emergency alert verified. Dewatering pump truck deployed.");

        DrainageComplaint c3 = new DrainageComplaint();
        c3.setUserId(1L);
        c3.setUserName("John Doe");
        c3.setIssueType("MANHOLE_PROBLEM");
        c3.setDescription("Damaged cast-iron manhole cover presenting hazard to pedestrians.");
        c3.setLatitude(19.0850);
        c3.setLongitude(72.8880);
        c3.setAddress("Main St & 8th Cross");
        c3.setPriority("MEDIUM");
        c3.setStatus("RESOLVED");
        c3.setAssignedStaffId(2L);
        c3.setAssignedStaffName("Robert Vance");
        c3.setInspectionNotes("Replaced broken frame and installed heavy duty cover.");
        c3.setMaintenanceNotes("Work complete and safety barricades removed.");

        DrainageComplaint c4 = new DrainageComplaint();
        c4.setUserId(1L);
        c4.setUserName("John Doe");
        c4.setIssueType("DRAIN_OVERFLOW");
        c4.setDescription("Water overflowing from secondary roadside channel into commercial plaza.");
        c4.setLatitude(19.0690);
        c4.setLongitude(72.8640);
        c4.setAddress("Market Road, Zone 2");
        c4.setPriority("HIGH");
        c4.setStatus("UNDER_REVIEW");

        complaintRepository.saveAll(List.of(c1, c2, c3, c4));
    }

    private void seedNotifications() {
        Notification n1 = new Notification(
                1L,
                "Emergency Flood Advisory",
                "Monsoon alert: Emergency crew dispatched to Greely Valley, Sector 4 for severe waterlogging relief.",
                "EMERGENCY_ALERT"
        );
        Notification n2 = new Notification(
                1L,
                "Complaint Assigned",
                "Your complaint #CMP-1 (Blocked Drain) has been assigned to Senior Technician Robert Vance.",
                "ASSIGNMENT"
        );
        Notification n3 = new Notification(
                1L,
                "Complaint Resolved",
                "Complaint #CMP-3 (Damaged Manhole) has been resolved by maintenance team.",
                "STATUS_UPDATE"
        );

        notificationRepository.saveAll(List.of(n1, n2, n3));
    }
}
````

### `backend/src/main/java/com/urbandrainage/portal/dto/AssignmentDTO.java`

``java
package com.urbandrainage.portal.dto;

import jakarta.validation.constraints.NotNull;

public record AssignmentDTO(
    @NotNull(message = "Staff ID is required")
    Long staffId,

    String staffName
) {}
````

### `backend/src/main/java/com/urbandrainage/portal/dto/ComplaintRequestDTO.java`

``java
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
````

### `backend/src/main/java/com/urbandrainage/portal/dto/DashboardStatsDTO.java`

``java
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
````

### `backend/src/main/java/com/urbandrainage/portal/dto/InfrastructureDTO.java`

``java
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
````

### `backend/src/main/java/com/urbandrainage/portal/dto/RunoffRequest.java`

``java
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
````

### `backend/src/main/java/com/urbandrainage/portal/dto/StatusUpdateDTO.java`

``java
package com.urbandrainage.portal.dto;

import jakarta.validation.constraints.NotBlank;

public record StatusUpdateDTO(
    @NotBlank(message = "Status is required")
    String status,

    String inspectionNotes,
    String maintenanceNotes
) {}
````

### `backend/src/main/java/com/urbandrainage/portal/dto/StorageRequest.java`

``java
package com.urbandrainage.portal.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;

public record StorageRequest(
        @NotNull(message = "Length is required")
        @DecimalMin(value = "0.0", inclusive = false, message = "Length must be greater than 0")
        Double length,

        @NotNull(message = "Width is required")
        @DecimalMin(value = "0.0", inclusive = false, message = "Width must be greater than 0")
        Double width,

        @NotNull(message = "Depth is required")
        @DecimalMin(value = "0.0", inclusive = false, message = "Depth must be greater than 0")
        Double depth
) {
}
````

### `backend/src/main/java/com/urbandrainage/portal/entity/DrainageComplaint.java`

``java
package com.urbandrainage.portal.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "drainage_complaints")
public class DrainageComplaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    private String userName;

    @Column(nullable = false)
    private String issueType; // BLOCKED_DRAIN, DRAIN_OVERFLOW, WATERLOGGING, etc.

    @Column(length = 2000)
    private String description;

    @Column(nullable = false)
    private Double latitude;

    @Column(nullable = false)
    private Double longitude;

    private String address;

    @Column(length = 5000)
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
````

### `backend/src/main/java/com/urbandrainage/portal/entity/DrainageInfrastructure.java`

``java
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
}
````

### `backend/src/main/java/com/urbandrainage/portal/entity/Notification.java`

``java
package com.urbandrainage.portal.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "notifications")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 1000)
    private String message;

    private String type;

    private boolean isRead = false;

    private LocalDateTime createdAt;

    public Notification() {}

    public Notification(Long userId, String title, String message, String type) {
        this.userId = userId;
        this.title = title;
        this.message = message;
        this.type = type;
        this.createdAt = LocalDateTime.now();
        this.isRead = false;
    }

    @PrePersist
    public void onCreate() {
        if (this.createdAt == null) {
            this.createdAt = LocalDateTime.now();
        }
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public boolean isRead() { return isRead; }
    public void setRead(boolean read) { isRead = read; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
````

### `backend/src/main/java/com/urbandrainage/portal/entity/User.java`

``java
package com.urbandrainage.portal.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String role; // CITIZEN, STAFF, ADMIN

    private String phone;

    private String department;

    private LocalDateTime createdAt;

    public User() {}

    public User(Long id, String name, String email, String role, String phone, String department) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.phone = phone;
        this.department = department;
        this.createdAt = LocalDateTime.now();
    }

    @PrePersist
    public void onCreate() {
        if (this.createdAt == null) {
            this.createdAt = LocalDateTime.now();
        }
        if (this.department == null) {
            this.department = "Urban Drainage Department";
        }
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
````

### `backend/src/main/java/com/urbandrainage/portal/repository/ComplaintRepository.java`

``java
package com.urbandrainage.portal.repository;

import com.urbandrainage.portal.entity.DrainageComplaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComplaintRepository extends JpaRepository<DrainageComplaint, Long> {
    List<DrainageComplaint> findByUserIdOrderByCreatedAtDesc(Long userId);
    List<DrainageComplaint> findByAssignedStaffIdOrderByCreatedAtDesc(Long assignedStaffId);
    List<DrainageComplaint> findByPriority(String priority);
    List<DrainageComplaint> findByStatus(String status);
    List<DrainageComplaint> findAllByOrderByCreatedAtDesc();
    long countByStatus(String status);
    long countByPriority(String priority);
}
````

### `backend/src/main/java/com/urbandrainage/portal/repository/InfrastructureRepository.java`

``java
package com.urbandrainage.portal.repository;

import com.urbandrainage.portal.entity.DrainageInfrastructure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InfrastructureRepository extends JpaRepository<DrainageInfrastructure, Long> {
    List<DrainageInfrastructure> findByType(String type);
    List<DrainageInfrastructure> findByStatus(String status);
}
````

### `backend/src/main/java/com/urbandrainage/portal/repository/NotificationRepository.java`

``java
package com.urbandrainage.portal.repository;

import com.urbandrainage.portal.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByUserIdOrderByCreatedAtDesc(Long userId);
    long countByUserIdAndIsReadFalse(Long userId);
}
````

### `backend/src/main/java/com/urbandrainage/portal/repository/UserRepository.java`

``java
package com.urbandrainage.portal.repository;

import com.urbandrainage.portal.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByRole(String role);
}
````

### `backend/src/main/java/com/urbandrainage/portal/service/ComplaintService.java`

``java
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
````

### `backend/src/main/java/com/urbandrainage/portal/service/DrainageCalculationService.java`

``java
package com.urbandrainage.portal.service;

import org.springframework.stereotype.Service;

@Service
public class DrainageCalculationService {

    public double calculateRunoff(double area, double rainfallIntensity, double runoffCoefficient) {
        return area * rainfallIntensity * runoffCoefficient;
    }

    public double calculateStorageCapacity(double length, double width, double depth) {
        return length * width * depth;
    }
}
````

### `backend/src/main/java/com/urbandrainage/portal/service/InfrastructureService.java`

``java
package com.urbandrainage.portal.service;

import com.urbandrainage.portal.dto.InfrastructureDTO;
import com.urbandrainage.portal.entity.DrainageInfrastructure;
import com.urbandrainage.portal.repository.InfrastructureRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InfrastructureService {

    private final InfrastructureRepository infrastructureRepository;

    public InfrastructureService(InfrastructureRepository infrastructureRepository) {
        this.infrastructureRepository = infrastructureRepository;
    }

    public List<DrainageInfrastructure> getAllInfrastructure() {
        return infrastructureRepository.findAll();
    }

    public Optional<DrainageInfrastructure> getInfrastructureById(Long id) {
        return infrastructureRepository.findById(id);
    }

    public DrainageInfrastructure createInfrastructure(InfrastructureDTO dto) {
        DrainageInfrastructure infra = new DrainageInfrastructure();
        infra.setName(dto.name());
        infra.setType(dto.type().toUpperCase());
        infra.setDescription(dto.description());
        infra.setLatitude(dto.latitude());
        infra.setLongitude(dto.longitude());
        infra.setAddress(dto.address());
        infra.setStatus(dto.status() != null ? dto.status().toUpperCase() : "OPERATIONAL");

        return infrastructureRepository.save(infra);
    }

    public DrainageInfrastructure updateInfrastructure(Long id, InfrastructureDTO dto) {
        DrainageInfrastructure infra = infrastructureRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Infrastructure asset not found with ID: " + id));

        infra.setName(dto.name());
        infra.setType(dto.type().toUpperCase());
        infra.setDescription(dto.description());
        infra.setLatitude(dto.latitude());
        infra.setLongitude(dto.longitude());
        infra.setAddress(dto.address());
        if (dto.status() != null) {
            infra.setStatus(dto.status().toUpperCase());
        }

        return infrastructureRepository.save(infra);
    }

    public void deleteInfrastructure(Long id) {
        infrastructureRepository.deleteById(id);
    }
}
````

### `backend/src/main/java/com/urbandrainage/portal/service/NotificationService.java`

``java
package com.urbandrainage.portal.service;

import com.urbandrainage.portal.entity.Notification;
import com.urbandrainage.portal.repository.NotificationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    private final NotificationRepository notificationRepository;

    public NotificationService(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    public Notification createNotification(Long userId, String title, String message, String type) {
        Notification notification = new Notification(userId, title, message, type);
        return notificationRepository.save(notification);
    }

    public List<Notification> getUserNotifications(Long userId) {
        return notificationRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    public void markAsRead(Long notificationId) {
        notificationRepository.findById(notificationId).ifPresent(n -> {
            n.setRead(true);
            notificationRepository.save(n);
        });
    }

    public long getUnreadCount(Long userId) {
        return notificationRepository.countByUserIdAndIsReadFalse(userId);
    }
}
````

### `backend/src/main/java/com/urbandrainage/portal/service/UserService.java`

``java
package com.urbandrainage.portal.service;

import com.urbandrainage.portal.entity.User;
import com.urbandrainage.portal.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<User> getStaffMembers() {
        return userRepository.findByRole("STAFF");
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
````

### `backend/src/main/java/com/urbandrainage/portal/UrbanDrainagePortalApplication.java`

``java
package com.urbandrainage.portal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UrbanDrainagePortalApplication {

    public static void main(String[] args) {
        SpringApplication.run(UrbanDrainagePortalApplication.class, args);
    }
}
````

### `backend/src/main/resources/application.properties`

``properties
server.port=8081
spring.application.name=urban-drainage-portal

# Database Configuration (Neon PostgreSQL)
spring.datasource.url=${SPRING_DATASOURCE_URL:jdbc:postgresql://${PGHOST:ep-cool-dust-au249j6y-pooler.c-10.us-east-1.aws.neon.tech}:5432/${PGDATABASE:neondb}?sslmode=require}
spring.datasource.driver-class-name=${SPRING_DATASOURCE_DRIVER:org.postgresql.Driver}
spring.datasource.username=${SPRING_DATASOURCE_USERNAME:${PGUSER:neondb_owner}}
spring.datasource.password=${SPRING_DATASOURCE_PASSWORD:${PGPASSWORD:REDACTED}}

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false

# Multipart / File Upload limit
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB
````

### `backend/src/test/java/com/urbandrainage/portal/service/ComplaintServiceTest.java`

``java
package com.urbandrainage.portal.service;

import com.urbandrainage.portal.dto.ComplaintRequestDTO;
import com.urbandrainage.portal.dto.DashboardStatsDTO;
import com.urbandrainage.portal.dto.StatusUpdateDTO;
import com.urbandrainage.portal.entity.DrainageComplaint;
import com.urbandrainage.portal.repository.ComplaintRepository;
import com.urbandrainage.portal.repository.InfrastructureRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class ComplaintServiceTest {

    @Mock
    private ComplaintRepository complaintRepository;

    @Mock
    private InfrastructureRepository infrastructureRepository;

    @Mock
    private NotificationService notificationService;

    @InjectMocks
    private ComplaintService complaintService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void createComplaint_shouldSaveAndNotify() {
        ComplaintRequestDTO dto = new ComplaintRequestDTO(
                1L, "John Doe", "BLOCKED_DRAIN", "Drain blocked with trash",
                19.07, 72.87, "Main St", null, "HIGH"
        );

        DrainageComplaint mockSaved = new DrainageComplaint();
        mockSaved.setId(10L);
        mockSaved.setUserId(1L);
        mockSaved.setIssueType("BLOCKED_DRAIN");
        mockSaved.setStatus("SUBMITTED");

        when(complaintRepository.save(any(DrainageComplaint.class))).thenReturn(mockSaved);

        DrainageComplaint result = complaintService.createComplaint(dto);

        assertNotNull(result);
        assertEquals(10L, result.getId());
        verify(complaintRepository, times(1)).save(any(DrainageComplaint.class));
        verify(notificationService, times(1)).createNotification(anyLong(), anyString(), anyString(), anyString());
    }

    @Test
    void updateStatus_shouldUpdateAndNotify() {
        DrainageComplaint existing = new DrainageComplaint();
        existing.setId(5L);
        existing.setUserId(1L);
        existing.setStatus("ASSIGNED");

        StatusUpdateDTO updateDTO = new StatusUpdateDTO("IN_PROGRESS", "Inspection complete", "Cleaning started");

        when(complaintRepository.findById(5L)).thenReturn(Optional.of(existing));
        when(complaintRepository.save(any(DrainageComplaint.class))).thenAnswer(i -> i.getArguments()[0]);

        DrainageComplaint result = complaintService.updateStatus(5L, updateDTO);

        assertEquals("IN_PROGRESS", result.getStatus());
        assertEquals("Inspection complete", result.getInspectionNotes());
        assertEquals("Cleaning started", result.getMaintenanceNotes());
        verify(notificationService, times(1)).createNotification(anyLong(), anyString(), anyString(), anyString());
    }

    @Test
    void getDashboardStats_shouldReturnCorrectCounts() {
        when(complaintRepository.count()).thenReturn(10L);
        when(complaintRepository.countByStatus("SUBMITTED")).thenReturn(2L);
        when(complaintRepository.countByStatus("IN_PROGRESS")).thenReturn(3L);
        when(complaintRepository.countByStatus("RESOLVED")).thenReturn(4L);
        when(complaintRepository.countByPriority("EMERGENCY")).thenReturn(1L);
        when(infrastructureRepository.count()).thenReturn(5L);

        DashboardStatsDTO stats = complaintService.getDashboardStats();

        assertEquals(10L, stats.totalComplaints());
        assertEquals(2L, stats.submitted());
        assertEquals(3L, stats.inProgress());
        assertEquals(4L, stats.resolved());
        assertEquals(1L, stats.emergencyCount());
        assertEquals(5L, stats.totalInfrastructure());
    }
}
````

### `backend/src/test/java/com/urbandrainage/portal/service/DrainageCalculationServiceTest.java`

``java
package com.urbandrainage.portal.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class DrainageCalculationServiceTest {

    private final DrainageCalculationService service = new DrainageCalculationService();

    @Test
    void calculateRunoff_shouldReturnExpectedValue() {
        double result = service.calculateRunoff(1000, 50, 0.7);

        assertEquals(35000.0, result, 0.0001);
    }

    @Test
    void calculateStorageCapacity_shouldReturnExpectedValue() {
        double result = service.calculateStorageCapacity(10, 8, 5);

        assertEquals(400.0, result, 0.0001);
    }
}
````

### `frontend/index.html`

``html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Urban Drainage Portal | Municipal Department</title>

    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
````

### `frontend/package.json`

``json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.8",
    "react-dom": "^19.2.8"
  },
  "devDependencies": {
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.4",
    "oxlint": "^1.75.0",
    "vite": "^8.2.0"
  }
}
````

### `frontend/package-lock.json`

``json
{
  "name": "frontend",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "frontend",
      "version": "0.0.0",
      "dependencies": {
        "react": "^19.2.8",
        "react-dom": "^19.2.8"
      },
      "devDependencies": {
        "@types/react": "^19.2.17",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^6.0.4",
        "oxlint": "^1.75.0",
        "vite": "^8.2.0"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.143.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.143.0.tgz",
      "integrity": "sha512-u6JZdLBTLotrNC9Vd6vPssINdzcCzleKAH6EJKImQb7GtYvX5keN2dxkoK44stCc4tffE6QQRtZTXVSzsLUlWA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      }
    },
    "node_modules/@oxlint/binding-android-arm-eabi": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm-eabi/-/binding-android-arm-eabi-1.77.0.tgz",
      "integrity": "sha512-E06sKWS6PiI6HRxS1wyQg22HvApt01hI7fV+T3wUk3OSbaaP4a3hYGY/MIQDmASqCiRjBdpRQYkgMkqH82cWmQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-android-arm64": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm64/-/binding-android-arm64-1.77.0.tgz",
      "integrity": "sha512-NvsKz0KZxTp9cYWPLf+FXaSZwB3oO3peAjtukpOMBgse2vhQSoIIVqeO1yR0lEo/UcdZIDL18uq+kL0LzQ0ytA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-arm64": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-arm64/-/binding-darwin-arm64-1.77.0.tgz",
      "integrity": "sha512-bgjTn6nW4bQCFBvSvuHCpDD+sONvmpo4lGI4PxzMt1quBA+xYxhczk6RiCn3GZ9gY8uhaBbwhj9MdKGfu6T9DA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-x64": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-x64/-/binding-darwin-x64-1.77.0.tgz",
      "integrity": "sha512-aotaIttH1R6j1Rwhx0M0htgeZyGtVQqYNTVEYMN/UcgHPquGA6kmk9OyuDc3a2GKUQBC+3C3GVQCcrRPMYqAFA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-freebsd-x64": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-freebsd-x64/-/binding-freebsd-x64-1.77.0.tgz",
      "integrity": "sha512-nNx/wta7ksRAdYvq+l4AWjXkLxEXHALhENxjj2cYbQAIR4ybaA5L+hCbE63HOmft5czQ6ks+hb8vmEAnn7YGPg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-gnueabihf": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.77.0.tgz",
      "integrity": "sha512-tMLLjM7xXtzXisVCzkOTXNCy9bZVId2wteNwjohlFDR/jY6WagpEDA1c1wu4xRc20Hojaxj+V6DSR7gbKxijWA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-musleabihf": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-musleabihf/-/binding-linux-arm-musleabihf-1.77.0.tgz",
      "integrity": "sha512-MiAFDFaqR0tmHTAyo0YDcZ5hyLREdYw/RQhc2R3cbT+8O3tB+zqPM2th9TTQ+Uo3jn/embS+DO+HyX9ztCPkOQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-gnu": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.77.0.tgz",
      "integrity": "sha512-/xqQ3B16i1T4cyt/9Mn+4CpzhUXoBXp7kVpIwzOXNFLj5JmK1bIjsbSnX296Gg8A/o7oDtKWikFgBx0SLwztkw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-musl": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.77.0.tgz",
      "integrity": "sha512-LSbwuRKiNCenPDcbARqAZ5RfBy7gmj7vOvfJRLeCDU3gFtSxWbhv/+VTlaUqzUhNj1gFLHB8h7ALnxa/Az6z6g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-ppc64-gnu": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.77.0.tgz",
      "integrity": "sha512-QWdcH31mXEUe5Nq1s0CfCpceaKjIo9uZtwDjAuL681g1axf+5x8xrg/eXWaw//4NCxYZ4V4e5Hu5tvdR+pTBlg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-gnu": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-gnu/-/binding-linux-riscv64-gnu-1.77.0.tgz",
      "integrity": "sha512-GnOfYgJxbcElOiPZaDFDl406ONddwvOWk2jvAAAEjwAl4GofNoHF+/HHUIBYa6bFCArlcGPi0XjC4cU1pkgF/Q==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-musl": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-musl/-/binding-linux-riscv64-musl-1.77.0.tgz",
      "integrity": "sha512-AyEMTUCf0xY+hHF+IxqXFQIX0yQOIR8ykpY0lJNOw9xYqOzUX8dyZfRvlG0RfXwuQn2eonf/8NrMmDSZJjdqsA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-s390x-gnu": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.77.0.tgz",
      "integrity": "sha512-sPLzEcNvxd/oyVQ5oZo92CiHkFkpBeRop13E/P3TPY+hZfXHKCOWKI70TE2RYwMKFJDc20EMjH16L7NZICtKTw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-gnu": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.77.0.tgz",
      "integrity": "sha512-1Oh2ssH2L7lwyvkdSqaMUfsGfwU2Wfvew+obBUYjRVqhpBcUpwnsPSEr1IzVi9XqkuY10geiLsNKecqaZC34Dw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-musl": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-musl/-/binding-linux-x64-musl-1.77.0.tgz",
      "integrity": "sha512-0j/2wRgNGO+Qj/M1uu/p57h/hFTTWWcfie0ufkbabeus2s5+/QqkCflnMOwLLN5m2GsNeWp4xdl4cPa4n7QCOQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-openharmony-arm64": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-openharmony-arm64/-/binding-openharmony-arm64-1.77.0.tgz",
      "integrity": "sha512-BJ/j54qS0usEnyDkLYURMj2iiD9h5Cyy+ppzeMSXBGRXaGRNWnj1Mw14NqWMR5E/PzdgB30OOCCzLzbRoduafw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-arm64-msvc": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.77.0.tgz",
      "integrity": "sha512-Yh8w+g2Lpx7StrvtYkoz9JJvXjB9wxgFChFNb85nrXm/wj/XTwGWS1hve9+900HL7llrntYB3YP+y32E3tRqzA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-ia32-msvc": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-ia32-msvc/-/binding-win32-ia32-msvc-1.77.0.tgz",
      "integrity": "sha512-zja5b7+6a7UsRFgAQSrnax5vrzliEyNPLCjfXONu/vTWswaIVZGFajJZptaeRvPE4LghtFdAzVFlexTm7MVTGA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-x64-msvc": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.77.0.tgz",
      "integrity": "sha512-+teyvPDZ2RjUvo+SuCqS/UhaJl1QtdW5fWT5NJTV61V5MIuIS90Db9LixmtEGvXixyttiK62P96MSu3UlpviBw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.2.3.tgz",
      "integrity": "sha512-zrJtHDcaZJ1Fp7xf4hNl+7seH9Cn/N5TwLYkhgXREtBwAd/jaqW3uqeHxpDugJLVICWg4eW44kOQEGJ1r6jCGw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.2.3.tgz",
      "integrity": "sha512-ieIiibVCp0tX7TLu2cafoNPv8wJyYi01ekXpbf8q2j7F4rGAhhXb/eQh7ge9DRBY78GwmRQtvjZDux7EDbA8kA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.2.3.tgz",
      "integrity": "sha512-Zh9tCon19eDXJoihx0rqKhMUlMYqzwj3aPsSuHmI4RWZh62dWUL+DJN4C5YQya5TcQBJU/Fe8+rY0jhXTQITqA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.2.3.tgz",
      "integrity": "sha512-nGbJWewA1wrXXZiQhjAT5rhibGfns5ZNkDVqxsO6zJ3f3YvpoDNNmGMSbbhLuXKjNScaBJVOAboztAWVespQMg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.2.3.tgz",
      "integrity": "sha512-QNniJr5Kml0kDEB98jiDOJjXNroxIIi0IXIbdYzY26Xt1pVbeP62+KnoIZLwirOymX/0jDk/2gI/bNUv7A7OIw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.2.3.tgz",
      "integrity": "sha512-TkqEAcmmvH3I/q4114NB4RVt6241Dao48pF45uLcFGrwAaIn0iITgTAKP/dLjbN0R4buJjGb91+UHSoFmpgIWw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.2.3.tgz",
      "integrity": "sha512-NHqjnxpsndf4MPymxteFAWHHfkTL8HjWh1KB7z23ofZ6QO2euONuxDXjat69dKZRALnGypg8k8SsK8vZJoXv1Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.2.3.tgz",
      "integrity": "sha512-6tbrbwfz5GB9DQ4Jwo6hy9v+vR31xZlvzZ6n5Xut6Hhx5PvrA9q/HsK8KMaYQp063iqZGXwNvZtYNLD7EM/x0w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.2.3.tgz",
      "integrity": "sha512-oyuXxXmoZHjXC917IAPFAAv4wWAa0cM9afk8nx1+9/jNNOX1uPf8yDA6p7G0RypOfw/X0PQt5IfoquY1um+zSg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.2.3.tgz",
      "integrity": "sha512-TytMwF2KVGqP2tgd0I1OY0PAv78dZRAYcF5ssDzjM34SUXCED3uXvSd5+lHoC0bTD6eEdFz7LdQNCO1y0oVk9w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.2.3.tgz",
      "integrity": "sha512-/E9m3qstrJFVPoULV25mVQblSNExY2+kBsYe4sy0Tn0yOOgJ8wZbZt3KnRbF/XeU2Gl1STKUQnDNTqhIE5MD4A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.2.3.tgz",
      "integrity": "sha512-Kr0OcsoQI816i6HOl3vFHpd1K0eZyh76zgfj4c1nTyaTsd5r2Mj1lwM4R90y/qaCfmTn9eHy0SKwi98eitRxug==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.2.3.tgz",
      "integrity": "sha512-hOtMwTqnME+/gJcH/PCZ0wn0zPUjiWOgkHpxbSJpfGKMezHltx1S7/k1SitzVa7Ww2cqrDDaFbZEhcJZO8o+Jw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.2.3.tgz",
      "integrity": "sha512-ekcqMMkI2PlhYnfzQnB/cEdYUVVJViWvoUyLrbzgDoi3Snfc1mVBwdnc306ufA5ejy8JSPjT2RlW1nQSjW7efg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "19.2.18",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.18.tgz",
      "integrity": "sha512-AnzbBERsrLKtk2XSfTbYRLjQPdy116Sty4q+T+Bp3IC4l6jNBvreVPAHmpq9qhXQM7CXZPjLVmGMw9sy+hxQ3w==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.4",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.4.tgz",
      "integrity": "sha512-Bsc+QHgp+P/F02XDzNCY9jnZNCUuLki36KT7VKrTXXLdHf+vHMNZnW1rVu5DNW/rCK+fya3DATySbLM4yhtKUw==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-6.0.5.tgz",
      "integrity": "sha512-BOVzne/NL162sMdResB25mUv+vWMF5NoAjNf09TeGlE7ZpszZWSD3winycicLJw72yeVsoCn/2kOhEuCvEShMA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "^1.0.1"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "@rolldown/plugin-babel": "^0.1.7 || ^0.2.0",
        "babel-plugin-react-compiler": "^1.0.0",
        "vite": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "@rolldown/plugin-babel": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        }
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.33.0.tgz",
      "integrity": "sha512-WkUDrojuJs0xkgGf2udWxa3yGBRxPtxUkB79i6aCZLRgc7PM8fZe9TosfPDcvEpQZbuFASnHYmRLBLUbmLOIIA==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.33.0",
        "lightningcss-darwin-arm64": "1.33.0",
        "lightningcss-darwin-x64": "1.33.0",
        "lightningcss-freebsd-x64": "1.33.0",
        "lightningcss-linux-arm-gnueabihf": "1.33.0",
        "lightningcss-linux-arm64-gnu": "1.33.0",
        "lightningcss-linux-arm64-musl": "1.33.0",
        "lightningcss-linux-x64-gnu": "1.33.0",
        "lightningcss-linux-x64-musl": "1.33.0",
        "lightningcss-win32-arm64-msvc": "1.33.0",
        "lightningcss-win32-x64-msvc": "1.33.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.33.0.tgz",
      "integrity": "sha512-gEpRTalKdosp4Bb8qWtc2iOgE5SeIHlpS1up9bFq2wAyYhl1UdTObYiHe98zEM9SQvSoqQZ1IQD0JNpg3Ml5pg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.33.0.tgz",
      "integrity": "sha512-Sciaz8eenNTKn9b3t7+xr0ipTp9YxKQY4npwQ3mrRuL0BAVHBLyZxofhaKBAVtzmtRZ/zTyo0/to4B1uWG/Djg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.33.0.tgz",
      "integrity": "sha512-Z5UPAxzrjlWNNyGy6i65cJzzvgJ5D3T6wMvs+gWpY9d7qRhANrxqAp6LhxIgZhWEw18RfJTGcRxjuLIBr+m8XQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.33.0.tgz",
      "integrity": "sha512-QQM/Ti/hQajJwCY+RiWuCZ9sdtI/XQk7nDK5vC8kkdwixezOlDgvDx7+RT+QjK6FcFT4MpsuoBnHIo/O3StRRg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.33.0.tgz",
      "integrity": "sha512-N7FVBe6iS24MlM6R/4RBTxGhQheZGs7tiQ9U32UtF75NzP5Q7xWPRqLBCKxlRQRk3rY1jCIPLzx7WzOhuUIRLQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.33.0.tgz",
      "integrity": "sha512-j2v/itmy4HlNxlc6voKXYgBqNi0Ng2LShg4z7GufpEgs05P+2suBVyi9I6YHq5uoVFx9ETin3eCEhLVyXGQnKg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.33.0.tgz",
      "integrity": "sha512-yiO5ROMuYQgXbC60yjZU5CYSFZGKXL0HFATXt9mHJn1+zW55oCtMI9NfcVhYLMFDL7gV7oBPon/EmMMGg2OvtQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.33.0.tgz",
      "integrity": "sha512-ar+Ju7LmcN0Jo4FpL4hpFybwNG9/3A/Br5KW2n2jyODg3MEZXaDYADdemoNS+BDNfMgKvylJLj4S5tyRActuAg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.33.0.tgz",
      "integrity": "sha512-RYiYbkokw0trfKqqzfF55lginwEPrD3OJDfTuJzFs1MK6iFnDenaz1fqLLtX4ITG3OktJQXOeTaw1awrBAlZPw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.33.0.tgz",
      "integrity": "sha512-1K+MPfLSFVpphzpdbfkhlWk6wBrTObBzS2T6db10PNOZgR9GoVsAWzwNyuhUYYbTp23j+4RrncfujZ4uAzXvwA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.33.0.tgz",
      "integrity": "sha512-OlEICDx/Xl0FqSp4bry8zFnCvGpig3Gl4gCquvYwHuqJKEC1+n9NgDniFvqHGmMv1ZkqDJrDqKKSykTDX+ehuA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.18",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.18.tgz",
      "integrity": "sha512-DTg4MJbGMWkfi6VZFdNt2/caMbQy4Ou+Op/hJQvGEWcnVfoA1QA+xzRKAzw9jD6+GVOOeYr/mIcuDSdug6F6+w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/oxlint": {
      "version": "1.77.0",
      "resolved": "https://registry.npmjs.org/oxlint/-/oxlint-1.77.0.tgz",
      "integrity": "sha512-qnGh8XJHaQ0dprrDXNQZgS0FgjI6v+V3+X8DwmaV++5Aamy6jGKfDdQ1TUvhUxtmKFAbEf4/WeO5QZX+5WSngg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "oxlint": "bin/oxlint"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      },
      "optionalDependencies": {
        "@oxlint/binding-android-arm-eabi": "1.77.0",
        "@oxlint/binding-android-arm64": "1.77.0",
        "@oxlint/binding-darwin-arm64": "1.77.0",
        "@oxlint/binding-darwin-x64": "1.77.0",
        "@oxlint/binding-freebsd-x64": "1.77.0",
        "@oxlint/binding-linux-arm-gnueabihf": "1.77.0",
        "@oxlint/binding-linux-arm-musleabihf": "1.77.0",
        "@oxlint/binding-linux-arm64-gnu": "1.77.0",
        "@oxlint/binding-linux-arm64-musl": "1.77.0",
        "@oxlint/binding-linux-ppc64-gnu": "1.77.0",
        "@oxlint/binding-linux-riscv64-gnu": "1.77.0",
        "@oxlint/binding-linux-riscv64-musl": "1.77.0",
        "@oxlint/binding-linux-s390x-gnu": "1.77.0",
        "@oxlint/binding-linux-x64-gnu": "1.77.0",
        "@oxlint/binding-linux-x64-musl": "1.77.0",
        "@oxlint/binding-openharmony-arm64": "1.77.0",
        "@oxlint/binding-win32-arm64-msvc": "1.77.0",
        "@oxlint/binding-win32-ia32-msvc": "1.77.0",
        "@oxlint/binding-win32-x64-msvc": "1.77.0"
      },
      "peerDependencies": {
        "oxlint-tsgolint": ">=7.0.2001",
        "vite-plus": "*"
      },
      "peerDependenciesMeta": {
        "oxlint-tsgolint": {
          "optional": true
        },
        "vite-plus": {
          "optional": true
        }
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.5.tgz",
      "integrity": "sha512-RvwwcruNjI1ncT5xRakeyS9Lf8lcItv34KD+aif+VH9kduAyfYBipGh12274xtenIPZ119/R9BdTBa8gAwSh0A==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.26",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.26.tgz",
      "integrity": "sha512-u82N74LFzG8ca+dD8puPnplTXoGH4fTPpVGuIbt36G3qvNlkvfD0lEAZSxaly3KX8TS/L1A1gsCEmvKmBcVbkQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.17",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/react": {
      "version": "19.2.8",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.8.tgz",
      "integrity": "sha512-PWaYA1L/q9u2u7xYQi+Y3L3Yfnie7XyLeaJICV1MGD6LprsBxcAqGjYyr0eY3p+QdsA+x/Irkt4Qif8D63+Sbw==",
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.8",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.8.tgz",
      "integrity": "sha512-rVprimfGBG3DR+Tq0IQG2DT5PxKth1WIGDmj5yPmlzr4YBe7uyE+Du4oVqTDXZSHGGGXRtTJEGSSePyQCMBglQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.8"
      }
    },
    "node_modules/rolldown": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.2.3.tgz",
      "integrity": "sha512-rn9wpmxplLf7NLNyCk9FyWh3FM43DbY8jOzCdEPzH7uflhTftRbCEpqi6Ly2osgoU8OwObtmavMbWLaWy4LX7A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.143.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm64": "1.2.3",
        "@rolldown/binding-darwin-arm64": "1.2.3",
        "@rolldown/binding-darwin-x64": "1.2.3",
        "@rolldown/binding-freebsd-x64": "1.2.3",
        "@rolldown/binding-linux-arm-gnueabihf": "1.2.3",
        "@rolldown/binding-linux-arm64-gnu": "1.2.3",
        "@rolldown/binding-linux-arm64-musl": "1.2.3",
        "@rolldown/binding-linux-ppc64-gnu": "1.2.3",
        "@rolldown/binding-linux-s390x-gnu": "1.2.3",
        "@rolldown/binding-linux-x64-gnu": "1.2.3",
        "@rolldown/binding-linux-x64-musl": "1.2.3",
        "@rolldown/binding-openharmony-arm64": "1.2.3",
        "@rolldown/binding-win32-arm64-msvc": "1.2.3",
        "@rolldown/binding-win32-x64-msvc": "1.2.3"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/vite": {
      "version": "8.2.1",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.2.1.tgz",
      "integrity": "sha512-EU/eS7BH3XROHh2YnBefjM6DBKA6ZeMZEYQbj7NLWg5wHYlhB8B/Mayd5XsgWq+NFYccDOTemRpdETWR6Ka/lw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "lightningcss": "^1.33.0",
        "picomatch": "^4.0.5",
        "postcss": "^8.5.25",
        "rolldown": "~1.2.1",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.4.0",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    }
  }
}
````

### `frontend/public/favicon.svg`

``xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
````

### `frontend/public/icons.svg`

``xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
````

### `frontend/README.md`

``text
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
````

### `frontend/src/App.css`

``css
/* Urban Drainage Portal — Municipal Department Stylesheet */

:root {
  --bg-dark: #f4f1eb;
  --bg-panel: #fffdf9;
  --bg-card: #fffdf9;
  --bg-card-hover: #eee9e0;
  --border-color: #ddd6ca;
  
  --text-main: #203238;
  --text-muted: #6b7776;

  --accent-blue: #287d82;
  --accent-blue-bg: rgba(40, 125, 130, 0.12);
  --accent-green: #43866d;
  --accent-green-bg: rgba(67, 134, 109, 0.12);
  --accent-orange: #bd7043;
  --accent-orange-bg: rgba(189, 112, 67, 0.12);
  --accent-red: #b6534d;
  --accent-red-bg: rgba(182, 83, 77, 0.12);
  --accent-yellow: #aa7d32;
  --accent-yellow-bg: rgba(170, 125, 50, 0.14);
  --accent-purple: #75618d;
  
  --font-family: 'Aptos', 'Trebuchet MS', sans-serif;
  --heading-family: Georgia, 'Times New Roman', serif;
}

/* Day Mode (Light Theme) Overrides */
[data-theme="day"] {
  --bg-dark: #f4f1eb;
  --bg-panel: #fffdf9;
  --bg-card: #fffdf9;
  --bg-card-hover: #eee9e0;
  --border-color: #ddd6ca;

  --text-main: #203238;
  --text-muted: #6b7776;

  --accent-blue: #287d82;
  --accent-blue-bg: rgba(40, 125, 130, 0.12);
  --accent-green: #43866d;
  --accent-green-bg: rgba(67, 134, 109, 0.12);
  --accent-orange: #bd7043;
  --accent-orange-bg: rgba(189, 112, 67, 0.12);
  --accent-red: #b6534d;
  --accent-red-bg: rgba(182, 83, 77, 0.12);
}

[data-theme="day"] .sidebar {
  background-color: #203238;
  border-right-color: #203238;
}

[data-theme="day"] .timeline-item,
[data-theme="day"] .location-section,
[data-theme="day"] .form-group input,
[data-theme="day"] .form-group select,
[data-theme="day"] .form-group textarea,
[data-theme="day"] .complaints-table th,
[data-theme="day"] .lifecycle-timeline-card,
[data-theme="day"] .management-actions-card,
[data-theme="day"] .maintenance-card,
[data-theme="day"] .calc-card,
[data-theme="day"] .notification-item {
  background-color: #f6f2ec;
  color: #203238;
}

[data-theme="day"] .brand-copy h2 {
  color: #ffffff;
}

[data-theme="day"] .nav-item:hover {
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

[data-theme="day"] .role-switcher {
  background-color: #f6f2ec;
}

[data-theme="day"] .metric-box {
  background-color: #f1ece4;
}

.theme-toggle-btn {
  background-color: var(--bg-panel);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 0.5rem 0.85rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-toggle-btn:hover {
  border-color: var(--accent-blue);
  transform: translateY(-1px);
}

[data-theme="night"] {
  --bg-dark: #17262b;
  --bg-panel: #20353a;
  --bg-card: #20353a;
  --bg-card-hover: #2b464b;
  --border-color: #3a5558;
  --text-main: #edf3ef;
  --text-muted: #a7b9b4;
  --accent-blue: #72c4bd;
  --accent-blue-bg: rgba(114, 196, 189, 0.15);
  --accent-green: #88c59f;
  --accent-green-bg: rgba(136, 197, 159, 0.15);
  --accent-orange: #e2a477;
  --accent-orange-bg: rgba(226, 164, 119, 0.15);
  --accent-red: #e08b83;
  --accent-red-bg: rgba(224, 139, 131, 0.18);
}

.auto-map-badge {
  background-color: var(--accent-blue-bg);
  color: var(--accent-blue);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  margin-left: 0.5rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family);
  background: linear-gradient(135deg, var(--bg-dark) 0%, #e9e5dc 100%);
  color: var(--text-main);
  font-size: 0.9375rem;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* App Shell Layout */
.app-shell {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, var(--bg-dark) 0%, #e9e5dc 100%);
}

/* Sidebar */
.sidebar {
  width: 280px;
  background-color: #203238;
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  flex-shrink: 0;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-color);
}

.brand-icon {
  font-size: 1.8rem;
  background: linear-gradient(135deg, #bd7043, #d59b6e);
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-copy h2 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
  font-family: var(--heading-family);
}

.brand-copy span {
  font-size: 0.75rem;
  color: var(--accent-blue);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.role-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0 0.5rem 0;
  padding: 0.4rem 0.75rem;
  background-color: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-blue);
  letter-spacing: 0.05em;
}

.dot.pulse {
  width: 8px;
  height: 8px;
  background-color: var(--accent-green);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent-green);
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 1rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  width: 100%;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.nav-item.active {
  background: linear-gradient(90deg, rgba(56, 189, 248, 0.2), rgba(56, 189, 248, 0.05));
  color: var(--accent-blue);
  border-left: 3px solid var(--accent-blue);
  font-weight: 600;
}

.nav-icon {
  font-size: 1.1rem;
}

/* Content Panel */
.content-panel {
  flex: 1;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
}

/* Topbar */
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  flex-wrap: wrap;
  gap: 1rem;
}

.welcome-block h1 {
  font-size: 1.4rem;
  font-weight: 700;
  font-family: var(--heading-family);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dept-tag {
  font-size: 0.75rem;
  background-color: var(--bg-card-hover);
  color: var(--accent-blue);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-weight: 600;
}

.welcome-subtext {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
  letter-spacing: 0.01em;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Role Switcher Pill */
.role-switcher {
  display: flex;
  align-items: center;
  background-color: var(--bg-card-hover);
  padding: 0.25rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  gap: 0.25rem;
}

.switcher-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  padding: 0 0.5rem;
  font-weight: 600;
}

.role-btn {
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.role-btn.active {
  background-color: var(--accent-blue);
  color: #0f172a;
}

.date-pill {
  background-color: var(--bg-panel);
  padding: 0.5rem 0.85rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  border: 1px solid var(--border-color);
  font-variant-numeric: tabular-nums;
}

.notification-pill-btn {
  background-color: var(--bg-panel);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  font-size: 1rem;
}

.unread-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: var(--accent-red);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 800;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-pill {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background-color: var(--bg-panel);
  padding: 0.35rem 0.85rem 0.35rem 0.5rem;
  border-radius: 30px;
  border: 1px solid var(--border-color);
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0284c7, #38bdf8);
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 0.85rem;
  font-weight: 600;
}

.user-role-badge {
  font-size: 0.65rem;
  color: var(--accent-blue);
  font-weight: 700;

}

/* Stats Cards Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.stat-card {
  background-color: var(--bg-panel);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
  box-shadow: 0 8px 24px rgba(32, 50, 56, 0.05);
}

.stat-card:hover {
  transform: translateY(-2px);
  border-color: rgba(56, 189, 248, 0.4);
}

.stat-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mini-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.mini-icon.blue { background-color: var(--accent-blue-bg); color: var(--accent-blue); }
.mini-icon.orange { background-color: var(--accent-orange-bg); color: var(--accent-orange); }
.mini-icon.green { background-color: var(--accent-green-bg); color: var(--accent-green); }
.mini-icon.red { background-color: var(--accent-red-bg); color: var(--accent-red); }

.badge-text {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-main);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Quick Actions Bar */
.quick-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.25rem;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-panel);
  color: var(--text-main);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.action-btn:hover {
  background-color: var(--bg-card-hover);
  transform: translateY(-1px);
}

.action-btn.blue { border-left: 4px solid var(--accent-blue); }
.action-btn.green { border-left: 4px solid var(--accent-green); }
.action-btn.sky { border-left: 4px solid #06b6d4; }
.action-btn.light { border-left: 4px solid var(--accent-purple); }

.action-icon {
  font-size: 1.1rem;
}

/* Lower Grid Layout */
.lower-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .lower-grid {
    grid-template-columns: 1fr;
  }
}

.panel-card {
  background-color: var(--bg-panel);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 1.5rem;
  box-shadow: 0 10px 28px rgba(32, 50, 56, 0.05);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.panel-header h2, .panel-header h3 {
  font-size: 1.15rem;
  font-weight: 700;
  font-family: var(--heading-family);
}

.link-btn {
  background: transparent;
  border: none;
  color: var(--accent-blue);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.link-btn:hover {
  text-decoration: underline;
}

/* Timeline & Complaints List inside dashboard */
.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.timeline-item {
  background-color: #162032;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 1rem;
  transition: border-color 0.2s ease;
}

.timeline-item.cursor-pointer {
  cursor: pointer;
}

.timeline-item:hover {
  border-color: var(--accent-blue);
}

.mini-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.code {
  background-color: rgba(56, 189, 248, 0.15);
  color: var(--accent-blue);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.title {
  font-size: 0.95rem;
  font-weight: 600;
}

.timeline-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.status-track {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.status-step {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: #64748b;
  font-size: 0.75rem;

}

.status-step .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #475569;
}

.status-step.done {
  color: var(--accent-green);
}

.status-step.done .dot {
  background-color: var(--accent-green);
}

.status-step.active {
  color: var(--accent-blue);
  font-weight: 700;
}

.status-step.active .dot {
  background-color: var(--accent-blue);
  box-shadow: 0 0 6px var(--accent-blue);
}

.priority {
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
}

.priority-low { background-color: rgba(148, 163, 184, 0.2); color: #cbd5e1; }
.priority-medium { background-color: var(--accent-yellow-bg); color: var(--accent-yellow); }
.priority-high { background-color: var(--accent-orange-bg); color: var(--accent-orange); }
.priority-emergency { background-color: var(--accent-red-bg); color: var(--accent-red); }

.timeline-date {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* Right Stack Cards */
.right-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.weather-main {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin: 0.5rem 0 1rem 0;
}

.temp {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
}

.weather-text {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.weather-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.metric-box {
  background-color: #162032;
  padding: 0.75rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.metric-label {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.metric-box strong {
  font-size: 1.1rem;
  color: var(--accent-blue);
}

.metric-box.warning strong {
  color: var(--accent-orange);
}

.warning-banner {
  display: flex;
  gap: 0.75rem;
  background-color: rgba(251, 146, 60, 0.1);
  border: 1px solid rgba(251, 146, 60, 0.3);
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #fdba74;
}

.alert-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.alert-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.alert-icon {
  font-size: 1.2rem;
}

.alert-name {
  font-size: 0.85rem;
  font-weight: 600;
}

.alert-severity {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  text-transform: uppercase;
}

.alert-severity.operational { background-color: var(--accent-green-bg); color: var(--accent-green); }
.alert-severity.maintenance_required { background-color: var(--accent-orange-bg); color: var(--accent-orange); }

.alert-location {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.custom-map-panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: calc(100vh - 120px);
}

.custom-map-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: var(--bg-panel);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 0.75rem 1rem;
}

.search-box {
  display: flex;
  align-items: center;
  flex: 1;
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 0.5rem 0.8rem;
  gap: 0.5rem;
}

.search-box input {
  background: transparent;
  border: none;
  color: var(--text-main);
  flex: 1;
  font-size: 0.9rem;
}

.search-box input:focus {
  outline: none;
}

.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.toolbar-button {
  background: var(--bg-panel-alt);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  border-radius: 8px;
  padding: 0.55rem 0.9rem;
  cursor: pointer;
}

.map-layers-panel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.5rem;
  background: rgba(9, 15, 27, 0.92);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 0.8rem;
}

.layer-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.custom-map-wrap {
  position: relative;
  flex: 1;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: #182b45;
}

.custom-map-viewport {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 520px;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  background: #182b45;
}

.custom-map-canvas {
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: 0 0;
  will-change: transform;
}

.custom-map-svg {
  width: 100%;
  height: 100%;
  display: block;
  shape-rendering: geometricPrecision;
}

.map-boundary {
  fill: #304868;
  stroke: #16263e;
  stroke-width: 14;
}

.map-road {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.map-road.main {
  stroke: #1d2d45;
  stroke-width: 18;
}

.map-road.secondary {
  stroke: #425572;
  stroke-width: 14;
}

.map-road.minor {
  stroke: #1d2d45;
  stroke-width: 10;
}

.map-road.walk { stroke: #536783; stroke-width: 12; }

.map-building {
  fill: #405f88;
  stroke: #263c59;
  stroke-width: 2;
}

.map-building.landmark { fill: #425c7d; }
.map-building.accent { fill: #3d619f; }
.map-building.library { fill: #46668d; }
.map-building.service { fill: #555775; }
.map-building.parking { fill: #4569a6; }
.map-building.small-building { fill: #3e5b80; }
.map-building.hostel { fill: #45648c; }
.map-building.mess { fill: #47668f; }
.map-building.court { fill: #72765b; stroke: #59624d; }
.map-building.cafeteria { fill: #b76643; stroke: #87472f; }
.map-building.sports-court { fill: #526381; stroke: #008b55; stroke-width: 7; }
.map-building.playground { fill: #767762; stroke: #49536a; }

.map-building-label {
  fill: rgba(232, 238, 247, 0.78);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.map-drain {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  opacity: 0.45;
}

.map-drain.good {
  stroke: rgba(99, 210, 170, 0.82);
}

.map-drain.maintenance {
  stroke: rgba(249, 168, 86, 0.9);
}

.map-drain.blocked {
  stroke: rgba(244, 114, 114, 0.9);
}

.map-drain.critical {
  stroke: rgba(219, 84, 126, 0.9);
  stroke-dasharray: 12 10;
}

.map-label-dot {
  fill: rgba(120, 207, 255, 0.9);
}

.map-label-text {
  fill: #ff8a00;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 0;
  paint-order: stroke;
  stroke: #111827;
  stroke-width: 4px;
  stroke-linejoin: round;
}

.map-campus-label.purple .map-label-text { fill: #9c8cff; }
.map-campus-label.red .map-label-text { fill: #ff645f; }
.map-campus-label.blue .map-label-text { fill: #3da5ff; }
.map-campus-label.green .map-label-text { fill: #18d682; }

.map-landmark-icon circle { fill: #ffad72; stroke: #24344b; stroke-width: 2; }
.map-landmark-icon path { fill: none; stroke: #172233; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.map-landmark-icon.library-icon circle { fill: #00e6a2; }
.map-landmark-icon.hostel-icon circle { fill: #00e6a2; }
.map-landmark-icon.cafeteria-icon circle { fill: #fff4bc; }

.map-marker {
  position: absolute;
  width: 17px;
  height: 17px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.64rem;
  font-weight: 700;
  cursor: pointer;
  color: white;
  z-index: 10;
}

.map-marker.red { background: #ef4444; }
.map-marker.orange { background: #f97316; }
.map-marker.yellow { background: #facc15; color: #1f2937; }
.map-marker.blue { background: #3b82f6; }
.map-marker.green { background: #22c55e; }
.map-marker.selected {
  width: 24px;
  height: 24px;
  border-width: 3px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.12);
}

.map-selected-location {
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 160px;
  padding: 0.6rem 0.7rem;
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.96);
  border: 1px solid rgba(148, 163, 184, 0.4);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  color: #e2e8f0;
  z-index: 12;
}

.map-selected-location button {
  margin-top: 0.35rem;
  background: var(--accent-blue);
  border: none;
  border-radius: 6px;
  color: #08111f;
  font-weight: 700;
  padding: 0.35rem 0.5rem;
  cursor: pointer;
}

.map-popup-card {
  position: absolute;
  width: 190px;
  padding: 0.7rem 0.8rem;
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.96);
  color: #e2e8f0;
  border: 1px solid rgba(148, 163, 184, 0.45);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.4);
  z-index: 15;
}

.popup-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.popup-header-row strong {
  font-size: 0.8rem;
}

.popup-badge {
  display: inline-flex;
  border-radius: 999px;
  padding: 0.15rem 0.42rem;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
}

.popup-badge.red { background: rgba(239, 68, 68, 0.18); color: #fca5a5; }
.popup-badge.orange { background: rgba(249, 115, 22, 0.18); color: #fdba74; }
.popup-badge.yellow { background: rgba(250, 204, 21, 0.2); color: #fef08a; }
.popup-badge.blue { background: rgba(59, 130, 246, 0.18); color: #93c5fd; }
.popup-badge.green { background: rgba(34, 197, 94, 0.2); color: #86efac; }

.map-popup-card p,
.map-popup-card small {
  margin: 0.45rem 0 0;
  color: var(--text-muted);
}

.map-legend-box {
  position: absolute;
  right: 16px;
  bottom: 16px;
  background: rgba(10, 14, 24, 0.92);
  color: #e2e8f0;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 0.8rem 0.9rem;
  min-width: 160px;
  z-index: 18;
}

.map-legend-box h4 {
  margin: 0 0 0.5rem;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #cbd5e1;
}

.legend-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-top: 0.35rem;
}

.legend-dot,
.legend-line {
  display: inline-block;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.legend-dot.red { background: #ef4444; }
.legend-dot.orange { background: #f97316; }
.legend-dot.yellow { background: #facc15; }
.legend-dot.blue { background: #3b82f6; }
.legend-dot.green { background: #22c55e; }

.legend-line {
  width: 30px;
  height: 3px;
  border-radius: 999px;
}

.legend-line.drain { background: rgba(64, 212, 171, 0.9); }
.legend-line.road { background: rgba(224, 234, 255, 0.7); }

.custom-map-controls {
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  background: rgba(10, 14, 24, 0.88);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 0.45rem;
}

.custom-map-controls button {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: rgba(15, 23, 42, 0.9);
  color: var(--text-main);
  font-size: 1.1rem;
  cursor: pointer;
}

.search-results-panel {
  position: absolute;
  top: 74px;
  left: 16px;
  z-index: 25;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 220px;
  background: rgba(15, 23, 42, 0.95);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.search-result-item {
  border: none;
  padding: 0.7rem 0.8rem;
  background: rgba(15, 23, 42, 0.9);
  color: var(--text-main);
  text-align: left;
  cursor: pointer;
}

.search-result-item:hover {
  background: rgba(59, 130, 246, 0.12);
}

.custom-map-picker {
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: linear-gradient(180deg, #152638, #0f1d2f);
  cursor: crosshair;
}

.custom-picker-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.picker-area {
  fill: rgba(34, 69, 105, 0.95);
  stroke: rgba(168, 188, 220, 0.5);
  stroke-width: 2;
}

.picker-block {
  fill: rgba(120, 143, 175, 0.52);
  stroke: rgba(192, 215, 255, 0.5);
  stroke-width: 1.5;
}

.picker-road {
  fill: none;
  stroke: rgba(230, 236, 255, 0.78);
  stroke-width: 10;
  stroke-linecap: round;
}

.picker-road.secondary {
  stroke-width: 6;
  stroke: rgba(180, 196, 223, 0.75);
}

.custom-picker-marker {
  position: absolute;
  width: 28px;
  height: 28px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: rgba(239, 68, 68, 0.92);
  border: 3px solid rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.32);
  z-index: 2;
}

.map-picker-box {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

/* Report Issue Form */
.report-issue-container {
  max-width: 850px;
  margin: 0 auto;
  width: 100%;
}

.form-header {
  margin-bottom: 1.5rem;
}

.form-header h2 {
  font-size: 1.3rem;
  font-weight: 700;

}

.form-header p {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.report-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #cbd5e1;
}

.form-group input, .form-group select, .form-group textarea {
  background-color: #162032;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.75rem;
  color: var(--text-main);
  font-size: 0.9rem;
  font-family: var(--font-family);
}

.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--accent-blue);
  box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
}

.form-row.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-row.grid-3 { display: grid; grid-template-columns: 1fr 1fr 2fr; gap: 1rem; }

@media (max-width: 768px) {
  .form-row.grid-2, .form-row.grid-3 {
    grid-template-columns: 1fr;
  }
}

.location-section {
  background-color: #162032;
  border: 1px solid var(--border-color);
  padding: 1.25rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-label {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--accent-blue);
}

.location-tabs {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.location-tab-btn {
  flex: 1;
  padding: 0.65rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-panel);
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.location-tab-btn.active {
  background-color: rgba(56, 189, 248, 0.15);
  color: var(--accent-blue);
  border-color: var(--accent-blue);
}

.gps-btn {
  background-color: var(--accent-blue);
  color: #0f172a;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.9rem;
}

.hint {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.3rem;
}

.picker-map-container {
  height: 250px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  margin-top: 0.5rem;
}

.photo-preview-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.photo-thumb {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.submit-btn {
  background: linear-gradient(135deg, #0284c7, #38bdf8);
  color: #ffffff;
  border: none;
  padding: 0.9rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.submit-btn:hover {
  transform: translateY(-1px);
}

/* Alert Boxes */
.alert-box {
  padding: 0.85rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.alert-box.success { background-color: var(--accent-green-bg); color: var(--accent-green); border: 1px solid var(--accent-green); }
.alert-box.error { background-color: var(--accent-red-bg); color: var(--accent-red); border: 1px solid var(--accent-red); }

/* Table Component */
.table-responsive {
  width: 100%;
  overflow-x: auto;
}

.complaints-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
}

.complaints-table th {
  text-align: left;
  padding: 0.85rem 1rem;
  background-color: #162032;
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 1px solid var(--border-color);
}

.complaints-table td {
  padding: 0.9rem 1rem;
  border-bottom: 1px solid var(--border-color);
  font-size: 0.85rem;

}

.complaints-table tr:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

.row-emergency {
  background-color: rgba(248, 113, 113, 0.05);
}

.code-pill {
  color: var(--accent-blue);
  font-family: monospace;

}

.issue-title {
  font-weight: 600;
}

.status-tag {
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  display: inline-block;
}

.status-tag.submitted { background-color: rgba(148, 163, 184, 0.2); color: #cbd5e1; }
.status-tag.under_review { background-color: var(--accent-yellow-bg); color: var(--accent-yellow); }
.status-tag.assigned { background-color: var(--accent-blue-bg); color: var(--accent-blue); }
.status-tag.in_progress { background-color: var(--accent-orange-bg); color: var(--accent-orange); }
.status-tag.resolved { background-color: var(--accent-green-bg); color: var(--accent-green); }
.status-tag.rejected { background-color: var(--accent-red-bg); color: var(--accent-red); }

.priority-tag {
  padding: 0.15rem 0.5rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 700;
}

.priority-tag.low { background-color: rgba(148, 163, 184, 0.2); color: #cbd5e1; }
.priority-tag.medium { background-color: var(--accent-yellow-bg); color: var(--accent-yellow); }
.priority-tag.high { background-color: var(--accent-orange-bg); color: var(--accent-orange); }
.priority-tag.emergency { background-color: var(--accent-red-bg); color: var(--accent-red); }

.view-btn {
  background-color: #162032;
  border: 1px solid var(--border-color);
  color: var(--accent-blue);
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
}

.view-btn:hover {
  background-color: var(--accent-blue);
  color: #0f172a;
}

.filter-controls-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.search-input {
  background-color: #162032;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  font-size: 0.85rem;
  width: 250px;
}

.filter-select {
  background-color: #162032;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
}

/* Modal Backdrop & Content */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1.5rem;
}

.modal-content {
  background-color: var(--bg-panel);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  width: 100%;
  max-width: 750px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.75rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
  margin-bottom: 1.25rem;
}

.close-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 1.25rem;
  cursor: pointer;
}

.close-btn:hover {
  color: #fff;
}

/* Lifecycle Timeline Stepper */
.lifecycle-timeline-card {
  background-color: #162032;
  border: 1px solid var(--border-color);
  padding: 1.25rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
}

.lifecycle-timeline-card h4 {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.timeline-stepper {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.timeline-stepper::before {
  content: '';
  position: absolute;
  top: 16px;
  left: 30px;
  right: 30px;
  height: 3px;
  background-color: var(--border-color);
  z-index: 1;
}

.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 2;
}

.stepper-dot {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #334155;
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  border: 2px solid var(--bg-panel);
}

.stepper-item.passed .stepper-dot {
  background-color: var(--accent-green);
  color: #0f172a;
}

.stepper-item.current .stepper-dot {
  background-color: var(--accent-blue);
  color: #0f172a;
  box-shadow: 0 0 10px var(--accent-blue);
}

.stepper-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text-muted);
  text-align: center;

}

.stepper-item.current .stepper-label {
  color: var(--accent-blue);
}

/* Detail Modal Grid */
.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}

.info-group label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;

}

.info-group p {
  font-size: 0.9rem;

}

.management-actions-card {
  background-color: #162032;
  border: 1px solid var(--border-color);
  padding: 1.25rem;
  border-radius: 10px;
  margin-top: 1.25rem;
}

.management-actions-card h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--accent-blue);
}

.action-row {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  margin-bottom: 1rem;
}

.action-btn-primary {
  background-color: var(--accent-blue);
  color: #0f172a;
  border: none;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
}

.action-btn-success {
  background-color: var(--accent-green);
  color: #0f172a;
  border: none;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  width: 100%;
}

.status-update-form {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

/* Infrastructure Management Panel */
.type-badge {
  background-color: rgba(56, 189, 248, 0.15);
  color: var(--accent-blue);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.btn-group {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  background-color: #162032;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
}

.btn-icon.danger {
  color: var(--accent-red);
}

/* Maintenance Board */
.maintenance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.maintenance-card {
  background-color: #162032;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.maintenance-card.in_progress {
  border-left: 4px solid var(--accent-orange);
}

.maintenance-card.resolved {
  border-left: 4px solid var(--accent-green);
}

.card-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.assigned-bar {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.field-note {
  background-color: var(--bg-panel);
  padding: 0.6rem;
  border-radius: 6px;
  font-size: 0.8rem;
}

.field-note small {
  color: var(--accent-blue);
  font-weight: 700;
  display: block;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.action-btn-sm {
  background-color: var(--bg-panel);
  border: 1px solid var(--border-color);
  color: var(--accent-blue);
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
}

/* Emergency Monitoring */
.emergency-header {
  border-bottom: 1px solid var(--accent-red);
  padding-bottom: 0.75rem;
}

.header-alert-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.pulse-alert-dot {
  width: 14px;
  height: 14px;
  background-color: var(--accent-red);
  border-radius: 50%;
  box-shadow: 0 0 12px var(--accent-red);
  animation: pulse-ring 1.5s infinite;
}

@keyframes pulse-ring {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(248, 113, 113, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(248, 113, 113, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(248, 113, 113, 0); }
}

.emergency-banner-box {
  display: flex;
  gap: 1rem;
  background-color: rgba(248, 113, 113, 0.1);
  border: 1px solid var(--accent-red);
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0 1.5rem 0;
}

.banner-icon {
  font-size: 1.8rem;
}

.banner-content h4 {
  color: var(--accent-red);
  font-weight: 700;
}

.banner-content p {
  font-size: 0.85rem;
  color: #fca5a5;
}

.emergency-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
}

.emergency-card {
  background-color: #1a101f;
  border: 1px solid var(--accent-red);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.emerg-code {
  color: var(--accent-red);
  font-weight: 800;
  font-family: monospace;
}

.emerg-badge {
  background-color: var(--accent-red);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
}

.emerg-loc {
  font-size: 0.9rem;

}

.emerg-coords {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.emerg-desc {
  font-size: 0.85rem;
  color: #e2e8f0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.6rem;
  border-radius: 6px;
}

.emerg-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.emerg-action-btn {
  background-color: var(--accent-red);
  color: #fff;
  border: none;
  padding: 0.65rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  text-align: center;
}

/* Stormwater Hydrologic Calculator */
.analysis-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

@media (max-width: 900px) {
  .analysis-grid {
    grid-template-columns: 1fr;
  }
}

.calc-card {
  background-color: #162032;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
}

.calc-header h3 {
  font-size: 1.05rem;
  margin-bottom: 0.2rem;
}

.calc-header code {
  color: var(--accent-blue);
  font-size: 0.75rem;
}

.formula-tag {
  background-color: rgba(56, 189, 248, 0.1);
  color: var(--accent-blue);
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0.75rem 0 1.25rem 0;
}

.calc-btn {
  background-color: var(--accent-blue);
  color: #0f172a;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  width: 100%;
  margin-top: 0.5rem;
}

.calc-result-box {
  margin-top: 1.25rem;
  background-color: var(--bg-panel);
  border: 1px solid var(--accent-green);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.result-label {
  font-size: 0.8rem;
  color: var(--accent-green);

}

.result-value {
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
}

/* Notifications List */
.notification-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: #162032;
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 10px;
}

.notification-item.unread {
  border-left: 4px solid var(--accent-blue);
  background-color: rgba(56, 189, 248, 0.05);
}

.notif-icon {
  font-size: 1.4rem;
}

.notif-body {
  flex: 1;
}

.notif-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
}

.notif-header h4 {
  font-size: 0.95rem;

}

.notif-date {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.mark-read-btn {
  background-color: var(--bg-panel);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  cursor: pointer;
}

/* Profile Card */
.profile-card-content {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
}

.profile-avatar-large {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0284c7, #38bdf8);
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
}

.profile-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  flex: 1;
}

.role-tag {
  background-color: var(--accent-blue);
  color: #0f172a;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.8rem;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  color: var(--text-muted);
}

.empty-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
````

### `frontend/src/App.jsx`

``jsx
import React, { useState, useEffect } from 'react';
import './App.css';

import NavbarHeader from './components/NavbarHeader';
import SidebarNav from './components/SidebarNav';
import DrainageMap from './components/DrainageMap';
import ReportIssue from './components/ReportIssue';
import ComplaintList from './components/ComplaintList';
import ComplaintDetail from './components/ComplaintDetail';
import InfrastructureManager from './components/InfrastructureManager';
import MaintenanceBoard from './components/MaintenanceBoard';
import EmergencyMonitoring from './components/EmergencyMonitoring';
import StormwaterAnalysis from './components/StormwaterAnalysis';
import NotificationsView from './components/NotificationsView';
import ProfileView from './components/ProfileView';

const MOCK_USERS = {
  CITIZEN: { id: 1, name: 'John Doe', email: 'john.citizen@city.gov', role: 'CITIZEN', phone: '+1 555-0192' },
  STAFF: { id: 2, name: 'Robert Vance', email: 'robert.vance@city.gov', role: 'STAFF', phone: '+1 555-0143' },
  ADMIN: { id: 4, name: 'Admin Officer', email: 'admin.drainage@city.gov', role: 'ADMIN', phone: '+1 555-0100' },
};

export default function App() {
  const [currentRole, setCurrentRole] = useState('CITIZEN');
  const [currentUser, setCurrentUser] = useState(MOCK_USERS.CITIZEN);
  const [activeTab, setActiveTab] = useState('dashboard');

  const [complaints, setComplaints] = useState([]);
  const [infrastructure, setInfrastructure] = useState([]);
  const [stats, setStats] = useState(null);
  const [staffList, setStaffList] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [loading, setLoading] = useState(true);

  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('urban_drainage_theme') || 'day';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
    localStorage.setItem('urban_drainage_theme', themeMode);
  }, [themeMode]);

  const handleToggleTheme = () => {
    setThemeMode((prev) => (prev === 'night' ? 'day' : 'night'));
  };

  // Handle role switching
  const handleRoleChange = (newRole) => {
    setCurrentRole(newRole);
    setCurrentUser(MOCK_USERS[newRole] || MOCK_USERS.CITIZEN);
    setActiveTab('dashboard');
  };

  // Fetch data from backend Spring Boot APIs
  const fetchAllData = async () => {
    try {
      setLoading(true);

      const [complaintsRes, infraRes, statsRes, staffRes, notifRes] = await Promise.all([
        fetch('/api/complaints'),
        fetch('/api/drainage/infrastructure'),
        fetch('/api/complaints/stats'),
        fetch('/api/users/staff'),
        fetch(`/api/notifications/user/${currentUser.id}`),
      ]);

      if (complaintsRes.ok) {
        const cData = await complaintsRes.json();
        setComplaints(cData);
      }
      if (infraRes.ok) {
        const iData = await infraRes.json();
        setInfrastructure(iData);
      }
      if (statsRes.ok) {
        const sData = await statsRes.json();
        setStats(sData);
      }
      if (staffRes.ok) {
        const stData = await staffRes.json();
        setStaffList(stData);
      }
      if (notifRes.ok) {
        const nData = await notifRes.json();
        setNotifications(nData);
      }
    } catch (err) {
      console.error('Error fetching backend data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [currentUser.id]);

  // Actions
  const handleAssignStaff = async (complaintId, staffId, staffName) => {
    try {
      const res = await fetch(`/api/complaints/${complaintId}/assign`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ staffId, staffName }),
      });
      if (res.ok) {
        fetchAllData();
        const updated = await res.json();
        setSelectedComplaint(updated);
      }
    } catch (err) {
      alert('Failed to assign staff.');
    }
  };

  const handleUpdateStatus = async (complaintId, status, inspectionNotes, maintenanceNotes) => {
    try {
      const res = await fetch(`/api/complaints/${complaintId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, inspectionNotes, maintenanceNotes }),
      });
      if (res.ok) {
        fetchAllData();
        const updated = await res.json();
        setSelectedComplaint(updated);
      }
    } catch (err) {
      alert('Failed to update status.');
    }
  };

  const handleMarkNotificationRead = async (notifId) => {
    try {
      await fetch(`/api/notifications/${notifId}/read`, { method: 'PUT' });
      setNotifications((prev) => prev.map((n) => (n.id === notifId ? { ...n, read: true } : n)));
    } catch (err) {
      console.error('Error marking notification as read:', err);
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="app-shell">
      <SidebarNav
        currentRole={currentRole}
        activeTab={activeTab}
        onTabSelect={(tab) => setActiveTab(tab)}
      />

      <main className="content-panel">
        <NavbarHeader
          currentUser={currentUser}
          currentRole={currentRole}
          onRoleChange={handleRoleChange}
          unreadNotificationsCount={unreadCount}
          onOpenNotifications={() => setActiveTab('notifications')}
          themeMode={themeMode}
          onToggleTheme={handleToggleTheme}
        />

        {/* Dynamic Tab Rendering */}
        {activeTab === 'dashboard' && (
          <DashboardView
            currentRole={currentRole}
            currentUser={currentUser}
            stats={stats}
            complaints={complaints}
            infrastructure={infrastructure}
            onNavigate={(tab) => setActiveTab(tab)}
            onSelectComplaint={(c) => setSelectedComplaint(c)}
          />
        )}

        {activeTab === 'report-issue' && (
          <ReportIssue
            currentUser={currentUser}
            onSubmitSuccess={() => {
              fetchAllData();
              setActiveTab('my-complaints');
            }}
          />
        )}

        {activeTab === 'my-complaints' && (
          <ComplaintList
            complaints={complaints}
            staffList={staffList}
            currentRole={currentRole}
            filterMode="MY_COMPLAINTS"
            onSelectComplaint={(c) => setSelectedComplaint(c)}
          />
        )}

        {(activeTab === 'complaint-management' || activeTab === 'reports-analytics') && (
          <ComplaintList
            complaints={complaints}
            staffList={staffList}
            currentRole={currentRole}
            filterMode="ALL"
            onSelectComplaint={(c) => setSelectedComplaint(c)}
          />
        )}

        {activeTab === 'assigned-complaints' && (
          <ComplaintList
            complaints={complaints}
            staffList={staffList}
            currentRole={currentRole}
            filterMode="ASSIGNED_TO_ME"
            onSelectComplaint={(c) => setSelectedComplaint(c)}
          />
        )}

        {activeTab === 'drainage-map' && (
          <DrainageMap
            complaints={complaints}
            infrastructure={infrastructure}
            onSelectComplaint={(c) => setSelectedComplaint(c)}
          />
        )}

        {activeTab === 'infrastructure' && (
          <InfrastructureManager
            infrastructure={infrastructure}
            onRefresh={fetchAllData}
          />
        )}

        {(activeTab === 'maintenance-board' || activeTab === 'maintenance-updates' || activeTab === 'inspections') && (
          <MaintenanceBoard
            complaints={complaints}
            onSelectComplaint={(c) => setSelectedComplaint(c)}
            onUpdateStatus={handleUpdateStatus}
          />
        )}

        {activeTab === 'emergency-monitoring' && (
          <EmergencyMonitoring
            complaints={complaints}
            onSelectComplaint={(c) => setSelectedComplaint(c)}
          />
        )}

        {activeTab === 'stormwater-analysis' && <StormwaterAnalysis />}

        {activeTab === 'notifications' && (
          <NotificationsView
            notifications={notifications}
            onMarkRead={handleMarkNotificationRead}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileView currentUser={currentUser} currentRole={currentRole} />
        )}

        {activeTab === 'help-support' && (
          <div className="panel-card help-panel">
            <h2>❓ Urban Drainage Department Support</h2>
            <p>For urgent flood emergencies or immediate drain blockages requiring municipal jetting crews:</p>
            <div className="support-box">
              <p>📞 <strong>Helpline:</strong> 1800-URBAN-DRAIN (24x7 Control Room)</p>
              <p>📧 <strong>Email:</strong> support.drainage@city.gov</p>
              <p>📍 <strong>Headquarters:</strong> Municipal Drainage Works Complex, Sector 4</p>
            </div>
          </div>
        )}

        {/* Complaint Detail Modal */}
        {selectedComplaint && (
          <ComplaintDetail
            complaint={selectedComplaint}
            staffList={staffList}
            currentRole={currentRole}
            onClose={() => setSelectedComplaint(null)}
            onAssignStaff={handleAssignStaff}
            onUpdateStatus={handleUpdateStatus}
          />
        )}
      </main>
    </div>
  );
}

// Inner Dashboard View Component
function DashboardView({ currentRole, currentUser, stats, complaints, infrastructure, onNavigate, onSelectComplaint }) {
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(false);
  const total = stats?.totalComplaints || complaints.length;
  const inProgress = stats?.inProgress || complaints.filter(c => c.status === 'IN_PROGRESS').length;
  const resolved = stats?.resolved || complaints.filter(c => c.status === 'RESOLVED').length;
  const emergency = stats?.emergencyCount || complaints.filter(c => c.priority === 'EMERGENCY').length;

  useEffect(() => {
    const controller = new AbortController();
    const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=11.5053&longitude=77.2380&current=temperature_2m,precipitation,rain,weather_code&hourly=precipitation_probability&forecast_days=1&timezone=Asia%2FKolkata';

    fetch(weatherUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Weather request failed');
        return response.json();
      })
      .then((data) => {
        const currentHour = data.hourly.time.indexOf(data.current.time);
        const rainProbability = currentHour >= 0 ? data.hourly.precipitation_probability[currentHour] : 0;
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          rainProbability,
          precipitation: data.current.precipitation,
        });
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setWeatherError(true);
      });

    return () => controller.abort();
  }, []);

  const floodRisk = weather?.rainProbability >= 70 ? 'HIGH' : weather?.rainProbability >= 40 ? 'MODERATE' : 'LOW';
  const weatherDescription = weather?.precipitation > 0 ? 'Rain currently reported' : 'Current conditions are dry';

  const statCards = [
    { value: total.toString(), label: 'Total Complaints', tone: 'blue', icon: '▣', badge: 'Database Live' },
    { value: inProgress.toString(), label: 'In Progress', tone: 'orange', icon: '◔', badge: 'Active Fieldwork' },
    { value: resolved.toString(), label: 'Resolved', tone: 'green', icon: '✓', badge: 'Completed' },
    { value: emergency.toString(), label: 'Emergency Cases', tone: 'red', icon: '🚨', badge: 'Priority Response' },
  ];

  return (
    <>
      <section className="stats-grid">
        {statCards.map((stat) => (
          <article key={stat.label} className={`stat-card tone-${stat.tone}`}>
            <div className="stat-topline">
              <span className={`mini-icon ${stat.tone}`}>{stat.icon}</span>
              <span className="badge-text">{stat.badge}</span>
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </article>
        ))}
      </section>

      <section className="quick-actions">
        <button
          type="button"
          className="action-btn blue"
          onClick={() => onNavigate('report-issue')}
        >
          <span className="action-icon">＋</span>
          Report New Drainage Issue
        </button>
        <button
          type="button"
          className="action-btn green"
          onClick={() => onNavigate(currentRole === 'CITIZEN' ? 'my-complaints' : 'complaint-management')}
        >
          <span className="action-icon">⌕</span>
          View Complaint Status &amp; Timeline
        </button>
        <button
          type="button"
          className="action-btn sky"
          onClick={() => onNavigate('drainage-map')}
        >
          <span className="action-icon">🗺️</span>
          Open Interactive Drainage Map
        </button>
        {currentRole === 'ADMIN' ? (
          <button
            type="button"
            className="action-btn light"
            onClick={() => onNavigate('stormwater-analysis')}
          >
            <span className="action-icon">🌊</span>
            Run Stormwater Hydrologic Analysis
          </button>
        ) : (
          <button
            type="button"
            className="action-btn light"
            onClick={() => onNavigate('help-support')}
          >
            <span className="action-icon">📞</span>
            Contact Municipal Department
          </button>
        )}
      </section>

      <section className="lower-grid">
        <div className="timeline-panel panel-card">
          <div className="panel-header">
            <h3>Recent Drainage Complaints &amp; Lifecycle</h3>
            <button
              type="button"
              className="link-btn"
              onClick={() => onNavigate(currentRole === 'CITIZEN' ? 'my-complaints' : 'complaint-management')}
            >
              View all complaints
            </button>
          </div>

          <div className="timeline-list">
            {complaints.slice(0, 4).map((item) => (
              <div key={item.id} className="timeline-item cursor-pointer" onClick={() => onSelectComplaint(item)}>
                <div className="mini-meta">
                  <span className="code">#CMP-{item.id}</span>
                  <span className="title">{item.issueType?.replace('_', ' ')} — <small>{item.address}</small></span>
                </div>

                <div className="timeline-row">
                  <div className="status-track">
                    {['SUBMITTED', 'UNDER_REVIEW', 'ASSIGNED', 'IN_PROGRESS', 'RESOLVED'].map((status) => {
                      const statusOrder = ['SUBMITTED', 'UNDER_REVIEW', 'ASSIGNED', 'IN_PROGRESS', 'RESOLVED'];
                      const currentIndex = statusOrder.indexOf(item.status);
                      const targetIndex = statusOrder.indexOf(status);
                      const isDone = targetIndex <= currentIndex;
                      const isActive = status === item.status;

                      return (
                        <span
                          key={`${item.id}-${status}`}
                          className={`status-step ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}`}
                        >
                          <em className="dot" />
                          <small>{status.replace('_', ' ')}</small>
                        </span>
                      );
                    })}
                  </div>

                  <div className="timeline-side">
                    <span className={`priority priority-${item.priority?.toLowerCase()}`}>{item.priority}</span>
                    <span className="timeline-date">{new Date(item.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="right-stack">
          {/* Weather & Flood Risk Panel */}
          <div className="weather-card panel-card">
            <div className="weather-header">
              <h3>🌧️ Weather &amp; Flood Risk Advisory</h3>
              <small>Sathyamangalam, Tamil Nadu</small>
            </div>

            <div className="weather-main">
              <div className="temp">{weather ? `${weather.temperature}°C` : '--'}</div>
              <div className="weather-text">{weatherError ? 'Weather service unavailable' : weather ? weatherDescription : 'Loading live conditions...'}</div>
            </div>

            <div className="weather-metrics">
              <div className="metric-box">
                <span className="metric-label">Rain Probability</span>
                <strong>{weather ? `${weather.rainProbability}%` : '--'}</strong>
              </div>
              <div className="metric-box warning">
                <span className="metric-label">Flood Risk</span>
                <strong>{weather ? floodRisk : '--'}</strong>
              </div>
            </div>

            <div className="warning-banner">
              <span className="warning-icon">ⓘ</span>
              <p>{weather?.rainProbability >= 40 ? 'Advisory: Rain may affect low-lying drainage catchments. Keep storm inlets clear.' : 'Advisory: Monitor local rainfall and keep storm inlets clear.'}</p>
            </div>
          </div>

          {/* Infrastructure Assets Overview Card */}
          <div className="alerts-card panel-card">
            <div className="panel-header">
              <h3>🔵 Key Drainage Assets</h3>
              <button type="button" className="link-btn" onClick={() => onNavigate('drainage-map')}>View GIS Map</button>
            </div>

            <div className="alert-list">
              {infrastructure.slice(0, 4).map((asset) => (
                <div key={asset.id} className="alert-item">
                  <div className="alert-icon">🔵</div>
                  <div className="alert-copy">
                    <div className="alert-title-row">
                      <span className="alert-name">{asset.name}</span>
                      <span className={`alert-severity ${asset.status?.toLowerCase()}`}>{asset.status}</span>
                    </div>
                    <div className="alert-location">{asset.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
````

### `frontend/src/assets/react.svg`

``xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

### `frontend/src/assets/vite.svg`

``xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
````

### `frontend/src/components/ComplaintDetail.jsx`

``jsx
import React, { useState } from 'react';

const STAGE_ORDER = ['SUBMITTED', 'UNDER_REVIEW', 'ASSIGNED', 'IN_PROGRESS', 'RESOLVED'];

export default function ComplaintDetail({ complaint, staffList = [], currentRole, onClose, onUpdateStatus, onAssignStaff }) {
  if (!complaint) return null;

  const [selectedStaffId, setSelectedStaffId] = useState(complaint.assignedStaffId || '');
  const [newStatus, setNewStatus] = useState(complaint.status || 'SUBMITTED');
  const [inspectionNotes, setInspectionNotes] = useState(complaint.inspectionNotes || '');
  const [maintenanceNotes, setMaintenanceNotes] = useState(complaint.maintenanceNotes || '');
  const [updating, setUpdating] = useState(false);

  const currentStageIndex = STAGE_ORDER.indexOf(complaint.status);

  const handleAssign = async () => {
    if (!selectedStaffId) return;
    setUpdating(true);
    const staffObj = staffList.find(s => s.id === Number(selectedStaffId));
    await onAssignStaff(complaint.id, Number(selectedStaffId), staffObj ? staffObj.name : 'Staff Member');
    setUpdating(false);
  };

  const handleStatusSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    await onUpdateStatus(complaint.id, newStatus, inspectionNotes, maintenanceNotes);
    setUpdating(false);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content complaint-detail-modal">
        <div className="modal-header">
          <div>
            <span className="complaint-code">#CMP-{complaint.id}</span>
            <h2>{complaint.issueType?.replace('_', ' ')}</h2>
          </div>
          <button type="button" className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {/* Visual Lifecycle Timeline */}
          <div className="lifecycle-timeline-card">
            <h4>Complaint Lifecycle Stage</h4>
            <div className="timeline-stepper">
              {STAGE_ORDER.map((stage, idx) => {
                const isPassed = currentStageIndex >= idx;
                const isCurrent = complaint.status === stage;

                return (
                  <div key={stage} className={`stepper-item ${isPassed ? 'passed' : ''} ${isCurrent ? 'current' : ''}`}>
                    <div className="stepper-dot">{isPassed ? '✓' : idx + 1}</div>
                    <span className="stepper-label">{stage.replace('_', ' ')}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="detail-grid">
            <div className="detail-col">
              <div className="info-group">
                <label>Reported By</label>
                <p><strong>{complaint.userName || 'Citizen'}</strong> (User ID #{complaint.userId})</p>
              </div>
              <div className="info-group">
                <label>Priority Level</label>
                <p><span className={`priority-tag ${complaint.priority?.toLowerCase()}`}>{complaint.priority}</span></p>
              </div>
              <div className="info-group">
                <label>Current Status</label>
                <p><span className={`status-tag ${complaint.status?.toLowerCase()}`}>{complaint.status?.replace('_', ' ')}</span></p>
              </div>
              <div className="info-group">
                <label>Location / Address</label>
                <p>📍 {complaint.address}</p>
                <small className="coordinates">Lat: {complaint.latitude}, Lng: {complaint.longitude}</small>
              </div>
            </div>

            <div className="detail-col">
              <div className="info-group">
                <label>Assigned Maintenance Staff</label>
                <p>👷 {complaint.assignedStaffName || 'Unassigned'}</p>
              </div>
              <div className="info-group">
                <label>Submission Date</label>
                <p>📅 {new Date(complaint.createdAt).toLocaleString()}</p>
              </div>
              <div className="info-group">
                <label>Description</label>
                <p className="description-text">{complaint.description}</p>
              </div>
            </div>
          </div>

          {complaint.photoUrl && (
            <div className="photo-section">
              <label>Attached Incident Photograph</label>
              <img src={complaint.photoUrl} alt="Complaint evidence" className="detail-photo" />
            </div>
          )}

          {/* Notes Display */}
          {(complaint.inspectionNotes || complaint.maintenanceNotes) && (
            <div className="notes-display-box">
              {complaint.inspectionNotes && (
                <div className="note-block">
                  <strong>🔍 Inspection Notes:</strong>
                  <p>{complaint.inspectionNotes}</p>
                </div>
              )}
              {complaint.maintenanceNotes && (
                <div className="note-block">
                  <strong>🛠️ Maintenance Completion Notes:</strong>
                  <p>{complaint.maintenanceNotes}</p>
                </div>
              )}
            </div>
          )}

          {/* Staff / Admin Actions Section */}
          {(currentRole === 'STAFF' || currentRole === 'ADMIN') && (
            <div className="management-actions-card">
              <h3>⚙️ Staff & Admin Management Actions</h3>
              
              {/* Assignment Controls */}
              <div className="action-row">
                <div className="form-group flex-1">
                  <label>Assign to Maintenance Staff:</label>
                  <select
                    value={selectedStaffId}
                    onChange={(e) => setSelectedStaffId(e.target.value)}
                  >
                    <option value="">-- Select Department Staff --</option>
                    {staffList.map((s) => (
                      <option key={s.id} value={s.id}>{s.name} ({s.department})</option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  className="action-btn-primary"
                  onClick={handleAssign}
                  disabled={updating || !selectedStaffId}
                >
                  Assign Staff
                </button>
              </div>

              {/* Status Update Controls */}
              <form onSubmit={handleStatusSubmit} className="status-update-form">
                <div className="form-group">
                  <label>Update Status:</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                  >
                    <option value="SUBMITTED">SUBMITTED</option>
                    <option value="UNDER_REVIEW">UNDER REVIEW</option>
                    <option value="ASSIGNED">ASSIGNED</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="RESOLVED">RESOLVED</option>
                    <option value="REJECTED">REJECTED</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Inspection Notes:</label>
                  <input
                    type="text"
                    placeholder="Field inspection findings..."
                    value={inspectionNotes}
                    onChange={(e) => setInspectionNotes(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Maintenance / Completion Notes:</label>
                  <input
                    type="text"
                    placeholder="Work performed, equipment used, resolution..."
                    value={maintenanceNotes}
                    onChange={(e) => setMaintenanceNotes(e.target.value)}
                  />
                </div>

                <button type="submit" className="action-btn-success" disabled={updating}>
                  Save Progress &amp; Notify Citizen
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
````

### `frontend/src/components/ComplaintList.jsx`

``jsx
import React, { useState } from 'react';

export default function ComplaintList({ complaints = [], staffList = [], currentRole, onSelectComplaint, filterMode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [priorityFilter, setPriorityFilter] = useState('ALL');

  const filteredComplaints = complaints.filter((c) => {
    // Mode filters
    if (filterMode === 'MY_COMPLAINTS' && c.userId !== 1) return false; // assuming Citizen ID 1
    if (filterMode === 'ASSIGNED_TO_ME' && c.assignedStaffId !== 2) return false; // assuming Staff ID 2
    if (filterMode === 'EMERGENCY' && c.priority !== 'EMERGENCY') return false;

    // Search filter
    const matchesSearch =
      searchTerm === '' ||
      c.id.toString().includes(searchTerm) ||
      c.issueType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description?.toLowerCase().includes(searchTerm.toLowerCase());

    // Status & Priority filters
    const matchesStatus = statusFilter === 'ALL' || c.status === statusFilter;
    const matchesPriority = priorityFilter === 'ALL' || c.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="complaint-list-panel panel-card">
      <div className="panel-header">
        <div>
          <h2>📋 {filterMode === 'MY_COMPLAINTS' ? 'My Submitted Complaints' : filterMode === 'ASSIGNED_TO_ME' ? 'Assigned Maintenance Complaints' : 'Drainage Complaints Directory'}</h2>
          <p>Total Records: {filteredComplaints.length}</p>
        </div>

        <div className="filter-controls-row">
          <input
            type="text"
            placeholder="🔎 Search complaints by ID, issue, address..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="filter-select">
            <option value="ALL">All Statuses</option>
            <option value="SUBMITTED">Submitted</option>
            <option value="UNDER_REVIEW">Under Review</option>
            <option value="ASSIGNED">Assigned</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="RESOLVED">Resolved</option>
            <option value="REJECTED">Rejected</option>
          </select>

          <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} className="filter-select">
            <option value="ALL">All Priorities</option>
            <option value="EMERGENCY">Emergency</option>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
        </div>
      </div>

      {filteredComplaints.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📭</span>
          <p>No drainage complaints match your current criteria.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="complaints-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Issue Type</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Location / Address</th>
                <th>Assigned Staff</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.map((c) => (
                <tr key={c.id} className={c.priority === 'EMERGENCY' ? 'row-emergency' : ''}>
                  <td>
                    <strong className="code-pill">#CMP-{c.id}</strong>
                  </td>
                  <td>
                    <span className="issue-title">{c.issueType?.replace('_', ' ')}</span>
                  </td>
                  <td>
                    <span className={`priority-tag ${c.priority?.toLowerCase()}`}>
                      {c.priority}
                    </span>
                  </td>
                  <td>
                    <span className={`status-tag ${c.status?.toLowerCase()}`}>
                      {c.status?.replace('_', ' ')}
                    </span>
                  </td>
                  <td>
                    <span className="address-cell" title={c.address}>📍 {c.address}</span>
                  </td>
                  <td>
                    <span className="staff-cell">{c.assignedStaffName || 'Unassigned'}</span>
                  </td>
                  <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      type="button"
                      className="view-btn"
                      onClick={() => onSelectComplaint(c)}
                    >
                      View Lifecycle ➔
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
````

### `frontend/src/components/DrainageMap.jsx`

``jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';

const MAP_WIDTH = 1200;
const MAP_HEIGHT = 1500;
const MAP_MIN_ZOOM = 0.5;
const MAP_MAX_ZOOM = 4;
// The complete campus is visible on first load; controls retain close inspection.
const DEFAULT_ZOOM = 0.78;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const projectPoint = (lat, lng) => {
  const minLat = 19.04;
  const maxLat = 19.1;
  const minLng = 72.84;
  const maxLng = 72.91;

  const x = ((lng - minLng) / (maxLng - minLng)) * MAP_WIDTH;
  const y = ((maxLat - lat) / (maxLat - minLat)) * MAP_HEIGHT;

  return {
    x: clamp(x, 20, MAP_WIDTH - 20),
    y: clamp(y, 20, MAP_HEIGHT - 20),
  };
};

// Campus plan traced from the supplied reference: IB and AS blocks sit either
// side of the central pedestrian spine, with the auditorium and library below.
const roads = [
  { id: 'edge-left', d: 'M 80 0 L 118 900', type: 'main' }, { id: 'edge-right', d: 'M 1120 0 L 1150 900', type: 'main' },
  { id: 'spine-left', d: 'M 390 120 L 400 840', type: 'secondary' }, { id: 'spine-right', d: 'M 780 120 L 805 840', type: 'secondary' },
  { id: 'cross-1', d: 'M 120 330 L 1100 300', type: 'minor' }, { id: 'cross-2', d: 'M 130 510 L 1110 485', type: 'minor' },
  { id: 'cross-3', d: 'M 140 675 L 1120 645', type: 'minor' }, { id: 'library-road', d: 'M 290 815 L 805 800', type: 'secondary' },
  { id: 'south-road', d: 'M 80 1040 L 1140 1010 M 90 1140 L 800 1120 M 805 1305 L 1135 1285', type: 'main' },
  { id: 'south-spine', d: 'M 480 1010 L 490 1360 M 790 1010 L 810 1360', type: 'secondary' },
  { id: 'walk-1', d: 'M 345 235 L 435 235 M 750 225 L 835 225 M 350 420 L 440 420 M 760 410 L 850 410 M 355 600 L 445 600 M 770 590 L 860 590', type: 'walk' },
];

const buildings = [
  { id: 'northwest', d: 'M 170 72 H 478 V 105 H 465 V 184 H 178 V 120 H 165 Z' },
  { id: 'northeast', d: 'M 640 60 H 990 V 182 H 820 V 170 H 645 Z' },
  { id: 'ib-1', x: 185, y: 258, width: 175, height: 48 }, { id: 'ib-2', x: 182, y: 340, width: 182, height: 50 },
  { id: 'ib-3', x: 190, y: 450, width: 185, height: 48 }, { id: 'ib-4', x: 195, y: 530, width: 170, height: 46 },
  { id: 'ib-5', x: 205, y: 650, width: 165, height: 48 }, { id: 'ib-6', x: 210, y: 730, width: 170, height: 46 },
  { id: 'ib-east-1', x: 415, y: 248, width: 125, height: 48 }, { id: 'ib-east-2', x: 420, y: 320, width: 120, height: 74 },
  { id: 'ib-east-3', x: 430, y: 470, width: 116, height: 82 }, { id: 'ib-east-4', x: 430, y: 640, width: 118, height: 85 },
  { id: 'as-1', x: 675, y: 242, width: 140, height: 45 }, { id: 'as-2', x: 840, y: 236, width: 175, height: 50 },
  { id: 'as-3', x: 680, y: 325, width: 130, height: 52 }, { id: 'as-4', x: 845, y: 318, width: 175, height: 50 },
  { id: 'as-5', x: 690, y: 450, width: 135, height: 50 }, { id: 'as-6', x: 845, y: 445, width: 180, height: 50 },
  { id: 'as-7', x: 700, y: 625, width: 135, height: 55 }, { id: 'as-8', x: 850, y: 615, width: 185, height: 54 },
  { id: 'as-9', x: 710, y: 720, width: 130, height: 54 }, { id: 'as-10', x: 850, y: 710, width: 185, height: 52 },
  { id: 'auditorium', d: 'M 535 620 H 575 V 595 H 640 V 620 H 680 V 770 H 535 Z', type: 'landmark' },
  { id: 'auditorium-left', x: 440, y: 735, width: 105, height: 55, type: 'accent' }, { id: 'auditorium-right', x: 680, y: 735, width: 110, height: 55, type: 'accent' },
  { id: 'library', x: 430, y: 820, width: 330, height: 92, type: 'library' },
  { id: 'lab-a', x: 470, y: 296, width: 48, height: 34, type: 'service' }, { id: 'lab-b', x: 665, y: 286, width: 50, height: 34, type: 'service' },
  { id: 'lab-c', x: 475, y: 535, width: 48, height: 34, type: 'service' }, { id: 'lab-d', x: 670, y: 530, width: 48, height: 35, type: 'service' },
  // Continuation south of the library, matching the supplied hostel/sports plan.
  { id: 'parking', x: 425, y: 950, width: 145, height: 62, type: 'parking' },
  { id: 'medical', x: 175, y: 1085, width: 120, height: 46, type: 'small-building' },
  { id: 'narmadha', d: 'M 180 1170 H 340 V 1190 H 360 V 1240 H 335 V 1270 H 185 V 1245 H 165 V 1190 H 180 Z', type: 'hostel' },
  { id: 'ganga', d: 'M 380 1180 H 525 V 1165 H 565 V 1210 H 540 V 1270 H 385 V 1240 H 365 V 1200 H 380 Z', type: 'hostel' },
  { id: 'yamuna', d: 'M 715 1170 H 875 V 1190 H 905 V 1245 H 885 V 1270 H 730 V 1240 H 710 Z', type: 'hostel' },
  { id: 'kaveri', d: 'M 255 1300 H 430 V 1275 H 465 V 1340 H 420 V 1355 H 250 Z', type: 'hostel' },
  { id: 'bhavani', d: 'M 690 1295 H 850 V 1275 H 900 V 1345 H 875 V 1360 H 690 Z', type: 'hostel' },
  { id: 'girls-mess', d: 'M 535 1260 H 650 V 1280 H 680 V 1350 H 515 V 1280 H 535 Z', type: 'mess' },
  { id: 'basketball-left', x: 535, y: 1165, width: 45, height: 115, type: 'court' },
  { id: 'basketball-mid', x: 595, y: 1160, width: 70, height: 125, type: 'court' },
  { id: 'basketball-right', x: 680, y: 1165, width: 45, height: 115, type: 'court' },
  { id: 'cafeteria', d: 'M 880 1080 H 1085 V 1105 H 1110 V 1170 H 1055 V 1190 H 915 V 1170 H 860 V 1120 H 880 Z', type: 'cafeteria' },
  { id: 'court-1', x: 850, y: 1200, width: 65, height: 95, type: 'sports-court' },
  { id: 'court-2', x: 935, y: 1200, width: 70, height: 95, type: 'sports-court' },
  { id: 'court-3', x: 1025, y: 1200, width: 85, height: 95, type: 'sports-court' },
  { id: 'playground', x: 850, y: 1320, width: 260, height: 150, type: 'playground' },
];

const drainagePaths = [
  { id: 'd1', d: 'M 395 170 L 395 760 M 795 170 L 795 760', status: 'good' },
  { id: 'd2', d: 'M 155 510 L 1080 485', status: 'maintenance' },
  { id: 'd3', d: 'M 400 645 L 800 645', status: 'blocked' },
];

const mapLabels = [
  { id: 'special', x: 785, y: 130, label: 'Special\nLabs', kind: 'purple' },
  { id: 'ib', x: 330, y: 500, label: 'IB Block', kind: 'orange' },
  { id: 'as', x: 835, y: 500, label: 'AS Block', kind: 'orange' },
  { id: 'auditorium', x: 605, y: 770, label: 'Main\nAuditorium', kind: 'purple' },
  { id: 'library', x: 595, y: 875, label: 'Library', kind: 'red' },
  { id: 'parking', x: 500, y: 982, label: 'Parking\nlot', kind: 'blue' },
  { id: 'medical', x: 235, y: 1080, label: 'Medical\nCentre', kind: 'purple' },
  { id: 'narmadha', x: 245, y: 1220, label: 'Narmadha\nHostel', kind: 'red' },
  { id: 'ganga', x: 465, y: 1225, label: 'Ganga\nHostel', kind: 'purple' },
  { id: 'yamuna', x: 795, y: 1225, label: 'Yamuna\nHostel', kind: 'green' },
  { id: 'kaveri', x: 335, y: 1340, label: 'Kaveri\nHostel', kind: 'orange' },
  { id: 'bhavani', x: 790, y: 1340, label: 'Bhavani\nHostel', kind: 'purple' },
  { id: 'girls-mess', x: 600, y: 1340, label: 'Girls\nMess', kind: 'red' },
  { id: 'basketball', x: 630, y: 1210, label: 'Basket\nBall\nCourt', kind: 'blue' },
  { id: 'volleyball', x: 880, y: 1245, label: 'Volley\nBall\nCourt', kind: 'purple' },
  { id: 'tennis', x: 1065, y: 1245, label: 'Tennis\nCourts', kind: 'red' },
  { id: 'cafeteria', x: 980, y: 1125, label: 'Cafeteria', kind: 'green' },
  { id: 'playground', x: 980, y: 1400, label: 'Empty\nPlayground', kind: 'purple' },
];

const getMarkerClass = (priority, status) => {
  if (status === 'RESOLVED') return 'green';
  if (priority === 'EMERGENCY') return 'red';
  if (priority === 'HIGH') return 'orange';
  if (status === 'ASSIGNED' || status === 'IN_PROGRESS') return 'blue';
  return 'yellow';
};

export default function DrainageMap({ complaints = [], infrastructure = [], onSelectComplaint }) {
  const viewportRef = useRef(null);
  const dragRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [priorityFilter, setPriorityFilter] = useState('ALL');
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [layers, setLayers] = useState({
    roads: true,
    buildings: true,
    drainage: true,
    complaints: true,
    labels: true,
    assets: true,
  });
  const [showLayersPanel, setShowLayersPanel] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState({ x: 0, y: 0, zoom: DEFAULT_ZOOM });

  const visibleComplaints = useMemo(() => {
    return complaints.filter((item) => {
      if (!item.latitude || !item.longitude) return false;
      if (activeCategory === 'EMERGENCY' && item.priority !== 'EMERGENCY') return false;
      if (activeCategory === 'MAINTENANCE' && !['ASSIGNED', 'IN_PROGRESS'].includes(item.status)) return false;
      if (activeCategory === 'COMPLAINTS' && item.priority === 'LOW') return false;
      if (statusFilter !== 'ALL' && item.status !== statusFilter) return false;
      if (priorityFilter !== 'ALL' && item.priority !== priorityFilter) return false;
      return true;
    });
  }, [complaints, activeCategory, statusFilter, priorityFilter]);

  const visibleInfrastructure = useMemo(() => {
    if (activeCategory === 'COMPLAINTS' || activeCategory === 'EMERGENCY' || activeCategory === 'MAINTENANCE') {
      return [];
    }
    return infrastructure.filter((item) => item.latitude && item.longitude);
  }, [infrastructure, activeCategory]);

  const allPoints = useMemo(() => {
    const points = [];
    visibleComplaints.forEach((item) => {
      const { x, y } = projectPoint(item.latitude, item.longitude);
      points.push({
        id: `complaint-${item.id}`,
        type: 'complaint',
        item,
        x,
        y,
        label: item.issueType || 'Complaint',
        colorClass: getMarkerClass(item.priority, item.status),
      });
    });

    visibleInfrastructure.forEach((item) => {
      const { x, y } = projectPoint(item.latitude, item.longitude);
      points.push({
        id: `infra-${item.id}`,
        type: 'asset',
        item,
        x,
        y,
        label: item.name || 'Asset',
        colorClass: 'blue',
      });
    });

    return points;
  }, [visibleComplaints, visibleInfrastructure]);

  const filteredSearchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const query = searchTerm.toLowerCase();

    return allPoints.filter((point) => {
      const item = point.item || {};
      return `${point.label} ${item.address || ''} ${item.name || ''} ${item.issueType || ''}`
        .toLowerCase()
        .includes(query);
    });
  }, [allPoints, searchTerm]);

  const clampView = (nextZoom = view.zoom, nextX = view.x, nextY = view.y) => {
    const width = viewportRef.current?.clientWidth || 1100;
    const height = viewportRef.current?.clientHeight || 680;
    const minX = Math.min(0, width - MAP_WIDTH * nextZoom);
    const maxX = 0;
    const minY = Math.min(0, height - MAP_HEIGHT * nextZoom);
    const maxY = 0;

    return {
      x: clamp(nextX, minX, maxX),
      y: clamp(nextY, minY, maxY),
      zoom: clamp(nextZoom, MAP_MIN_ZOOM, MAP_MAX_ZOOM),
    };
  };

  useEffect(() => {
    if (!viewportRef.current) return;
    const width = viewportRef.current.clientWidth;
    const height = viewportRef.current.clientHeight;
    setView((prev) => clampView(prev.zoom, width / 2 - (MAP_WIDTH * prev.zoom) / 2, height / 2 - (MAP_HEIGHT * prev.zoom) / 2));
  }, []);

  const handleZoom = (direction) => {
    const factor = direction > 0 ? 1.18 : 0.85;
    const nextZoom = clamp(view.zoom * factor, MAP_MIN_ZOOM, MAP_MAX_ZOOM);
    const viewport = viewportRef.current;
    if (!viewport) return;

    const rect = viewport.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const worldX = (centerX - view.x) / view.zoom;
    const worldY = (centerY - view.y) / view.zoom;

    const nextX = centerX - worldX * nextZoom;
    const nextY = centerY - worldY * nextZoom;
    setView(clampView(nextZoom, nextX, nextY));
  };

  const handleWheel = (event) => {
    event.preventDefault();
    const rect = viewportRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const direction = event.deltaY < 0 ? 1 : -1;
    const factor = direction > 0 ? 1.15 : 0.87;
    const nextZoom = clamp(view.zoom * factor, MAP_MIN_ZOOM, MAP_MAX_ZOOM);
    const worldX = (mouseX - view.x) / view.zoom;
    const worldY = (mouseY - view.y) / view.zoom;

    setView(clampView(nextZoom, mouseX - worldX * nextZoom, mouseY - worldY * nextZoom));
  };

  const handleMouseDown = (event) => {
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: view.x,
      originY: view.y,
    };
  };

  const handleMouseMove = (event) => {
    if (!dragRef.current) return;
    const dx = event.clientX - dragRef.current.startX;
    const dy = event.clientY - dragRef.current.startY;
    setView(clampView(view.zoom, dragRef.current.originX + dx, dragRef.current.originY + dy));
  };

  const handleMouseUp = () => {
    dragRef.current = null;
  };

  const handleReset = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const width = viewport.clientWidth;
    const height = viewport.clientHeight;
    setView(clampView(DEFAULT_ZOOM, width / 2 - (MAP_WIDTH * DEFAULT_ZOOM) / 2, height / 2 - (MAP_HEIGHT * DEFAULT_ZOOM) / 2));
  };

  const handleFullscreen = async () => {
    const el = viewportRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      await el.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  const handleLocate = () => {
    const firstMarker = allPoints[0];
    if (!firstMarker) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    const centerX = viewport.clientWidth / 2;
    const centerY = viewport.clientHeight / 2;
    const nextZoom = 2.1;
    const nextX = centerX - firstMarker.x * nextZoom;
    const nextY = centerY - firstMarker.y * nextZoom;
    setView(clampView(nextZoom, nextX, nextY));
  };

  const handleMapClick = (event) => {
    if (!viewportRef.current) return;
    // A plain map click should only clear a selected issue; it must not expose
    // internal canvas X/Y coordinates to the user.
    setSelectedMarkerId(null);
  };

  const handleSearchSelect = (point) => {
    const viewport = viewportRef.current;
    if (!viewport || !point) return;

    const nextZoom = 2.2;
    const nextX = viewport.clientWidth / 2 - point.x * nextZoom;
    const nextY = viewport.clientHeight / 2 - point.y * nextZoom;
    setView(clampView(nextZoom, nextX, nextY));
    setSelectedMarkerId(point.id);
    setSearchTerm(point.label);
  };

  const toggleLayer = (layer) => {
    setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  const selectedItem = allPoints.find((point) => point.id === selectedMarkerId);

  return (
    <div className="custom-map-panel">
      <div className="custom-map-toolbar">
        <div className="search-box">
          <span className="search-icon">🔎</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search location..."
            aria-label="Search map locations"
          />
        </div>

        <div className="toolbar-actions">
          <button type="button" className="toolbar-button" onClick={() => setShowLayersPanel((prev) => !prev)}>
            ☰ Layers
          </button>
        </div>
      </div>

      {showLayersPanel && (
        <div className="map-layers-panel">
          {Object.entries(layers).map(([key, enabled]) => (
            <label key={key} className="layer-toggle">
              <input type="checkbox" checked={enabled} onChange={() => toggleLayer(key)} />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          ))}
        </div>
      )}

      <div className="custom-map-wrap">
        <div className="custom-map-controls vertical">
          <button type="button" onClick={() => handleZoom(1)} aria-label="Zoom in">＋</button>
          <button type="button" onClick={() => handleZoom(-1)} aria-label="Zoom out">−</button>
          <button type="button" onClick={handleReset} aria-label="Reset view">⟳</button>
          <button type="button" onClick={handleFullscreen} aria-label="Fullscreen">⛶</button>
          <button type="button" onClick={handleLocate} aria-label="Center map">⌖</button>
        </div>

        <div
          ref={viewportRef}
          className="custom-map-viewport"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={handleMapClick}
        >
          <div
            className="custom-map-canvas"
            style={{
              width: MAP_WIDTH,
              height: MAP_HEIGHT,
              transform: `translate(${view.x}px, ${view.y}px) scale(${view.zoom})`,
              cursor: dragRef.current ? 'grabbing' : 'grab',
            }}
          >
            <svg className="custom-map-svg" viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} preserveAspectRatio="xMidYMid meet">
              <rect x="78" y="0" width="1070" height="1500" className="map-boundary" />

              {layers.roads && roads.map((road) => (
                <path key={road.id} d={road.d} className={`map-road ${road.type}`} />
              ))}

              {layers.buildings && buildings.map((building) => (
                <g key={building.id}>
                  {building.d ? (
                    <path d={building.d} className={`map-building ${building.type || ''}`} />
                  ) : (
                    <rect x={building.x} y={building.y} width={building.width} height={building.height} className={`map-building ${building.type || ''}`} />
                  )}
                </g>
              ))}

              {layers.drainage && drainagePaths.map((line) => (
                <path key={line.id} d={line.d} className={`map-drain ${line.status}`} />
              ))}

              {layers.labels && mapLabels.map((label) => (
                <g key={label.id} className={`map-campus-label ${label.kind || ''}`}>
                  <text x={label.x} y={label.y} textAnchor="middle" className="map-label-text">
                    {label.label.split('\n').map((line, index) => <tspan key={line} x={label.x} dy={index === 0 ? 0 : 19}>{line}</tspan>)}
                  </text>
                </g>
              ))}
              {layers.labels && <>
                <g className="map-landmark-icon lab-icon" transform="translate(820 150)"><circle r="24" /><path d="M-10 -8h20v18h-20zM-5 -13h10M-6 1h12" /></g>
                <g className="map-landmark-icon lab-icon" transform="translate(470 665)"><circle r="24" /><path d="M-10 -8h20v18h-20zM-5 -13h10M-6 1h12" /></g>
                <g className="map-landmark-icon library-icon" transform="translate(595 850)"><circle r="25" /><path d="M-12 10h24M-9 8V-5M0 8V-5M9 8V-5M-14 -5L0-13L14-5" /></g>
                <g className="map-landmark-icon hostel-icon" transform="translate(245 1240)"><circle r="24" /><path d="M-13 5h26M-10 5v-10h20v10M-8 0h16" /></g>
                <g className="map-landmark-icon hostel-icon" transform="translate(420 1225)"><circle r="24" /><path d="M-13 5h26M-10 5v-10h20v10M-8 0h16" /></g>
                <g className="map-landmark-icon cafeteria-icon" transform="translate(980 1155)"><circle r="24" /><path d="M-5-12v24M4-12v10M9-12v10M4-2h5M-10-12v9c0 6 7 6 7 0v-9" /></g>
              </>}
            </svg>

            {allPoints.map((point) => (
              <button
                key={point.id}
                type="button"
                className={`map-marker ${point.colorClass} ${selectedMarkerId === point.id ? 'selected' : ''}`}
                style={{ left: point.x, top: point.y }}
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedMarkerId(point.id);
                  if (onSelectComplaint && point.type === 'complaint') onSelectComplaint(point.item);
                }}
                onMouseEnter={() => setSelectedMarkerId(point.id)}
                aria-label={point.label}
              >
                <span>{point.type === 'asset' ? '◉' : '•'}</span>
              </button>
            ))}

            {selectedItem && (
              <div className="map-popup-card" style={{ left: selectedItem.x + 18, top: selectedItem.y - 110 }}>
                <div className="popup-header-row">
                  <strong>{selectedItem.item?.issueType || selectedItem.item?.name || 'Location'}</strong>
                  <span className={`popup-badge ${selectedItem.colorClass}`}>{selectedItem.item?.priority || 'Asset'}</span>
                </div>
                <p>{selectedItem.item?.description || selectedItem.item?.address || 'Municipal infrastructure asset'}</p>
                <small>{selectedItem.item?.status || 'Live'}</small>
              </div>
            )}
          </div>
        </div>

      </div>

      {filteredSearchResults.length > 0 && (
        <div className="search-results-panel">
          {filteredSearchResults.slice(0, 5).map((point) => (
            <button key={point.id} type="button" className="search-result-item" onClick={() => handleSearchSelect(point)}>
              {point.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
````

### `frontend/src/components/EmergencyMonitoring.jsx`

``jsx
import React from 'react';

export default function EmergencyMonitoring({ complaints = [], onSelectComplaint }) {
  const emergencies = complaints.filter(
    (c) => c.priority === 'EMERGENCY' || c.issueType === 'FLOODING' || c.priority === 'HIGH'
  );

  return (
    <div className="emergency-panel panel-card">
      <div className="panel-header emergency-header">
        <div className="header-alert-title">
          <span className="pulse-alert-dot" />
          <h2>🚨 Emergency Drainage Issue Monitoring Center</h2>
        </div>
        <p>Real-time monitoring of flash flooding, main channel overflows, and critical hazards.</p>
      </div>

      <div className="emergency-banner-box">
        <div className="banner-icon">⚠️</div>
        <div className="banner-content">
          <h4>Active Monsoon &amp; Dewatering Protocol</h4>
          <p>
            Emergency complaints automatically alert senior municipal staff. Dewatering pumps and emergency suction trucks are prioritized for these coordinates.
          </p>
        </div>
      </div>

      <div className="emergency-grid">
        {emergencies.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">✅</span>
            <p>No active emergency drainage alerts currently logged.</p>
          </div>
        ) : (
          emergencies.map((item) => (
            <div key={item.id} className="emergency-card">
              <div className="card-top">
                <span className="emerg-code">#CMP-{item.id}</span>
                <span className="emerg-badge">CRITICAL EMERGENCY</span>
              </div>

              <h3>{item.issueType?.replace('_', ' ')}</h3>
              <p className="emerg-loc">📍 <strong>Location:</strong> {item.address}</p>
              <p className="emerg-coords">GPS: {item.latitude}, {item.longitude}</p>

              <div className="emerg-desc">{item.description}</div>

              <div className="emerg-meta">
                <span>Status: <strong className={`status-tag ${item.status?.toLowerCase()}`}>{item.status?.replace('_', ' ')}</strong></span>
                <span>Assigned: <strong>{item.assignedStaffName || 'Emergency Response Unit'}</strong></span>
              </div>

              <button
                type="button"
                className="emerg-action-btn"
                onClick={() => onSelectComplaint(item)}
              >
                🚨 Open Emergency Control &amp; Dispatch ➔
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
````

### `frontend/src/components/InfrastructureManager.jsx`

``jsx
import React, { useState } from 'react';

const INFRA_TYPES = [
  { value: 'STORM_DRAIN', label: 'Storm Drain' },
  { value: 'DRAINAGE_CHANNEL', label: 'Drainage Channel' },
  { value: 'OUTLET', label: 'Discharge Outlet' },
  { value: 'CULVERT', label: 'Culvert' },
  { value: 'MANHOLE', label: 'Manhole Junction' },
  { value: 'PUMPING_STATION', label: 'Pumping Station' },
];

export default function InfrastructureManager({ infrastructure = [], onRefresh }) {
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: 'STORM_DRAIN',
    description: '',
    latitude: 19.0760,
    longitude: 72.8777,
    address: '',
    status: 'OPERATIONAL',
  });

  const [saving, setSaving] = useState(false);

  const handleOpenNew = () => {
    setEditingId(null);
    setFormData({
      name: '',
      type: 'STORM_DRAIN',
      description: '',
      latitude: 19.0760,
      longitude: 72.8777,
      address: '',
      status: 'OPERATIONAL',
    });
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      name: item.name,
      type: item.type,
      description: item.description || '',
      latitude: item.latitude,
      longitude: item.longitude,
      address: item.address || '',
      status: item.status || 'OPERATIONAL',
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this drainage infrastructure asset?')) return;
    try {
      await fetch(`/api/drainage/infrastructure/${id}`, { method: 'DELETE' });
      if (onRefresh) onRefresh();
    } catch (err) {
      alert('Failed to delete asset.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const url = editingId ? `/api/drainage/infrastructure/${editingId}` : '/api/drainage/infrastructure';
    const method = editingId ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Save failed.');

      setShowModal(false);
      if (onRefresh) onRefresh();
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="infrastructure-panel panel-card">
      <div className="panel-header">
        <div>
          <h2>🏗️ Drainage Infrastructure Management</h2>
          <p>Register and maintain city drainage network assets across sectors.</p>
        </div>
        <button type="button" className="action-btn-primary" onClick={handleOpenNew}>
          ＋ Register New Asset
        </button>
      </div>

      <div className="table-responsive">
        <table className="complaints-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Asset Name</th>
              <th>Infrastructure Type</th>
              <th>Location Address</th>
              <th>GPS Coordinates</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {infrastructure.map((item) => (
              <tr key={item.id}>
                <td><strong>#INF-{item.id}</strong></td>
                <td><strong>{item.name}</strong></td>
                <td><span className="type-badge">{item.type.replace('_', ' ')}</span></td>
                <td>📍 {item.address}</td>
                <td>{item.latitude}, {item.longitude}</td>
                <td>
                  <span className={`status-tag ${item.status?.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <div className="btn-group">
                    <button type="button" className="btn-icon" onClick={() => handleEdit(item)}>✏️ Edit</button>
                    <button type="button" className="btn-icon danger" onClick={() => handleDelete(item.id)}>🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{editingId ? 'Edit Asset' : 'Register New Drainage Asset'}</h2>
              <button type="button" className="close-btn" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Asset Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Greely Valley Main Outlet"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row grid-2">
                <div className="form-group">
                  <label>Type *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    {INFRA_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Operational Status *</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="OPERATIONAL">OPERATIONAL</option>
                    <option value="MAINTENANCE_REQUIRED">MAINTENANCE REQUIRED</option>
                    <option value="UNDER_REPAIR">UNDER REPAIR</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>
              </div>

              <div className="form-row grid-3">
                <div className="form-group">
                  <label>Latitude *</label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={formData.latitude}
                    onChange={(e) => setFormData({ ...formData, latitude: parseFloat(e.target.value) })}
                  />
                </div>
                <div className="form-group">
                  <label>Longitude *</label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={formData.longitude}
                    onChange={(e) => setFormData({ ...formData, longitude: parseFloat(e.target.value) })}
                  />
                </div>
                <div className="form-group">
                  <label>Address / Zone *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sector 4 Main Road"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Description / Technical Details</label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="action-btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="action-btn-primary" disabled={saving}>
                  {saving ? 'Saving...' : 'Save Asset'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
````

### `frontend/src/components/MaintenanceBoard.jsx`

``jsx
import React, { useState } from 'react';

export default function MaintenanceBoard({ complaints = [], onSelectComplaint, onUpdateStatus }) {
  const activeMaintenance = complaints.filter(
    (c) => c.status === 'ASSIGNED' || c.status === 'IN_PROGRESS' || c.status === 'RESOLVED'
  );

  const [selectedId, setSelectedId] = useState(null);
  const [maintenanceNotes, setMaintenanceNotes] = useState('');
  const [workStatus, setWorkStatus] = useState('IN_PROGRESS');

  const selectedComplaint = complaints.find((c) => c.id === selectedId);

  const handleUpdateWork = async (e) => {
    e.preventDefault();
    if (!selectedId) return;
    await onUpdateStatus(selectedId, workStatus, selectedComplaint?.inspectionNotes, maintenanceNotes);
    setSelectedId(null);
    setMaintenanceNotes('');
  };

  return (
    <div className="maintenance-panel panel-card">
      <div className="panel-header">
        <div>
          <h2>🛠️ Drainage Maintenance Workboard</h2>
          <p>Track ongoing drain clearing, jetting, culvert repairs, and field inspections.</p>
        </div>
      </div>

      <div className="maintenance-grid">
        {activeMaintenance.map((item) => (
          <div key={item.id} className={`maintenance-card ${item.status?.toLowerCase()}`}>
            <div className="card-topline">
              <span className="code">#CMP-{item.id}</span>
              <span className={`priority-tag ${item.priority?.toLowerCase()}`}>{item.priority}</span>
            </div>

            <h3>{item.issueType?.replace('_', ' ')}</h3>
            <p className="loc">📍 {item.address}</p>

            <div className="assigned-bar">
              <span>👷 Staff: <strong>{item.assignedStaffName || 'Unassigned'}</strong></span>
            </div>

            {item.inspectionNotes && (
              <div className="field-note">
                <small>Inspection Note:</small>
                <p>{item.inspectionNotes}</p>
              </div>
            )}

            {item.maintenanceNotes && (
              <div className="field-note work-note">
                <small>Maintenance Note:</small>
                <p>{item.maintenanceNotes}</p>
              </div>
            )}

            <div className="card-footer">
              <span className={`status-pill ${item.status?.toLowerCase()}`}>{item.status?.replace('_', ' ')}</span>
              <button
                type="button"
                className="action-btn-sm"
                onClick={() => {
                  setSelectedId(item.id);
                  setWorkStatus(item.status);
                  setMaintenanceNotes(item.maintenanceNotes || '');
                }}
              >
                ✏️ Update Progress
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedComplaint && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Update Maintenance Work — #CMP-{selectedComplaint.id}</h2>
              <button type="button" className="close-btn" onClick={() => setSelectedId(null)}>✕</button>
            </div>
            <form onSubmit={handleUpdateWork} className="modal-form">
              <div className="form-group">
                <label>Issue Type &amp; Location</label>
                <p><strong>{selectedComplaint.issueType?.replace('_', ' ')}</strong> — {selectedComplaint.address}</p>
              </div>

              <div className="form-group">
                <label>Maintenance Work Status *</label>
                <select
                  value={workStatus}
                  onChange={(e) => setWorkStatus(e.target.value)}
                >
                  <option value="ASSIGNED">ASSIGNED (Pending Dispatch)</option>
                  <option value="IN_PROGRESS">IN PROGRESS (Crew Onsite)</option>
                  <option value="RESOLVED">RESOLVED (Restored &amp; Cleaned)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Progress / Completion Notes *</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Record equipment deployed (e.g., suction tanker, high-pressure jetter), volume cleared, or restoration completion..."
                  value={maintenanceNotes}
                  onChange={(e) => setMaintenanceNotes(e.target.value)}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="action-btn-secondary" onClick={() => setSelectedId(null)}>Cancel</button>
                <button type="submit" className="action-btn-success">Save &amp; Notify Citizen</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
````

### `frontend/src/components/NavbarHeader.jsx`

``jsx
import React from 'react';

export default function NavbarHeader({
  currentUser,
  currentRole,
  onRoleChange,
  unreadNotificationsCount,
  onOpenNotifications,
  themeMode,
  onToggleTheme
}) {
  const currentDateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <header className="topbar">
      <div className="welcome-block">
        <h1>
          Urban Drainage Portal <span className="dept-tag">Municipal Department</span>
        </h1>
        <p className="welcome-subtext">
          Signed in as <strong>{currentUser.name}</strong> · {currentRole.toLowerCase()}
        </p>
      </div>

      <div className="topbar-actions">
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          title="Switch appearance"
        >
          {themeMode === 'night' ? '🌙 Night theme' : '☀️ Day theme'}
        </button>

        <div className="role-switcher" title="Switch workspace role">
          <span className="switcher-label">Workspace:</span>
          <button
            type="button"
            className={`role-btn ${currentRole === 'CITIZEN' ? 'active' : ''}`}
            onClick={() => onRoleChange('CITIZEN')}
          >
            Citizen
          </button>
          <button
            type="button"
            className={`role-btn ${currentRole === 'STAFF' ? 'active' : ''}`}
            onClick={() => onRoleChange('STAFF')}
          >
            Staff
          </button>
          <button
            type="button"
            className={`role-btn ${currentRole === 'ADMIN' ? 'active' : ''}`}
            onClick={() => onRoleChange('ADMIN')}
          >
            Admin
          </button>
        </div>

        <div className="date-pill">{currentDateStr}</div>

        <button 
          type="button" 
          className="notification-pill-btn" 
          onClick={onOpenNotifications}
          title="View Notifications"
        >
          <span className="bell-icon">🔔</span>
          {unreadNotificationsCount > 0 && (
            <span className="unread-badge">{unreadNotificationsCount}</span>
          )}
        </button>

        <div className="user-pill">
          <div className="avatar">
            {currentUser.name ? currentUser.name.split(' ').map(n => n[0]).join('').substring(0, 2) : 'UD'}
          </div>
          <div className="user-info">
            <span className="user-name">{currentUser.name}</span>
            <span className="user-role-badge">{currentRole}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
````

### `frontend/src/components/NotificationsView.jsx`

``jsx
import React from 'react';

export default function NotificationsView({ notifications = [], onMarkRead }) {
  return (
    <div className="notifications-panel panel-card">
      <div className="panel-header">
        <div>
          <h2>🔔 Department Notifications &amp; Alerts</h2>
          <p>Real-time updates regarding your complaint lifecycle, emergency advisories, and maintenance events.</p>
        </div>
      </div>

      <div className="notification-list">
        {notifications.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">🔕</span>
            <p>You have no notifications at this time.</p>
          </div>
        ) : (
          notifications.map((item) => (
            <div key={item.id} className={`notification-item ${!item.read ? 'unread' : ''}`}>
              <div className="notif-icon">
                {item.type === 'EMERGENCY_ALERT' ? '🚨' : item.type === 'ASSIGNMENT' ? '🎯' : item.type === 'STATUS_UPDATE' ? '📋' : '📝'}
              </div>
              <div className="notif-body">
                <div className="notif-header">
                  <h4>{item.title}</h4>
                  <span className="notif-date">{new Date(item.createdAt).toLocaleString()}</span>
                </div>
                <p>{item.message}</p>
              </div>
              {!item.read && (
                <button
                  type="button"
                  className="mark-read-btn"
                  onClick={() => onMarkRead(item.id)}
                >
                  Mark as Read
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
````

### `frontend/src/components/ProfileView.jsx`

``jsx
import React from 'react';

export default function ProfileView({ currentUser, currentRole }) {
  return (
    <div className="profile-panel-container">
      <div className="profile-panel panel-card">
        <div className="panel-header">
          <h2>👤 User Profile &amp; Department Credentials</h2>
        </div>

        <div className="profile-card-content">
          <div className="profile-avatar-large">
            {currentUser.name ? currentUser.name.split(' ').map(n => n[0]).join('') : 'UD'}
          </div>

          <div className="profile-details-grid">
            <div className="detail-item">
              <label>Full Name</label>
              <p><strong>{currentUser.name}</strong></p>
            </div>
            <div className="detail-item">
              <label>Official Email</label>
              <p>{currentUser.email}</p>
            </div>
            <div className="detail-item">
              <label>Active Role</label>
              <p><span className="role-tag">{currentRole}</span></p>
            </div>
            <div className="detail-item">
              <label>Assigned Department</label>
              <p>Urban Drainage Department</p>
            </div>
            <div className="detail-item">
              <label>Contact Phone</label>
              <p>{currentUser.phone || '+1 555-0192'}</p>
            </div>
            <div className="detail-item">
              <label>System Jurisdiction</label>
              <p>Municipal Waterlogging &amp; Stormwater Management Zone</p>
            </div>
          </div>
        </div>
      </div>

      {/* Database Connection Info Card */}
      <div className="db-info-panel panel-card" style={{ marginTop: '1.5rem' }}>
        <div className="panel-header">
          <h3>🗄️ Backend Persistence &amp; Database Connection Status</h3>
          <span className="status-tag resolved">Connected &amp; Active</span>
        </div>
        <div className="db-details-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div className="db-item">
            <small style={{ color: 'var(--text-muted)' }}>Database Engine</small>
            <p><strong>PostgreSQL / Spring Data JPA</strong></p>
          </div>
          <div className="db-item">
            <small style={{ color: 'var(--text-muted)' }}>Primary Datasource URL</small>
            <p><code>jdbc:postgresql://localhost:5432/urban_drainage</code></p>
          </div>
          <div className="db-item">
            <small style={{ color: 'var(--text-muted)' }}>Dev Fallback</small>
            <p><code>jdbc:h2:mem:urbandrainage</code> (HikariCP)</p>
          </div>
          <div className="db-item">
            <small style={{ color: 'var(--text-muted)' }}>Active Entities</small>
            <p><code>users</code>, <code>drainage_complaints</code>, <code>drainage_infrastructure</code>, <code>notifications</code></p>
          </div>
        </div>
      </div>
    </div>
  );
}
````

### `frontend/src/components/ReportIssue.jsx`

``jsx
import React, { useMemo, useState } from 'react';

const ISSUE_TYPES = [
  { value: 'BLOCKED_DRAIN', label: 'Blocked Drain' },
  { value: 'DRAIN_OVERFLOW', label: 'Drain Overflow' },
  { value: 'WATERLOGGING', label: 'Waterlogging' },
  { value: 'DAMAGED_DRAIN', label: 'Damaged Drain' },
  { value: 'OPEN_DRAIN', label: 'Open Drain' },
  { value: 'GARBAGE_ACCUMULATION', label: 'Garbage Accumulation' },
  { value: 'DRAINAGE_LEAKAGE', label: 'Drainage Leakage' },
  { value: 'FLOODING', label: 'Flooding' },
  { value: 'MANHOLE_PROBLEM', label: 'Manhole Problem' },
  { value: 'OTHER', label: 'Other' },
];

const AUTOMATIC_PRIORITY_MAP = {
  FLOODING: 'EMERGENCY',
  DRAIN_OVERFLOW: 'HIGH',
  WATERLOGGING: 'HIGH',
  BLOCKED_DRAIN: 'HIGH',
  MANHOLE_PROBLEM: 'MEDIUM',
  OPEN_DRAIN: 'MEDIUM',
  DRAINAGE_LEAKAGE: 'MEDIUM',
  DAMAGED_DRAIN: 'MEDIUM',
  GARBAGE_ACCUMULATION: 'LOW',
  OTHER: 'LOW',
};

const MAP_WIDTH = 820;
const MAP_HEIGHT = 520;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const projectToLatLng = (x, y) => {
  const minLat = 19.04;
  const maxLat = 19.1;
  const minLng = 72.84;
  const maxLng = 72.91;

  const lat = maxLat - (y / MAP_HEIGHT) * (maxLat - minLat);
  const lng = minLng + (x / MAP_WIDTH) * (maxLng - minLng);

  return {
    latitude: Number(lat.toFixed(6)),
    longitude: Number(lng.toFixed(6)),
  };
};

const projectFromLatLng = (latitude, longitude) => {
  const minLat = 19.04;
  const maxLat = 19.1;
  const minLng = 72.84;
  const maxLng = 72.91;

  const x = ((longitude - minLng) / (maxLng - minLng)) * MAP_WIDTH;
  const y = ((maxLat - latitude) / (maxLat - minLat)) * MAP_HEIGHT;

  return {
    x: clamp(x, 10, MAP_WIDTH - 10),
    y: clamp(y, 10, MAP_HEIGHT - 10),
  };
};

export default function ReportIssue({ currentUser, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    issueType: 'BLOCKED_DRAIN',
    description: '',
    latitude: 19.076,
    longitude: 72.8777,
    address: 'Greely Valley, Sector 4, City Zone',
    photoUrl: '',
    priority: AUTOMATIC_PRIORITY_MAP['BLOCKED_DRAIN'],
  });

  const [locationMode, setLocationMode] = useState('CURRENT');
  const [loadingGps, setLoadingGps] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const markerPosition = useMemo(() => projectFromLatLng(formData.latitude, formData.longitude), [formData.latitude, formData.longitude]);

  const handleIssueTypeChange = (newType) => {
    const autoMappedPriority = AUTOMATIC_PRIORITY_MAP[newType] || 'MEDIUM';
    setFormData((prev) => ({
      ...prev,
      issueType: newType,
      priority: autoMappedPriority,
    }));
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setErrorMsg('Geolocation is not supported by your browser.');
      return;
    }

    setLoadingGps(true);
    setErrorMsg('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = parseFloat(position.coords.latitude.toFixed(6));
        const lng = parseFloat(position.coords.longitude.toFixed(6));

        setFormData((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lng,
          address: `GPS Location (${lat}, ${lng})`,
        }));
        setLoadingGps(false);
      },
      () => {
        setLoadingGps(false);
        setErrorMsg('Unable to retrieve GPS location. Please select the location manually on the custom map.');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handlePickerClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp((event.clientX - rect.left), 0, MAP_WIDTH);
    const y = clamp((event.clientY - rect.top), 0, MAP_HEIGHT);

    const { latitude, longitude } = projectToLatLng(x, y);

    setFormData((prev) => ({
      ...prev,
      latitude,
      longitude,
      address: `Selected Point (${latitude}, ${longitude})`,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please upload an image file (JPG, PNG, GIF, WEBP, BMP, or AVIF).');
      setFormData((prev) => ({ ...prev, photoUrl: '' }));
      e.target.value = '';
      return;
    }

    setErrorMsg('');
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, photoUrl: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');
    setSuccessMsg('');

    const payload = {
      userId: currentUser?.id || 1,
      userName: currentUser?.name || 'Citizen User',
      issueType: formData.issueType,
      description: formData.description,
      latitude: formData.latitude,
      longitude: formData.longitude,
      address: formData.address,
      photoUrl: formData.photoUrl || null,
      priority: formData.priority,
    };

    try {
      const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit complaint.');
      }

      const saved = await response.json();
      setSuccessMsg(`Complaint #CMP-${saved.id} submitted successfully! Priority auto-mapped to ${saved.priority}.`);

      setFormData({
        issueType: 'BLOCKED_DRAIN',
        description: '',
        latitude: 19.076,
        longitude: 72.8777,
        address: 'Greely Valley, Sector 4, City Zone',
        photoUrl: '',
        priority: AUTOMATIC_PRIORITY_MAP['BLOCKED_DRAIN'],
      });

      if (onSubmitSuccess) {
        setTimeout(() => onSubmitSuccess(saved), 1500);
      }
    } catch (err) {
      setErrorMsg(err.message || 'An error occurred while submitting.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="report-issue-container panel-card">
      <div className="form-header">
        <h2>📝 Report Urban Drainage Issue</h2>
        <p>Submit a location-tagged complaint directly to the Urban Drainage Department.</p>
      </div>

      {successMsg && <div className="alert-box success">✅ {successMsg}</div>}
      {errorMsg && <div className="alert-box error">⚠️ {errorMsg}</div>}

      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-row grid-2">
          <div className="form-group">
            <label htmlFor="issueType">Issue Type *</label>
            <select id="issueType" value={formData.issueType} onChange={(e) => handleIssueTypeChange(e.target.value)} required>
              {ISSUE_TYPES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="priority">
              Priority Level * <span className="auto-map-badge">⚡ Auto-Mapped</span>
            </label>
            <select id="priority" value={formData.priority} onChange={(e) => setFormData({ ...formData, priority: e.target.value })} required>
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
              <option value="EMERGENCY">Emergency</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Detailed Description *</label>
          <textarea
            id="description"
            rows="4"
            placeholder="Describe the drainage issue, severity, landmark, and any immediate hazards..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        <div className="location-section">
          <label className="section-label">📍 Complaint Location *</label>
          <div className="location-tabs">
            <button type="button" className={`location-tab-btn ${locationMode === 'CURRENT' ? 'active' : ''}`} onClick={() => setLocationMode('CURRENT')}>
              🌐 Use My Current Location
            </button>
            <button type="button" className={`location-tab-btn ${locationMode === 'MAP_PICKER' ? 'active' : ''}`} onClick={() => setLocationMode('MAP_PICKER')}>
              🗺️ Select on Custom Map
            </button>
            <button type="button" className={`location-tab-btn ${locationMode === 'MANUAL' ? 'active' : ''}`} onClick={() => setLocationMode('MANUAL')}>
              Enter Location Manually
            </button>
          </div>

          {locationMode === 'CURRENT' && (
            <div className="location-box">
              <button type="button" className="gps-btn" onClick={handleUseCurrentLocation} disabled={loadingGps}>
                {loadingGps ? '⌛ Acquiring GPS...' : '📡 Acquire My GPS Location'}
              </button>
              <p className="hint">Uses the browser geolocation API to fill the exact coordinates.</p>
            </div>
          )}

          {locationMode === 'MAP_PICKER' && (
            <div className="map-picker-box">
              <p className="hint">Click anywhere on the map to place the complaint marker.</p>
              <div className="custom-map-picker" onClick={handlePickerClick}>
                <svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} className="custom-picker-svg" preserveAspectRatio="xMidYMid meet">
                  <path d="M 20 70 L 200 40 L 350 60 L 470 40 L 600 70 L 760 90 L 800 470 L 610 500 L 420 490 L 220 470 L 80 430 L 20 70 Z" className="picker-area" />
                  <path d="M 120 110 L 150 110 L 190 170 L 330 170 L 370 220 L 360 360 L 260 360 L 210 300 L 130 300 L 90 240 Z" className="picker-block" />
                  <path d="M 480 140 L 640 140 L 690 220 L 700 360 L 560 420 L 500 330 Z" className="picker-block" />
                  <path d="M 140 260 L 300 260 L 300 410 L 200 410 Z" className="picker-block" />
                  <path d="M 420 80 L 420 210 L 700 210 L 700 80" className="picker-road" />
                  <path d="M 60 340 L 380 340 L 420 420 L 720 420" className="picker-road" />
                  <path d="M 180 150 L 180 430" className="picker-road secondary" />
                  <path d="M 560 120 L 560 420" className="picker-road secondary" />
                </svg>

                <div className="custom-picker-marker" style={{ left: markerPosition.x, top: markerPosition.y }}>
                  <span>📍</span>
                </div>
              </div>
            </div>
          )}

          {locationMode === 'MANUAL' && (
            <div className="location-box manual-location-box">
              <p className="hint">Enter the latitude, longitude, and nearest landmark or street address below.</p>
            </div>
          )}

          <div className="form-row grid-3 location-inputs">
            <div className="form-group">
              <label>Latitude</label>
              <input type="number" step="any" min="-90" max="90" value={formData.latitude} readOnly={locationMode !== 'MANUAL'} required onChange={(e) => setFormData((prev) => ({ ...prev, latitude: e.target.value === '' ? '' : Number(e.target.value) }))} />
            </div>
            <div className="form-group">
              <label>Longitude</label>
              <input type="number" step="any" min="-180" max="180" value={formData.longitude} readOnly={locationMode !== 'MANUAL'} required onChange={(e) => setFormData((prev) => ({ ...prev, longitude: e.target.value === '' ? '' : Number(e.target.value) }))} />
            </div>
            <div className="form-group">
              <label>Street Address / Landmark</label>
              <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="photo">Upload Photograph (Optional)</label>
          <input type="file" id="photo" accept="image/jpeg,image/png,image/gif,image/webp,image/bmp,image/avif,.jpg,.jpeg,.png,.gif,.webp,.bmp,.avif" onChange={handlePhotoUpload} />
          <p className="hint">Accepted formats: JPG, PNG, GIF, WEBP, BMP, and AVIF.</p>
          {formData.photoUrl && (
            <div className="photo-preview-box">
              <span>Photo Attached:</span>
              <img src={formData.photoUrl} alt="Complaint preview" className="photo-thumb" />
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? 'Submitting Complaint...' : '🚀 Submit Complaint to Department'}
        </button>
      </form>
    </div>
  );
}
````

### `frontend/src/components/SidebarNav.jsx`

``jsx
import React from 'react';

const ROLE_MENUS = {
  CITIZEN: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'report-issue', label: 'Report Drainage Issue', icon: '📝' },
    { id: 'my-complaints', label: 'My Complaints', icon: '📋' },
    { id: 'drainage-map', label: 'Drainage Map', icon: '🗺️' },
    { id: 'maintenance-updates', label: 'Maintenance Updates', icon: '🛠️' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'help-support', label: 'Help & Support', icon: '❓' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ],
  STAFF: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'complaint-management', label: 'Complaint Management', icon: '🗂️' },
    { id: 'assigned-complaints', label: 'Assigned Complaints', icon: '🎯' },
    { id: 'drainage-map', label: 'Drainage Map', icon: '🗺️' },
    { id: 'inspections', label: 'Inspections', icon: '🔍' },
    { id: 'maintenance-board', label: 'Maintenance', icon: '🛠️' },
    { id: 'emergency-monitoring', label: 'Emergency Issues', icon: '🚨' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ],
  ADMIN: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'complaint-management', label: 'Complaint Management', icon: '🗂️' },
    { id: 'infrastructure', label: 'Drainage Infrastructure', icon: '🏗️' },
    { id: 'drainage-map', label: 'Drainage Map', icon: '🗺️' },
    { id: 'staff-management', label: 'Staff Management', icon: '👥' },
    { id: 'maintenance-board', label: 'Maintenance Management', icon: '🛠️' },
    { id: 'emergency-monitoring', label: 'Emergency Monitoring', icon: '🚨' },
    { id: 'stormwater-analysis', label: 'Stormwater Analysis', icon: '🌊' },
    { id: 'reports-analytics', label: 'Reports & Analytics', icon: '📈' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ],
};

export default function SidebarNav({ currentRole, activeTab, onTabSelect }) {
  const menuItems = ROLE_MENUS[currentRole] || ROLE_MENUS.CITIZEN;

  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-icon">🌊</div>
        <div className="brand-copy">
          <h2>Urban Drainage</h2>
          <span>Department Portal</span>
        </div>
      </div>

      <div className="role-indicator">
        <span className="dot pulse" />
        <span>{currentRole.toLowerCase()} workspace</span>
      </div>

      <nav className="nav-menu" aria-label="Sidebar navigation">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onTabSelect(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
````

### `frontend/src/components/StormwaterAnalysis.jsx`

``jsx
import React, { useState } from 'react';

export default function StormwaterAnalysis() {
  // Runoff Form State
  const [runoffForm, setRunoffForm] = useState({
    area: 1000,
    rainfallIntensity: 50,
    runoffCoefficient: 0.7,
  });
  const [runoffResult, setRunoffResult] = useState(null);
  const [loadingRunoff, setLoadingRunoff] = useState(false);

  // Storage Form State
  const [storageForm, setStorageForm] = useState({
    length: 20,
    width: 10,
    depth: 4,
  });
  const [storageResult, setStorageResult] = useState(null);
  const [loadingStorage, setLoadingStorage] = useState(false);

  const [calcError, setCalcError] = useState('');

  const handleCalculateRunoff = async (e) => {
    e.preventDefault();
    setLoadingRunoff(true);
    setCalcError('');
    try {
      const res = await fetch('/api/runoff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          area: parseFloat(runoffForm.area),
          rainfallIntensity: parseFloat(runoffForm.rainfallIntensity),
          runoffCoefficient: parseFloat(runoffForm.runoffCoefficient),
        }),
      });

      if (!res.ok) throw new Error('Runoff calculation failed.');

      const data = await res.json();
      setRunoffResult(data.runoffVolume);
    } catch (err) {
      setCalcError(err.message);
    } finally {
      setLoadingRunoff(false);
    }
  };

  const handleCalculateStorage = async (e) => {
    e.preventDefault();
    setLoadingStorage(true);
    setCalcError('');
    try {
      const res = await fetch('/api/storage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          length: parseFloat(storageForm.length),
          width: parseFloat(storageForm.width),
          depth: parseFloat(storageForm.depth),
        }),
      });

      if (!res.ok) throw new Error('Storage calculation failed.');

      const data = await res.json();
      setStorageResult(data.storageCapacity);
    } catch (err) {
      setCalcError(err.message);
    } finally {
      setLoadingStorage(false);
    }
  };

  return (
    <div className="analysis-panel panel-card">
      <div className="panel-header">
        <div>
          <h2>🌊 Stormwater &amp; Hydrologic Analysis Tool</h2>
          <p>Engineering calculators powered by Spring Boot backend hydrologic APIs (`/api/runoff` &amp; `/api/storage`).</p>
        </div>
      </div>

      {calcError && <div className="alert-box error">⚠️ {calcError}</div>}

      <div className="analysis-grid">
        {/* Calculator 1: Stormwater Runoff Volume */}
        <div className="calc-card">
          <div className="calc-header">
            <h3>🌧️ Stormwater Runoff Volume Calculator</h3>
            <span>API: <code>POST /api/runoff</code></span>
          </div>
          <p className="formula-tag">Formula: Q = Area (A) × Rainfall Intensity (I) × Runoff Coeff (C)</p>

          <form onSubmit={handleCalculateRunoff}>
            <div className="form-group">
              <label>Catchment Area (m²)</label>
              <input
                type="number"
                step="any"
                required
                value={runoffForm.area}
                onChange={(e) => setRunoffForm({ ...runoffForm, area: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Rainfall Intensity (mm/hr)</label>
              <input
                type="number"
                step="any"
                required
                value={runoffForm.rainfallIntensity}
                onChange={(e) => setRunoffForm({ ...runoffForm, rainfallIntensity: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Runoff Coefficient (C: 0.1 to 1.0)</label>
              <input
                type="number"
                step="0.01"
                min="0.1"
                max="1.0"
                required
                value={runoffForm.runoffCoefficient}
                onChange={(e) => setRunoffForm({ ...runoffForm, runoffCoefficient: e.target.value })}
              />
              <small className="hint">0.7 - 0.9 for asphalt/concrete urban surfaces.</small>
            </div>

            <button type="submit" className="calc-btn" disabled={loadingRunoff}>
              {loadingRunoff ? 'Calculating...' : '⚡ Compute Peak Runoff Volume'}
            </button>
          </form>

          {runoffResult !== null && (
            <div className="calc-result-box">
              <span className="result-label">Computed Peak Runoff Volume:</span>
              <strong className="result-value">{runoffResult.toLocaleString()} m³/hr</strong>
            </div>
          )}
        </div>

        {/* Calculator 2: Basin Storage Capacity */}
        <div className="calc-card">
          <div className="calc-header">
            <h3>🏗️ Retention Basin Storage Capacity</h3>
            <span>API: <code>POST /api/storage</code></span>
          </div>
          <p className="formula-tag">Formula: Volume = Length (L) × Width (W) × Depth (D)</p>

          <form onSubmit={handleCalculateStorage}>
            <div className="form-group">
              <label>Basin Length (meters)</label>
              <input
                type="number"
                step="any"
                required
                value={storageForm.length}
                onChange={(e) => setStorageForm({ ...storageForm, length: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Basin Width (meters)</label>
              <input
                type="number"
                step="any"
                required
                value={storageForm.width}
                onChange={(e) => setStorageForm({ ...storageForm, width: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Basin Effective Depth (meters)</label>
              <input
                type="number"
                step="any"
                required
                value={storageForm.depth}
                onChange={(e) => setStorageForm({ ...storageForm, depth: e.target.value })}
              />
            </div>

            <button type="submit" className="calc-btn" disabled={loadingStorage}>
              {loadingStorage ? 'Calculating...' : '⚡ Compute Retention Capacity'}
            </button>
          </form>

          {storageResult !== null && (
            <div className="calc-result-box">
              <span className="result-label">Total Retention Storage Capacity:</span>
              <strong className="result-value">{storageResult.toLocaleString()} m³ (Liters: {(storageResult * 1000).toLocaleString()})</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
````

### `frontend/src/index.css`

``css
html, body, #root {
  margin: 0;
  min-height: 100%;
  width: 100%;
}

body {
  min-height: 100vh;
  background: #dfeaf3;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

* {
  box-sizing: border-box;
}

button, input {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}
````

### `frontend/src/main.jsx`

``jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
````

### `frontend/vite.config.js`

``javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
````

### `README.md`

``text
# urban-drainage-portal
````
