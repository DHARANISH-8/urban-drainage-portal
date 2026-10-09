package com.urbandrainage.portal;

import com.urbandrainage.portal.entity.DrainageComplaint;
import com.urbandrainage.portal.entity.DrainageInfrastructure;
import com.urbandrainage.portal.entity.Notification;
import com.urbandrainage.portal.entity.User;
import com.urbandrainage.portal.repository.ComplaintRepository;
import com.urbandrainage.portal.repository.InfrastructureRepository;
import com.urbandrainage.portal.repository.NotificationRepository;
import com.urbandrainage.portal.repository.UserRepository;
import com.urbandrainage.portal.service.AuthService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ComplaintRepository complaintRepository;
    private final InfrastructureRepository infrastructureRepository;
    private final NotificationRepository notificationRepository;
    private final AuthService authService;

    public DataInitializer(UserRepository userRepository,
                           ComplaintRepository complaintRepository,
                           InfrastructureRepository infrastructureRepository,
                           NotificationRepository notificationRepository,
                           AuthService authService) {
        this.userRepository = userRepository;
        this.complaintRepository = complaintRepository;
        this.infrastructureRepository = infrastructureRepository;
        this.notificationRepository = notificationRepository;
        this.authService = authService;
    }

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() == 0) {
            seedUsers();
        }
        ensureDemoCredentials();
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

    private void ensureDemoCredentials() {
        userRepository.findByEmail("john.citizen@city.gov").ifPresent(user -> setPasswordIfMissing(user, "Citizen@123"));
        userRepository.findByEmail("robert.vance@city.gov").ifPresent(user -> setPasswordIfMissing(user, "Staff@123"));
        userRepository.findByEmail("elena.rostova@city.gov").ifPresent(user -> setPasswordIfMissing(user, "Staff@123"));
        userRepository.findByEmail("admin.drainage@city.gov").ifPresent(user -> setPasswordIfMissing(user, "Admin@123"));
    }

    private void setPasswordIfMissing(User user, String password) {
        if (user.getPasswordHash() == null || user.getPasswordHash().isBlank()) {
            user.setPasswordHash(authService.encodePassword(password));
            userRepository.save(user);
        }
    }

    private void seedInfrastructure() {
        List<DrainageInfrastructure> drains = new java.util.ArrayList<>();

        Object[][] rawData = new Object[][] {
            {"Academic Loop North Inlet 1", "DRN-001", "STORM_DRAIN", "Academic Block North Road – Ward 12", 19.084531, 72.863011, "OPERATIONAL"},
            {"Academic Loop North Inlet 2", "DRN-002", "STORM_DRAIN", "Academic Block North Road – Ward 12", 19.084531, 72.866874, "OPERATIONAL"},
            {"Academic Loop North Inlet 3", "DRN-003", "STORM_DRAIN", "Academic Block North Road – Ward 12", 19.084531, 72.870736, "OPERATIONAL"},
            {"Academic Loop North Inlet 4", "DRN-004", "STORM_DRAIN", "Academic Block North Road – Ward 12", 19.084531, 72.874759, "OPERATIONAL"},
            {"IB Tower North Perimeter Drain", "DRN-005", "CURB_INLET", "IB Building North Corridor", 19.077109, 72.863011, "OPERATIONAL"},
            {"Central Spine North Cross Drain", "DRN-006", "BOX_CULVERT", "Central Pedestrian Spine", 19.077109, 72.866874, "OPERATIONAL"},
            {"AS Tower North Perimeter Drain", "DRN-007", "CURB_INLET", "AS Building North Corridor", 19.077109, 72.870736, "OPERATIONAL"},
            {"East Quad Storm Channel", "DRN-008", "DRAINAGE_CHANNEL", "Academic Quad East", 19.077109, 72.874759, "OPERATIONAL"},
            {"IB Building West Channel 1", "DRN-009", "STORM_DRAIN", "IB Building West Wing", 19.080156, 72.861805, "OPERATIONAL"},
            {"IB Building West Channel 2", "DRN-010", "STORM_DRAIN", "IB Building West Wing", 19.073438, 72.861805, "OPERATIONAL"},
            {"IB Building West Channel 3", "DRN-011", "STORM_DRAIN", "IB Building West Wing", 19.068984, 72.861805, "OPERATIONAL"},
            {"IB Building West Channel 4", "DRN-012", "STORM_DRAIN", "IB Building West Wing", 19.064375, 72.861805, "OPERATIONAL"},
            {"IB Building Southwest Collector", "DRN-013", "MANHOLE", "IB Building Southwest Perimeter", 19.059141, 72.861805, "OPERATIONAL"},
            {"AS Building East Channel 1", "DRN-014", "STORM_DRAIN", "AS Building East Wing", 19.080156, 72.878943, "OPERATIONAL"},
            {"AS Building East Channel 2", "DRN-015", "STORM_DRAIN", "AS Building East Wing", 19.073438, 72.878943, "OPERATIONAL"},
            {"AS Building East Channel 3", "DRN-016", "STORM_DRAIN", "AS Building East Wing", 19.068984, 72.878943, "OPERATIONAL"},
            {"AS Building East Channel 4", "DRN-017", "STORM_DRAIN", "AS Building East Wing", 19.064375, 72.878943, "OPERATIONAL"},
            {"AS Building Southeast Collector", "DRN-018", "MANHOLE", "AS Building Southeast Perimeter", 19.060859, 72.878943, "OPERATIONAL"},
            {"Science Facility North Inlet", "DRN-019", "CURB_INLET", "SF Block North Road", 19.077422, 72.882563, "OPERATIONAL"},
            {"Science Facility East Outlet", "DRN-020", "OUTLET", "SF Block East Perimeter", 19.075234, 72.887874, "OPERATIONAL"},
            {"Mechanical Wing West Drain", "DRN-021", "STORM_DRAIN", "MECH Block West Court", 19.070156, 72.880391, "OPERATIONAL"},
            {"Mechanical Wing East Drain", "DRN-022", "STORM_DRAIN", "MECH Block East Court", 19.070313, 72.888839, "OPERATIONAL"},
            {"Main East Road Box Culvert", "DRN-023", "BOX_CULVERT", "Main Road – Ward 12", 19.068984, 72.895356, "OPERATIONAL"},
            {"Mechanical Wing South Collector", "DRN-024", "MANHOLE", "MECH Block South Road", 19.063438, 72.879425, "OPERATIONAL"},
            {"East Wing South Outlet", "DRN-025", "OUTLET", "East Wing Drainage Line", 19.063672, 72.888598, "OPERATIONAL"},
            {"Girls Hostel Access Drain", "DRN-026", "STORM_DRAIN", "Girls Hostel North Perimeter Road", 19.053125, 72.861805, "OPERATIONAL"},
            {"Central Dewatering Station", "DRN-027", "PUMPING_STATION", "Central Spine Dewatering Junction", 19.056250, 72.878943, "OPERATIONAL"},
            {"Boys Hostel Main Channel", "DRN-028", "DRAINAGE_CHANNEL", "Boys Hostel Access Road", 19.056250, 72.889885, "OPERATIONAL"}
        };

        for (Object[] item : rawData) {
            DrainageInfrastructure inf = new DrainageInfrastructure();
            inf.setName((String) item[0]);
            inf.setDrainCode((String) item[1]);
            inf.setType((String) item[2]);
            inf.setAddress((String) item[3]);
            inf.setDescription("Municipal drainage asset " + item[1] + " serving campus catchment area.");
            inf.setLatitude((Double) item[4]);
            inf.setLongitude((Double) item[5]);
            inf.setStatus((String) item[6]);
            inf.setLastMaintenanceAt(java.time.LocalDateTime.now().minusDays(30));
            drains.add(inf);
        }

        infrastructureRepository.saveAll(drains);
    }

    private void seedComplaints() {
        List<DrainageInfrastructure> drains = infrastructureRepository.findAll();
        java.util.Map<String, DrainageInfrastructure> drainMap = drains.stream()
                .filter(d -> d.getDrainCode() != null)
                .collect(java.util.stream.Collectors.toMap(DrainageInfrastructure::getDrainCode, d -> d));

        DrainageInfrastructure drn023 = drainMap.get("DRN-023");
        DrainageInfrastructure drn004 = drainMap.get("DRN-004");
        DrainageInfrastructure drn002 = drainMap.get("DRN-002");

        List<DrainageComplaint> list = new java.util.ArrayList<>();

        if (drn023 != null) {
            DrainageComplaint c1 = new DrainageComplaint();
            c1.setUserId(1L);
            c1.setUserName("John Doe");
            c1.setIssueType("BLOCKED_DRAIN");
            c1.setDescription("Heavy siltation and plastic debris blocking the inlet.");
            c1.setLatitude(drn023.getLatitude());
            c1.setLongitude(drn023.getLongitude());
            c1.setAddress(drn023.getAddress());
            c1.setPriority("HIGH");
            c1.setStatus("RESOLVED");
            c1.setDrain(drn023);
            c1.setCreatedAt(java.time.LocalDateTime.now().minusDays(60));
            list.add(c1);

            DrainageComplaint c2 = new DrainageComplaint();
            c2.setUserId(1L);
            c2.setUserName("John Doe");
            c2.setIssueType("DRAIN_OVERFLOW");
            c2.setDescription("Overflow from secondary roadside channel into plaza.");
            c2.setLatitude(drn023.getLatitude());
            c2.setLongitude(drn023.getLongitude());
            c2.setAddress(drn023.getAddress());
            c2.setPriority("HIGH");
            c2.setStatus("RESOLVED");
            c2.setDrain(drn023);
            c2.setCreatedAt(java.time.LocalDateTime.now().minusDays(45));
            list.add(c2);

            DrainageComplaint c3 = new DrainageComplaint();
            c3.setUserId(1L);
            c3.setUserName("John Doe");
            c3.setIssueType("WATERLOGGING");
            c3.setDescription("Water stagnation on road edge during rainfall.");
            c3.setLatitude(drn023.getLatitude());
            c3.setLongitude(drn023.getLongitude());
            c3.setAddress(drn023.getAddress());
            c3.setPriority("MEDIUM");
            c3.setStatus("RESOLVED");
            c3.setDrain(drn023);
            c3.setCreatedAt(java.time.LocalDateTime.now().minusDays(25));
            list.add(c3);

            DrainageComplaint c4 = new DrainageComplaint();
            c4.setUserId(1L);
            c4.setUserName("John Doe");
            c4.setIssueType("BLOCKED_DRAIN");
            c4.setDescription("Clogging caused by fallen leaves and silt.");
            c4.setLatitude(drn023.getLatitude());
            c4.setLongitude(drn023.getLongitude());
            c4.setAddress(drn023.getAddress());
            c4.setPriority("HIGH");
            c4.setStatus("IN_PROGRESS");
            c4.setDrain(drn023);
            c4.setAssignedStaffId(2L);
            c4.setAssignedStaffName("Robert Vance");
            c4.setCreatedAt(java.time.LocalDateTime.now().minusDays(5));
            list.add(c4);
        }

        if (drn004 != null) {
            DrainageComplaint c = new DrainageComplaint();
            c.setUserId(1L);
            c.setUserName("John Doe");
            c.setIssueType("FLOODING");
            c.setDescription("Severe monsoon flooding across 200m section near academic block.");
            c.setLatitude(drn004.getLatitude());
            c.setLongitude(drn004.getLongitude());
            c.setAddress(drn004.getAddress());
            c.setPriority("EMERGENCY");
            c.setStatus("ASSIGNED");
            c.setDrain(drn004);
            c.setAssignedStaffId(3L);
            c.setAssignedStaffName("Elena Rostova");
            c.setCreatedAt(java.time.LocalDateTime.now().minusDays(2));
            list.add(c);
        }

        if (drn002 != null) {
            DrainageComplaint c = new DrainageComplaint();
            c.setUserId(1L);
            c.setUserName("John Doe");
            c.setIssueType("DRAIN_OVERFLOW");
            c.setDescription("Water overflowing from channel curb inlet.");
            c.setLatitude(drn002.getLatitude());
            c.setLongitude(drn002.getLongitude());
            c.setAddress(drn002.getAddress());
            c.setPriority("HIGH");
            c.setStatus("UNDER_REVIEW");
            c.setDrain(drn002);
            c.setCreatedAt(java.time.LocalDateTime.now().minusDays(1));
            list.add(c);
        }

        complaintRepository.saveAll(list);
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
