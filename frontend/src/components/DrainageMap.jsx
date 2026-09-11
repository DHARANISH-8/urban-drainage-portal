import React, { useEffect, useMemo, useRef, useState } from 'react';

const MAP_WIDTH = 1200;
const MAP_HEIGHT = 900;
const MAP_MIN_ZOOM = 0.5;
const MAP_MAX_ZOOM = 4;
const DEFAULT_ZOOM = 1;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const projectPoint = (lat, lng) => {
  const minLat = 19.04;
  const maxLat = 19.1;
  const minLng = 72.84;
  const maxLng = 72.91;

  const x = ((lng - minLng) / (maxLng - minLng)) * MAP_WIDTH;
  const y = ((maxLat - lat) / (maxLat - minLat)) * MAP_HEIGHT;

  return {
    x: clamp(x, 20, MAP_WIDTH - 20),
    y: clamp(y, 20, MAP_HEIGHT - 20),
  };
};

const roads = [
  { id: 'main-1', d: 'M 108 144 L 335 150 L 510 216 L 720 216 L 860 256 L 1100 250', type: 'main' },
  { id: 'main-2', d: 'M 110 466 L 360 470 L 610 548 L 860 548 L 1075 520', type: 'main' },
  { id: 'main-3', d: 'M 270 110 L 270 318 L 530 318 L 530 622 L 452 824', type: 'secondary' },
  { id: 'main-4', d: 'M 686 110 L 686 420 L 916 420 L 916 780', type: 'secondary' },
  { id: 'main-5', d: 'M 372 670 L 372 812 L 760 812 L 760 678', type: 'secondary' },
  { id: 'minor-1', d: 'M 120 224 L 252 224 L 252 522', type: 'minor' },
  { id: 'minor-2', d: 'M 530 400 L 676 400 L 676 628', type: 'minor' },
  { id: 'minor-3', d: 'M 780 312 L 1018 312 L 1018 470', type: 'minor' },
  { id: 'minor-4', d: 'M 874 650 L 1070 650', type: 'minor' },
  { id: 'minor-5', d: 'M 210 698 L 360 698', type: 'minor' },
  { id: 'minor-6', d: 'M 575 238 L 575 360', type: 'minor' },
];

const buildings = [
  { id: 'b1', x: 70, y: 80, width: 162, height: 104, label: 'Gate' },
  { id: 'b2', x: 238, y: 70, width: 156, height: 118, label: 'School' },
  { id: 'b3', x: 520, y: 98, width: 146, height: 94, label: 'Office' },
  { id: 'b4', x: 864, y: 92, width: 190, height: 128, label: 'Plant' },
  { id: 'b5', x: 96, y: 260, width: 176, height: 122, label: 'Clinic' },
  { id: 'b6', x: 296, y: 332, width: 148, height: 116, label: 'Block A' },
  { id: 'b7', x: 544, y: 332, width: 168, height: 120, label: 'Block B' },
  { id: 'b8', x: 772, y: 330, width: 200, height: 118, label: 'Storage' },
  { id: 'b9', x: 88, y: 604, width: 170, height: 118, label: 'Garden' },
  { id: 'b10', x: 292, y: 642, width: 170, height: 124, label: 'Admin' },
  { id: 'b11', x: 526, y: 664, width: 170, height: 116, label: 'Works' },
  { id: 'b12', x: 772, y: 650, width: 220, height: 118, label: 'Yard' },
  { id: 'b13', x: 214, y: 175, width: 72, height: 42, label: '' },
  { id: 'b14', x: 634, y: 462, width: 82, height: 52, label: '' },
  { id: 'b15', x: 1028, y: 620, width: 80, height: 46, label: '' },
  { id: 'b16', x: 1012, y: 740, width: 86, height: 52, label: '' },
  { id: 'b17', x: 360, y: 500, width: 82, height: 52, label: '' },
  { id: 'b18', x: 870, y: 520, width: 80, height: 52, label: '' },
];

const drainagePaths = [
  { id: 'd1', d: 'M 206 242 L 356 242 L 426 298 L 612 298 L 714 378', status: 'good' },
  { id: 'd2', d: 'M 210 468 L 344 468 L 344 618 L 500 618 L 544 714', status: 'maintenance' },
  { id: 'd3', d: 'M 420 520 L 612 520 L 612 430 L 822 430', status: 'blocked' },
  { id: 'd4', d: 'M 704 474 L 704 690 L 932 690', status: 'critical' },
  { id: 'd5', d: 'M 870 232 L 988 232 L 988 430', status: 'good' },
  { id: 'd6', d: 'M 180 720 L 258 720 L 258 790', status: 'good' },
];

