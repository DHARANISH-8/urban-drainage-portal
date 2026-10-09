package com.urbandrainage.portal.service;

import com.urbandrainage.portal.dto.ComplaintRequestDTO;
import com.urbandrainage.portal.dto.DashboardStatsDTO;
import com.urbandrainage.portal.dto.StatusUpdateDTO;
import com.urbandrainage.portal.entity.DrainageComplaint;
import com.urbandrainage.portal.entity.DrainageInfrastructure;
import com.urbandrainage.portal.entity.User;
import com.urbandrainage.portal.repository.ComplaintRepository;
import com.urbandrainage.portal.repository.InfrastructureRepository;
import com.urbandrainage.portal.repository.UserRepository;
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
    private UserRepository userRepository;

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

        when(complaintRepository.save(any(DrainageComplaint.class))).thenAnswer(invocation -> {
            DrainageComplaint saved = invocation.getArgument(0);
            saved.setId(10L);
            return saved;
        });

        DrainageComplaint result = complaintService.createComplaint(dto);

        assertNotNull(result);
        assertEquals(10L, result.getId());
        assertEquals("BLOCKED_DRAIN", result.getIssueType());
        assertEquals("Drain blocked with trash", result.getDescription());
        assertEquals(19.07, result.getLatitude());
        assertEquals(72.87, result.getLongitude());
        assertEquals("Main St", result.getAddress());
        assertEquals(1L, result.getUserId());
        verify(complaintRepository, times(1)).save(any(DrainageComplaint.class));
        verify(notificationService, times(1)).createNotification(anyLong(), anyString(), anyString(), anyString());
    }

    @Test
    void createComplaintForDrain_shouldPreserveSubmittedLocation() {
        DrainageInfrastructure drain = new DrainageInfrastructure();
        drain.setId(23L);
        drain.setName("Main Road inlet");
        drain.setLatitude(19.08);
        drain.setLongitude(72.88);
        drain.setAddress("Main Road, Ward 12");
        ComplaintRequestDTO dto = new ComplaintRequestDTO(
                1L, "John Doe", "BLOCKED_DRAIN", "Blocked inlet", 1.0, 1.0,
                "Client supplied location", null, "HIGH", 23L
        );
        when(infrastructureRepository.findById(23L)).thenReturn(Optional.of(drain));
        when(complaintRepository.save(any(DrainageComplaint.class))).thenAnswer(invocation -> invocation.getArgument(0));

        DrainageComplaint saved = complaintService.createComplaint(dto);

        assertSame(drain, saved.getDrain());
        assertEquals(23L, saved.getDrainId());
        assertEquals(1.0, saved.getLatitude());
        assertEquals(1.0, saved.getLongitude());
        assertEquals("Client supplied location", saved.getAddress());
    }

    @Test
    void updateStatus_shouldUpdateAndNotify() {
        DrainageComplaint existing = new DrainageComplaint();
        existing.setId(5L);
        existing.setUserId(1L);
        existing.setStatus("ASSIGNED");
        existing.setAssignedStaffId(2L);
        User staff = new User();
        staff.setId(2L);
        staff.setRole("STAFF");
        when(userRepository.findById(2L)).thenReturn(Optional.of(staff));

        StatusUpdateDTO updateDTO = new StatusUpdateDTO(
                "IN_PROGRESS", "Inspection complete", "Cleaning started", "Work underway", "Resolution details");

        when(complaintRepository.findById(5L)).thenReturn(Optional.of(existing));
        when(complaintRepository.save(any(DrainageComplaint.class))).thenAnswer(i -> i.getArguments()[0]);

        DrainageComplaint result = complaintService.updateStatus(5L, updateDTO);

        assertEquals("IN_PROGRESS", result.getStatus());
        assertEquals("Inspection complete", result.getInspectionNotes());
        assertEquals("Cleaning started", result.getMaintenanceNotes());
        assertEquals("Work underway", result.getWorkProgress());
        assertEquals("Resolution details", result.getResolutionDetails());
        verify(notificationService, times(1)).createNotification(anyLong(), anyString(), anyString(), anyString());
    }

    @Test
    void assignStaff_shouldUseVerifiedStaffNameAndAssignComplaint() {
        DrainageComplaint existing = new DrainageComplaint();
        existing.setId(5L);
        existing.setUserId(1L);
        existing.setStatus("SUBMITTED");
        User staff = new User();
        staff.setId(2L);
        staff.setName("Verified Staff");
        staff.setRole("STAFF");

        when(complaintRepository.findById(5L)).thenReturn(Optional.of(existing));
        when(userRepository.findById(2L)).thenReturn(Optional.of(staff));
        when(complaintRepository.save(any(DrainageComplaint.class))).thenAnswer(i -> i.getArgument(0));

        DrainageComplaint result = complaintService.assignStaff(5L, 2L);

        assertEquals(2L, result.getAssignedStaffId());
        assertEquals("Verified Staff", result.getAssignedStaffName());
        assertEquals("ASSIGNED", result.getStatus());
    }

    @Test
    void updateStatus_shouldNotAdvanceWithoutStaffAssignment() {
        DrainageComplaint existing = new DrainageComplaint();
        existing.setId(5L);
        existing.setUserId(1L);
        existing.setStatus("SUBMITTED");
        when(complaintRepository.findById(5L)).thenReturn(Optional.of(existing));

        assertThrows(IllegalArgumentException.class,
                () -> complaintService.updateStatus(5L, new StatusUpdateDTO("IN_PROGRESS", null, null)));
        verify(complaintRepository, never()).save(any(DrainageComplaint.class));
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
