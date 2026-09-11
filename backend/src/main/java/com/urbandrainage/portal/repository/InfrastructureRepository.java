package com.urbandrainage.portal.repository;

import com.urbandrainage.portal.entity.DrainageInfrastructure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InfrastructureRepository extends JpaRepository<DrainageInfrastructure, Long> {
    List<DrainageInfrastructure> findByType(String type);
    List<DrainageInfrastructure> findByStatus(String status);
}
