package com.urbandrainage.portal.service;

import com.urbandrainage.portal.dto.InfrastructureDTO;
import com.urbandrainage.portal.entity.DrainageInfrastructure;
import com.urbandrainage.portal.repository.InfrastructureRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InfrastructureService {

    private final InfrastructureRepository infrastructureRepository;

    public InfrastructureService(InfrastructureRepository infrastructureRepository) {
        this.infrastructureRepository = infrastructureRepository;
    }

    public List<DrainageInfrastructure> getAllInfrastructure() {
        return infrastructureRepository.findAll();
    }

    public Optional<DrainageInfrastructure> getInfrastructureById(Long id) {
        return infrastructureRepository.findById(id);
    }

    public DrainageInfrastructure createInfrastructure(InfrastructureDTO dto) {
        DrainageInfrastructure infra = new DrainageInfrastructure();
        infra.setName(dto.name());
        infra.setType(dto.type().toUpperCase());
        infra.setDescription(dto.description());
        infra.setLatitude(dto.latitude());
        infra.setLongitude(dto.longitude());
        infra.setAddress(dto.address());
        infra.setStatus(dto.status() != null ? dto.status().toUpperCase() : "OPERATIONAL");

        return infrastructureRepository.save(infra);
    }

    public DrainageInfrastructure updateInfrastructure(Long id, InfrastructureDTO dto) {
        DrainageInfrastructure infra = infrastructureRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Infrastructure asset not found with ID: " + id));

        infra.setName(dto.name());
        infra.setType(dto.type().toUpperCase());
        infra.setDescription(dto.description());
        infra.setLatitude(dto.latitude());
        infra.setLongitude(dto.longitude());
        infra.setAddress(dto.address());
        if (dto.status() != null) {
            infra.setStatus(dto.status().toUpperCase());
        }

        return infrastructureRepository.save(infra);
    }

    public void deleteInfrastructure(Long id) {
        infrastructureRepository.deleteById(id);
    }
}
