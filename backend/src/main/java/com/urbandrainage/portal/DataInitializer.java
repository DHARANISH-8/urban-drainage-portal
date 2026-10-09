package com.urbandrainage.portal;

import com.urbandrainage.portal.entity.DrainageInfrastructure;
import com.urbandrainage.portal.repository.InfrastructureRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final InfrastructureRepository infrastructureRepository;

    public DataInitializer(InfrastructureRepository infrastructureRepository) {
        this.infrastructureRepository = infrastructureRepository;
    }

    @Override
    public void run(String... args) {
        if (infrastructureRepository.count() == 0) {
            seedInfrastructure();
        }
    }

    private void seedInfrastructure() {
        List<DrainageInfrastructure> drains = new java.util.ArrayList<>();

        Object[][] rawData = new Object[][] {
            {"Academic Loop North Inlet 1", "DRN-001", "STORM_DRAIN", "Academic Block North Road – Ward 12", 19.084531, 72.863011, "OPERATIONAL"},
            {"Academic Loop North Inlet 2", "DRN-002", "STORM_DRAIN", "Academic Block North Road – Ward 12", 19.084531, 72.866874, "OPERATIONAL"},
            {"Academic Loop North Inlet 3", "DRN-003", "STORM_DRAIN", "Academic Block North Road – Ward 12", 19.084531, 72.870736, "OPERATIONAL"},
            {"Academic Loop North Inlet 4", "DRN-004", "STORM_DRAIN", "Academic Block North Road – Ward 12", 19.084531, 72.874759, "OPERATIONAL"},
            {"IB Tower North Perimeter Drain", "DRN-005", "CURB_INLET", "IB Building North Corridor", 19.077109, 72.863011, "OPERATIONAL"},
            {"Central Spine North Cross Drain", "DRN-006", "BOX_CULVERT", "Central Pedestrian Spine", 19.077109, 72.866874, "OPERATIONAL"},
            {"AS Tower North Perimeter Drain", "DRN-007", "CURB_INLET", "AS Building North Corridor", 19.077109, 72.870736, "OPERATIONAL"},
            {"East Quad Storm Channel", "DRN-008", "DRAINAGE_CHANNEL", "Academic Quad East", 19.077109, 72.874759, "OPERATIONAL"},
            {"IB Building West Channel 1", "DRN-009", "STORM_DRAIN", "IB Building West Wing", 19.080156, 72.861805, "OPERATIONAL"},
            {"IB Building West Channel 2", "DRN-010", "STORM_DRAIN", "IB Building West Wing", 19.073438, 72.861805, "OPERATIONAL"},
            {"IB Building West Channel 3", "DRN-011", "STORM_DRAIN", "IB Building West Wing", 19.068984, 72.861805, "OPERATIONAL"},
            {"IB Building West Channel 4", "DRN-012", "STORM_DRAIN", "IB Building West Wing", 19.064375, 72.861805, "OPERATIONAL"},
            {"IB Building Southwest Collector", "DRN-013", "MANHOLE", "IB Building Southwest Perimeter", 19.059141, 72.861805, "OPERATIONAL"},
            {"AS Building East Channel 1", "DRN-014", "STORM_DRAIN", "AS Building East Wing", 19.080156, 72.878943, "OPERATIONAL"},
            {"AS Building East Channel 2", "DRN-015", "STORM_DRAIN", "AS Building East Wing", 19.073438, 72.878943, "OPERATIONAL"},
            {"AS Building East Channel 3", "DRN-016", "STORM_DRAIN", "AS Building East Wing", 19.068984, 72.878943, "OPERATIONAL"},
            {"AS Building East Channel 4", "DRN-017", "STORM_DRAIN", "AS Building East Wing", 19.064375, 72.878943, "OPERATIONAL"},
            {"AS Building Southeast Collector", "DRN-018", "MANHOLE", "AS Building Southeast Perimeter", 19.060859, 72.878943, "OPERATIONAL"},
            {"Science Facility North Inlet", "DRN-019", "CURB_INLET", "SF Block North Road", 19.077422, 72.882563, "OPERATIONAL"},
            {"Science Facility East Outlet", "DRN-020", "OUTLET", "SF Block East Perimeter", 19.075234, 72.887874, "OPERATIONAL"},
            {"Mechanical Wing West Drain", "DRN-021", "STORM_DRAIN", "MECH Block West Court", 19.070156, 72.880391, "OPERATIONAL"},
            {"Mechanical Wing East Drain", "DRN-022", "STORM_DRAIN", "MECH Block East Court", 19.070313, 72.888839, "OPERATIONAL"},
            {"Main East Road Box Culvert", "DRN-023", "BOX_CULVERT", "Main Road – Ward 12", 19.068984, 72.895356, "OPERATIONAL"},
            {"Mechanical Wing South Collector", "DRN-024", "MANHOLE", "MECH Block South Road", 19.063438, 72.879425, "OPERATIONAL"},
            {"East Wing South Outlet", "DRN-025", "OUTLET", "East Wing Drainage Line", 19.063672, 72.888598, "OPERATIONAL"},
            {"Girls Hostel Access Drain", "DRN-026", "STORM_DRAIN", "Girls Hostel North Perimeter Road", 19.053125, 72.861805, "OPERATIONAL"},
            {"Central Dewatering Station", "DRN-027", "PUMPING_STATION", "Central Spine Dewatering Junction", 19.056250, 72.878943, "OPERATIONAL"},
            {"Boys Hostel Main Channel", "DRN-028", "DRAINAGE_CHANNEL", "Boys Hostel Access Road", 19.056250, 72.889885, "OPERATIONAL"}
        };

        for (Object[] item : rawData) {
            DrainageInfrastructure inf = new DrainageInfrastructure();
            inf.setName((String) item[0]);
            inf.setDrainCode((String) item[1]);
            inf.setType((String) item[2]);
            inf.setAddress((String) item[3]);
            inf.setDescription("Municipal drainage asset " + item[1] + " serving campus catchment area.");
            inf.setLatitude((Double) item[4]);
            inf.setLongitude((Double) item[5]);
            inf.setStatus((String) item[6]);
            inf.setLastMaintenanceAt(java.time.LocalDateTime.now().minusDays(30));
            drains.add(inf);
        }

        infrastructureRepository.saveAll(drains);
    }

}
