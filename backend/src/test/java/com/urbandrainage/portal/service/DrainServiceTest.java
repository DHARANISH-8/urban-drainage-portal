package com.urbandrainage.portal.service;

import com.urbandrainage.portal.dto.DrainSummaryDTO;
import com.urbandrainage.portal.entity.DrainageComplaint;
import com.urbandrainage.portal.entity.DrainageInfrastructure;
import com.urbandrainage.portal.repository.ComplaintRepository;
import com.urbandrainage.portal.repository.InfrastructureRepository;
import org.junit.jupiter.api.Test;
import org.springframework.data.domain.Sort;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class DrainServiceTest {
    private final InfrastructureRepository infrastructureRepository = mock(InfrastructureRepository.class);
    private final ComplaintRepository complaintRepository = mock(ComplaintRepository.class);
    private final DrainService drainService = new DrainService(infrastructureRepository, complaintRepository);

    @Test
    void getDrainsAssignsPersistentCodesAndDerivesMaintenanceFromLinkedComplaints() {
        DrainageInfrastructure drain = new DrainageInfrastructure();
        drain.setId(23L);
        drain.setName("Main Road inlet");
        drain.setAddress("Ward 12");
        drain.setType("STORM_DRAIN");
        drain.setLatitude(19.08);
        drain.setLongitude(72.88);
        drain.setStatus("OPERATIONAL");

        DrainageComplaint complaint = new DrainageComplaint();
        complaint.setId(51L);
        complaint.setDrain(drain);
        complaint.setStatus("IN_PROGRESS");
        complaint.setIssueType("BLOCKED_DRAIN");

        when(infrastructureRepository.findAll(any(Sort.class))).thenReturn(List.of(drain));
        when(complaintRepository.findByDrain_IdInOrderByCreatedAtDesc(List.of(23L))).thenReturn(List.of(complaint));

        DrainSummaryDTO summary = drainService.getDrains().get(0);

        assertEquals("DRN-001", summary.drainCode());
        assertEquals("UNDER_MAINTENANCE", summary.status());
        assertFalse(summary.active());
        assertEquals(1, summary.complaintCount());
        assertEquals("IN_PROGRESS", summary.latestComplaint().status());
        verify(infrastructureRepository).saveAll(List.of(drain));
    }
}
