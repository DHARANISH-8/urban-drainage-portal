package com.urbandrainage.portal.controller;

import com.urbandrainage.portal.dto.AssignmentDTO;
import com.urbandrainage.portal.dto.ComplaintRequestDTO;
import com.urbandrainage.portal.dto.DashboardStatsDTO;
import com.urbandrainage.portal.dto.StatusUpdateDTO;
import com.urbandrainage.portal.entity.DrainageComplaint;
import com.urbandrainage.portal.service.ComplaintService;
import com.urbandrainage.portal.security.AuthenticatedUser;
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
    public ResponseEntity<DrainageComplaint> createComplaint(@Valid @RequestBody ComplaintRequestDTO dto,
                                                               @RequestAttribute AuthenticatedUser authenticatedUser) {
        // Reporter identity comes from the authenticated session, never from the browser payload.
        dto = new ComplaintRequestDTO(authenticatedUser.id(), authenticatedUser.name(), dto.issueType(), dto.description(), dto.latitude(), dto.longitude(), dto.address(), dto.photoUrl(), dto.priority(), dto.drainId());
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
    public ResponseEntity<DrainageComplaint> getComplaintById(
            @PathVariable Long id, @RequestAttribute AuthenticatedUser authenticatedUser) {
        return complaintService.getComplaintById(id)
                .filter(complaint -> !"CITIZEN".equals(authenticatedUser.role())
                        || complaint.getUserId().equals(authenticatedUser.id()))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/assign")
    public ResponseEntity<DrainageComplaint> assignStaff(@PathVariable Long id, @Valid @RequestBody AssignmentDTO dto) {
        DrainageComplaint updated = complaintService.assignStaff(id, dto.staffId());
        return ResponseEntity.ok(updated);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<DrainageComplaint> updateStatus(
            @PathVariable Long id, @Valid @RequestBody StatusUpdateDTO dto,
            @RequestAttribute AuthenticatedUser authenticatedUser) {
        if ("STAFF".equals(authenticatedUser.role())
                && complaintService.getComplaintById(id)
                .filter(complaint -> authenticatedUser.id().equals(complaint.getAssignedStaffId()))
                .isEmpty()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
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