const mapLabels = [
  { id: 'lbl-1', x: 118, y: 440, label: 'Main Gate' },
  { id: 'lbl-2', x: 336, y: 214, label: 'South Road' },
  { id: 'lbl-3', x: 600, y: 282, label: 'Overflow Box' },
  { id: 'lbl-4', x: 824, y: 572, label: 'Pump Station' },
  { id: 'lbl-5', x: 330, y: 772, label: 'Stormwater Tank' },
  { id: 'lbl-6', x: 900, y: 772, label: 'Outlet' },
  { id: 'lbl-7', x: 680, y: 110, label: 'Main Gate' },
  { id: 'lbl-8', x: 1042, y: 188, label: 'Water Tank' },
  { id: 'lbl-9', x: 210, y: 112, label: 'School' },
  { id: 'lbl-10', x: 1052, y: 244, label: 'Service' },
  { id: 'lbl-11', x: 1048, y: 338, label: 'Workshop' },
  { id: 'lbl-12', x: 300, y: 604, label: 'Clinic' },
];

const getMarkerClass = (priority, status) => {
  if (status === 'RESOLVED') return 'green';
  if (priority === 'EMERGENCY') return 'red';
  if (priority === 'HIGH') return 'orange';
  if (status === 'ASSIGNED' || status === 'IN_PROGRESS') return 'blue';
  return 'yellow';
};

