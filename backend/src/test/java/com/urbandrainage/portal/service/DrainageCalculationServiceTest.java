package com.urbandrainage.portal.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class DrainageCalculationServiceTest {

    private final DrainageCalculationService service = new DrainageCalculationService();

    @Test
    void calculateRunoff_shouldReturnExpectedValue() {
        double result = service.calculateRunoff(1000, 50, 0.7);

        assertEquals(35000.0, result, 0.0001);
    }

    @Test
    void calculateStorageCapacity_shouldReturnExpectedValue() {
        double result = service.calculateStorageCapacity(10, 8, 5);

        assertEquals(400.0, result, 0.0001);
    }
}
