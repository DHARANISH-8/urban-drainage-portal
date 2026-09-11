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
