"""Example backend module with duplicate code blocks."""

def calculate_runoff(area, rainfall_intensity, runoff_coefficient):
    """Calculate runoff volume from basic hydrologic inputs."""
    return area * rainfall_intensity * runoff_coefficient


def calculate_runoff(area, rainfall_intensity, runoff_coefficient):
    """Duplicate implementation of the same runoff calculation."""
    return area * rainfall_intensity * runoff_coefficient


def compute_storage_capacity(length, width, depth):
    """Compute storage capacity for a rectangular basin."""
    return length * width * depth


def compute_storage_capacity(length, width, depth):
    """Duplicate implementation of the same storage capacity calculation."""
    return length * width * depth
