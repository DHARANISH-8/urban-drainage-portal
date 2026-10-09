package com.urbandrainage.portal.controller;

import com.urbandrainage.portal.dto.ComplaintRequestDTO;
import com.urbandrainage.portal.dto.DrainSummaryDTO;
import com.urbandrainage.portal.entity.DrainageComplaint;
import com.urbandrainage.portal.security.AuthenticatedUser;
import com.urbandrainage.portal.service.ComplaintService;
import com.urbandrainage.portal.service.DrainService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drains")
@CrossOrigin(origins = "*")
public class DrainController {
    private final DrainService drainService;
    private final ComplaintService complaintService;

    public DrainController(DrainService drainService, ComplaintService complaintService) {
        this.drainService = drainService;
        this.complaintService = complaintService;
    }

    @GetMapping
    public ResponseEntity<List<DrainSummaryDTO>> getDrains() {
        return ResponseEntity.ok(drainService.getDrains());
    }

    @GetMapping("/{drainId}")
    public ResponseEntity<DrainSummaryDTO> getDrain(@PathVariable Long drainId) {
        return drainService.getDrain(drainId).map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{drainId}/status")
    public ResponseEntity<DrainSummaryDTO> getDrainStatus(@PathVariable Long drainId) {
        return getDrain(drainId);
    }

    @GetMapping("/{drainId}/complaints")
    public ResponseEntity<List<DrainSummaryDTO.ComplaintSummary>> getComplaintHistory(@PathVariable Long drainId) {
        return drainService.getComplaintHistory(drainId).map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/{drainId}/complaints")
    public ResponseEntity<DrainageComplaint> createDrainComplaint(
            @PathVariable Long drainId, @Valid @RequestBody ComplaintRequestDTO dto,
            @RequestAttribute AuthenticatedUser authenticatedUser) {
        ComplaintRequestDTO authenticatedRequest = new ComplaintRequestDTO(
                authenticatedUser.id(), authenticatedUser.name(), dto.issueType(), dto.description(),
                dto.latitude(), dto.longitude(), dto.address(), dto.photoUrl(), dto.priority(), drainId);
        DrainageComplaint created = complaintService.createComplaint(authenticatedRequest, drainId);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
}