export default function DrainageMap({ complaints = [], infrastructure = [], onSelectComplaint }) {
  const viewportRef = useRef(null);
  const dragRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [priorityFilter, setPriorityFilter] = useState('ALL');
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [layers, setLayers] = useState({
    roads: true,
    buildings: true,
    drainage: true,
    complaints: true,
    labels: true,
    assets: true,
  });
  const [showLayersPanel, setShowLayersPanel] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState({ x: 0, y: 0, zoom: 1 });

  const visibleComplaints = useMemo(() => {
    return complaints.filter((item) => {
      if (!item.latitude || !item.longitude) return false;
      if (activeCategory === 'EMERGENCY' && item.priority !== 'EMERGENCY') return false;
      if (activeCategory === 'MAINTENANCE' && !['ASSIGNED', 'IN_PROGRESS'].includes(item.status)) return false;
      if (activeCategory === 'COMPLAINTS' && item.priority === 'LOW') return false;
      if (statusFilter !== 'ALL' && item.status !== statusFilter) return false;
      if (priorityFilter !== 'ALL' && item.priority !== priorityFilter) return false;
      return true;
    });
  }, [complaints, activeCategory, statusFilter, priorityFilter]);

  const visibleInfrastructure = useMemo(() => {
    if (activeCategory === 'COMPLAINTS' || activeCategory === 'EMERGENCY' || activeCategory === 'MAINTENANCE') {
      return [];
    }
    return infrastructure.filter((item) => item.latitude && item.longitude);
  }, [infrastructure, activeCategory]);

  const allPoints = useMemo(() => {
    const points = [];
    visibleComplaints.forEach((item) => {
      const { x, y } = projectPoint(item.latitude, item.longitude);
      points.push({
        id: `complaint-${item.id}`,
        type: 'complaint',
        item,
        x,
        y,
        label: item.issueType || 'Complaint',
        colorClass: getMarkerClass(item.priority, item.status),
      });
    });

    visibleInfrastructure.forEach((item) => {
      const { x, y } = projectPoint(item.latitude, item.longitude);
      points.push({
        id: `infra-${item.id}`,
        type: 'asset',
        item,
        x,
        y,
        label: item.name || 'Asset',
        colorClass: 'blue',
      });
    });

    return points;
  }, [visibleComplaints, visibleInfrastructure]);

  const filteredSearchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const query = searchTerm.toLowerCase();

    return allPoints.filter((point) => {
      const item = point.item || {};
      return `${point.label} ${item.address || ''} ${item.name || ''} ${item.issueType || ''}`
        .toLowerCase()
        .includes(query);
    });
  }, [allPoints, searchTerm]);

  const clampView = (nextZoom = view.zoom, nextX = view.x, nextY = view.y) => {
    const width = viewportRef.current?.clientWidth || 1100;
    const height = viewportRef.current?.clientHeight || 680;
    const minX = Math.min(0, width - MAP_WIDTH * nextZoom);
    const maxX = 0;
    const minY = Math.min(0, height - MAP_HEIGHT * nextZoom);
    const maxY = 0;

    return {
      x: clamp(nextX, minX, maxX),
      y: clamp(nextY, minY, maxY),
      zoom: clamp(nextZoom, MAP_MIN_ZOOM, MAP_MAX_ZOOM),
    };
  };

  useEffect(() => {
    if (!viewportRef.current) return;
    const width = viewportRef.current.clientWidth;
    const height = viewportRef.current.clientHeight;
    setView((prev) => clampView(prev.zoom, width / 2 - (MAP_WIDTH * prev.zoom) / 2, height / 2 - (MAP_HEIGHT * prev.zoom) / 2));
  }, []);

  const handleZoom = (direction) => {
    const factor = direction > 0 ? 1.18 : 0.85;
    const nextZoom = clamp(view.zoom * factor, MAP_MIN_ZOOM, MAP_MAX_ZOOM);
    const viewport = viewportRef.current;
    if (!viewport) return;

    const rect = viewport.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const worldX = (centerX - view.x) / view.zoom;
    const worldY = (centerY - view.y) / view.zoom;

    const nextX = centerX - worldX * nextZoom;
    const nextY = centerY - worldY * nextZoom;
    setView(clampView(nextZoom, nextX, nextY));
  };

  const handleWheel = (event) => {
    event.preventDefault();
    const rect = viewportRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const direction = event.deltaY < 0 ? 1 : -1;
    const factor = direction > 0 ? 1.15 : 0.87;
    const nextZoom = clamp(view.zoom * factor, MAP_MIN_ZOOM, MAP_MAX_ZOOM);
    const worldX = (mouseX - view.x) / view.zoom;
    const worldY = (mouseY - view.y) / view.zoom;

    setView(clampView(nextZoom, mouseX - worldX * nextZoom, mouseY - worldY * nextZoom));
  };

  const handleMouseDown = (event) => {
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: view.x,
      originY: view.y,
    };
  };

  const handleMouseMove = (event) => {
    if (!dragRef.current) return;
    const dx = event.clientX - dragRef.current.startX;
    const dy = event.clientY - dragRef.current.startY;
    setView(clampView(view.zoom, dragRef.current.originX + dx, dragRef.current.originY + dy));
  };

  const handleMouseUp = () => {
    dragRef.current = null;
  };

  const handleReset = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const width = viewport.clientWidth;
    const height = viewport.clientHeight;
    setView({
      x: width / 2 - MAP_WIDTH / 2,
      y: height / 2 - MAP_HEIGHT / 2,
      zoom: DEFAULT_ZOOM,
    });
  };

  const handleFullscreen = async () => {
    const el = viewportRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      await el.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  const handleLocate = () => {
    const firstMarker = allPoints[0];
    if (!firstMarker) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    const centerX = viewport.clientWidth / 2;
    const centerY = viewport.clientHeight / 2;
    const nextZoom = 2.1;
    const nextX = centerX - firstMarker.x * nextZoom;
    const nextY = centerY - firstMarker.y * nextZoom;
    setView(clampView(nextZoom, nextX, nextY));
  };

  const handleMapClick = (event) => {
    if (!viewportRef.current) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - view.x) / view.zoom;
    const y = (event.clientY - rect.top - view.y) / view.zoom;

    setSelectedLocation({ x: Math.round(x), y: Math.round(y) });
  };

  const handleSearchSelect = (point) => {
    const viewport = viewportRef.current;
    if (!viewport || !point) return;

    const nextZoom = 2.2;
    const nextX = viewport.clientWidth / 2 - point.x * nextZoom;
    const nextY = viewport.clientHeight / 2 - point.y * nextZoom;
    setView(clampView(nextZoom, nextX, nextY));
    setSelectedMarkerId(point.id);
    setSearchTerm(point.label);
  };

  const toggleLayer = (layer) => {
    setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  const selectedItem = allPoints.find((point) => point.id === selectedMarkerId);

  return (
    <div className="custom-map-panel">
      <div className="custom-map-toolbar">
        <div className="search-box">
          <span className="search-icon">🔎</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search location..."
            aria-label="Search map locations"
          />
        </div>

        <div className="toolbar-actions">
          <button type="button" className="toolbar-button" onClick={() => setShowLayersPanel((prev) => !prev)}>
            ☰ Layers
          </button>
        </div>
      </div>

      {showLayersPanel && (
        <div className="map-layers-panel">
          {Object.entries(layers).map(([key, enabled]) => (
            <label key={key} className="layer-toggle">
              <input type="checkbox" checked={enabled} onChange={() => toggleLayer(key)} />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          ))}
        </div>
      )}

      <div className="custom-map-wrap">
        <div className="custom-map-controls vertical">
          <button type="button" onClick={() => handleZoom(1)} aria-label="Zoom in">＋</button>
          <button type="button" onClick={() => handleZoom(-1)} aria-label="Zoom out">−</button>
          <button type="button" onClick={handleReset} aria-label="Reset view">⟳</button>
          <button type="button" onClick={handleFullscreen} aria-label="Fullscreen">⛶</button>
          <button type="button" onClick={handleLocate} aria-label="Center map">⌖</button>
        </div>

        <div
          ref={viewportRef}
          className="custom-map-viewport"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={handleMapClick}
        >
          <div
            className="custom-map-canvas"
            style={{
              width: MAP_WIDTH,
              height: MAP_HEIGHT,
              transform: `translate(${view.x}px, ${view.y}px) scale(${view.zoom})`,
              cursor: dragRef.current ? 'grabbing' : 'grab',
            }}
          >
            <svg className="custom-map-svg" viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} preserveAspectRatio="xMidYMid meet">
              <path d="M 40 120 L 160 80 L 330 100 L 420 60 L 610 90 L 760 130 L 980 110 L 1160 160 L 1160 770 L 950 840 L 760 820 L 620 700 L 390 760 L 180 690 L 70 580 L 40 120 Z" className="map-boundary" />

              {layers.roads && roads.map((road) => (
                <path key={road.id} d={road.d} className={`map-road ${road.type}`} />
              ))}

              {layers.buildings && buildings.map((building) => (
                <g key={building.id}>
                  <rect x={building.x} y={building.y} width={building.width} height={building.height} className="map-building" rx="6" />
                  <text x={building.x + building.width / 2} y={building.y + building.height / 2 + 4} textAnchor="middle" className="map-building-label">
                    {building.label}
                  </text>
                </g>
              ))}

              {layers.drainage && drainagePaths.map((line) => (
                <path key={line.id} d={line.d} className={`map-drain ${line.status}`} />
              ))}

              {layers.labels && mapLabels.map((label) => (
                <g key={label.id}>
                  <circle cx={label.x} cy={label.y} r="4" className="map-label-dot" />
                  <text x={label.x + 8} y={label.y + 4} className="map-label-text">{label.label}</text>
                </g>
              ))}
            </svg>

            {selectedLocation && (
              <div className="map-selected-location" style={{ left: selectedLocation.x, top: selectedLocation.y }}>
                <strong>Selected Location</strong>
                <span>X: {selectedLocation.x}</span>
                <span>Y: {selectedLocation.y}</span>
                <button type="button">Report Issue Here</button>
              </div>
            )}

            {allPoints.map((point) => (
              <button
                key={point.id}
                type="button"
                className={`map-marker ${point.colorClass} ${selectedMarkerId === point.id ? 'selected' : ''}`}
                style={{ left: point.x, top: point.y }}
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedMarkerId(point.id);
                  if (onSelectComplaint && point.type === 'complaint') onSelectComplaint(point.item);
                }}
                onMouseEnter={() => setSelectedMarkerId(point.id)}
                aria-label={point.label}
              >
                <span>{point.type === 'asset' ? '◉' : '•'}</span>
              </button>
            ))}

            {selectedItem && (
              <div className="map-popup-card" style={{ left: selectedItem.x + 18, top: selectedItem.y - 110 }}>
                <div className="popup-header-row">
                  <strong>{selectedItem.item?.issueType || selectedItem.item?.name || 'Location'}</strong>
                  <span className={`popup-badge ${selectedItem.colorClass}`}>{selectedItem.item?.priority || 'Asset'}</span>
                </div>
                <p>{selectedItem.item?.description || selectedItem.item?.address || 'Municipal infrastructure asset'}</p>
                <small>{selectedItem.item?.status || 'Live'}</small>
              </div>
            )}
          </div>
        </div>

        <div className="map-legend-box">
          <h4>Map Legend</h4>
          <div className="legend-row"><span className="legend-dot red" /> Critical Issue</div>
          <div className="legend-row"><span className="legend-dot orange" /> High Priority</div>
          <div className="legend-row"><span className="legend-dot yellow" /> Pending</div>
          <div className="legend-row"><span className="legend-dot blue" /> Assigned</div>
          <div className="legend-row"><span className="legend-dot green" /> Resolved</div>
          <div className="legend-row"><span className="legend-line drain" /> Main Drain</div>
          <div className="legend-row"><span className="legend-line road" /> Main Road</div>
        </div>
      </div>

      {filteredSearchResults.length > 0 && (
        <div className="search-results-panel">
          {filteredSearchResults.slice(0, 5).map((point) => (
            <button key={point.id} type="button" className="search-result-item" onClick={() => handleSearchSelect(point)}>
              {point.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
