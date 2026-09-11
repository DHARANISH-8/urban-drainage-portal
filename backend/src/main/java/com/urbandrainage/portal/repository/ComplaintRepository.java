package com.urbandrainage.portal.repository;

import com.urbandrainage.portal.entity.DrainageComplaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComplaintRepository extends JpaRepository<DrainageComplaint, Long> {
    List<DrainageComplaint> findByUserIdOrderByCreatedAtDesc(Long userId);
    List<DrainageComplaint> findByAssignedStaffIdOrderByCreatedAtDesc(Long assignedStaffId);
    List<DrainageComplaint> findByPriority(String priority);
    List<DrainageComplaint> findByStatus(String status);
    List<DrainageComplaint> findAllByOrderByCreatedAtDesc();
    long countByStatus(String status);
    long countByPriority(String priority);
}
