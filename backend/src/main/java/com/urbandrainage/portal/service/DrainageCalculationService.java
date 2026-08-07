package com.urbandrainage.portal.service;

import org.springframework.stereotype.Service;

@Service
public class DrainageCalculationService {

    public double calculateRunoff(double area, double rainfallIntensity, double runoffCoefficient) {
        return area * rainfallIntensity * runoffCoefficient;
    }

    public double calculateStorageCapacity(double length, double width, double depth) {
        return length * width * depth;
    }
}
