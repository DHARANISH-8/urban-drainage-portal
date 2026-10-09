package com.urbandrainage.portal.service;

import com.urbandrainage.portal.dto.DrainSummaryDTO;
import com.urbandrainage.portal.entity.DrainageComplaint;
import com.urbandrainage.portal.entity.DrainageInfrastructure;
import com.urbandrainage.portal.repository.ComplaintRepository;
import com.urbandrainage.portal.repository.InfrastructureRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class DrainService {
    private final InfrastructureRepository infrastructureRepository;
    private final ComplaintRepository complaintRepository;

    public DrainService(InfrastructureRepository infrastructureRepository, ComplaintRepository complaintRepository) {
        this.infrastructureRepository = infrastructureRepository;
        this.complaintRepository = complaintRepository;
    }

    public List<DrainSummaryDTO> getDrains() {
        List<DrainageInfrastructure> drains = infrastructureRepository.findAll(Sort.by("id"));
        assignMissingDrainCodes(drains);
        if (drains.isEmpty()) return List.of();

        List<Long> drainIds = drains.stream().map(DrainageInfrastructure::getId).toList();
        Map<Long, List<DrainageComplaint>> complaintsByDrain = complaintRepository
                .findByDrain_IdInOrderByCreatedAtDesc(drainIds).stream()
                .collect(Collectors.groupingBy(complaint -> complaint.getDrain().getId(), HashMap::new, Collectors.toList()));

        return drains.stream()
                .map(drain -> toSummary(drain, complaintsByDrain.getOrDefault(drain.getId(), List.of())))
                .toList();
    }

    public Optional<DrainSummaryDTO> getDrain(Long drainId) {
        return getDrains().stream().filter(drain -> drain.id().equals(drainId)).findFirst();
    }

    public Optional<List<DrainSummaryDTO.ComplaintSummary>> getComplaintHistory(Long drainId) {
        if (!infrastructureRepository.existsById(drainId)) return Optional.empty();
        return Optional.of(complaintRepository.findByDrain_IdOrderByCreatedAtDesc(drainId).stream()
                .map(this::toComplaintSummary)
                .toList());
    }

    private void assignMissingDrainCodes(List<DrainageInfrastructure> drains) {
        Set<String> usedCodes = drains.stream()
                .map(DrainageInfrastructure::getDrainCode)
                .filter(code -> code != null && !code.isBlank())
                .collect(Collectors.toCollection(HashSet::new));
        List<DrainageInfrastructure> changed = new ArrayList<>();
        int nextCode = 1;
        for (DrainageInfrastructure drain : drains) {
            if (drain.getDrainCode() != null && !drain.getDrainCode().isBlank()) continue;
            String code;
            do {
                code = "DRN-%03d".formatted(nextCode++);
            } while (usedCodes.contains(code));
            drain.setDrainCode(code);
            usedCodes.add(code);
            changed.add(drain);
        }
        if (!changed.isEmpty()) infrastructureRepository.saveAll(changed);
    }

    private DrainSummaryDTO toSummary(DrainageInfrastructure drain, List<DrainageComplaint> complaints) {
        boolean inactive = "INACTIVE".equalsIgnoreCase(drain.getStatus());
        boolean maintenanceStatus = "UNDER_REPAIR".equalsIgnoreCase(drain.getStatus())
                || "MAINTENANCE_REQUIRED".equalsIgnoreCase(drain.getStatus());
        boolean hasUnresolvedComplaint = complaints.stream().anyMatch(complaint ->
                !"RESOLVED".equalsIgnoreCase(complaint.getStatus()) && !"REJECTED".equalsIgnoreCase(complaint.getStatus()));
        boolean underMaintenance = !inactive && (maintenanceStatus || hasUnresolvedComplaint);
        String status = underMaintenance ? "UNDER_MAINTENANCE" : inactive ? "INACTIVE" : "ACTIVE";
        DrainSummaryDTO.ComplaintSummary latest = complaints.isEmpty() ? null : toComplaintSummary(complaints.get(0));

        return new DrainSummaryDTO(
                drain.getId(), drain.getDrainCode(), drain.getName(), drain.getAddress(), drain.getType(),
                drain.getLatitude(), drain.getLongitude(), status, !inactive && !underMaintenance,
                underMaintenance, complaints.size(), latest, drain.getLastMaintenanceAt()
        );
    }

    private DrainSummaryDTO.ComplaintSummary toComplaintSummary(DrainageComplaint complaint) {
        return new DrainSummaryDTO.ComplaintSummary(
                complaint.getId(), complaint.getIssueType(), complaint.getDescription(), complaint.getStatus(),
                complaint.getPriority(), complaint.getCreatedAt()
        );
    }
}
