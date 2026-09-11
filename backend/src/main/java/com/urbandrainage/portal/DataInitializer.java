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
