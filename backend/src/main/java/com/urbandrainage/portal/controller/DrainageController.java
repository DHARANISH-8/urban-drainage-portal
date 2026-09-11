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
