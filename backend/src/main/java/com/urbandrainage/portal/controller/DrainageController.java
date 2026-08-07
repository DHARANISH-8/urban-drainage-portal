package com.urbandrainage.portal.controller;

import com.urbandrainage.portal.dto.RunoffRequest;
import com.urbandrainage.portal.dto.StorageRequest;
import com.urbandrainage.portal.service.DrainageCalculationService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class DrainageController {

    private final DrainageCalculationService drainageCalculationService;

    public DrainageController(DrainageCalculationService drainageCalculationService) {
        this.drainageCalculationService = drainageCalculationService;
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
}
