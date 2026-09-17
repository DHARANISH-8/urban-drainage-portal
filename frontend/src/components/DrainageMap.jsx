import React, { useEffect, useMemo, useRef, useState } from 'react';

const MAP_WIDTH = 1200;
const MAP_HEIGHT = 1500;
const MAP_MIN_ZOOM = 0.5;
const MAP_MAX_ZOOM = 4;
// The complete campus is visible on first load; controls retain close inspection.
const DEFAULT_ZOOM = 0.78;

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

// Campus plan traced from the supplied reference: IB and AS blocks sit either
// side of the central pedestrian spine, with the auditorium and library below.
const roads = [
  { id: 'edge-left', d: 'M 80 0 L 118 900', type: 'main' }, { id: 'edge-right', d: 'M 1120 0 L 1150 900', type: 'main' },
  { id: 'spine-left', d: 'M 390 120 L 400 840', type: 'secondary' }, { id: 'spine-right', d: 'M 780 120 L 805 840', type: 'secondary' },
  { id: 'cross-1', d: 'M 120 330 L 1100 300', type: 'minor' }, { id: 'cross-2', d: 'M 130 510 L 1110 485', type: 'minor' },
  { id: 'cross-3', d: 'M 140 675 L 1120 645', type: 'minor' }, { id: 'library-road', d: 'M 290 815 L 805 800', type: 'secondary' },
  { id: 'south-road', d: 'M 80 1040 L 1140 1010 M 90 1140 L 800 1120 M 805 1305 L 1135 1285', type: 'main' },
  { id: 'south-spine', d: 'M 480 1010 L 490 1360 M 790 1010 L 810 1360', type: 'secondary' },
  { id: 'walk-1', d: 'M 345 235 L 435 235 M 750 225 L 835 225 M 350 420 L 440 420 M 760 410 L 850 410 M 355 600 L 445 600 M 770 590 L 860 590', type: 'walk' },
];

const buildings = [
  { id: 'northwest', d: 'M 170 72 H 478 V 105 H 465 V 184 H 178 V 120 H 165 Z' },
  { id: 'northeast', d: 'M 640 60 H 990 V 182 H 820 V 170 H 645 Z' },
  { id: 'ib-1', x: 185, y: 258, width: 175, height: 48 }, { id: 'ib-2', x: 182, y: 340, width: 182, height: 50 },
  { id: 'ib-3', x: 190, y: 450, width: 185, height: 48 }, { id: 'ib-4', x: 195, y: 530, width: 170, height: 46 },
  { id: 'ib-5', x: 205, y: 650, width: 165, height: 48 }, { id: 'ib-6', x: 210, y: 730, width: 170, height: 46 },
  { id: 'ib-east-1', x: 415, y: 248, width: 125, height: 48 }, { id: 'ib-east-2', x: 420, y: 320, width: 120, height: 74 },
  { id: 'ib-east-3', x: 430, y: 470, width: 116, height: 82 }, { id: 'ib-east-4', x: 430, y: 640, width: 118, height: 85 },
  { id: 'as-1', x: 675, y: 242, width: 140, height: 45 }, { id: 'as-2', x: 840, y: 236, width: 175, height: 50 },
  { id: 'as-3', x: 680, y: 325, width: 130, height: 52 }, { id: 'as-4', x: 845, y: 318, width: 175, height: 50 },
  { id: 'as-5', x: 690, y: 450, width: 135, height: 50 }, { id: 'as-6', x: 845, y: 445, width: 180, height: 50 },
  { id: 'as-7', x: 700, y: 625, width: 135, height: 55 }, { id: 'as-8', x: 850, y: 615, width: 185, height: 54 },
  { id: 'as-9', x: 710, y: 720, width: 130, height: 54 }, { id: 'as-10', x: 850, y: 710, width: 185, height: 52 },
  { id: 'auditorium', d: 'M 535 620 H 575 V 595 H 640 V 620 H 680 V 770 H 535 Z', type: 'landmark' },
  { id: 'auditorium-left', x: 440, y: 735, width: 105, height: 55, type: 'accent' }, { id: 'auditorium-right', x: 680, y: 735, width: 110, height: 55, type: 'accent' },
  { id: 'library', x: 430, y: 820, width: 330, height: 92, type: 'library' },
  { id: 'lab-a', x: 470, y: 296, width: 48, height: 34, type: 'service' }, { id: 'lab-b', x: 665, y: 286, width: 50, height: 34, type: 'service' },
  { id: 'lab-c', x: 475, y: 535, width: 48, height: 34, type: 'service' }, { id: 'lab-d', x: 670, y: 530, width: 48, height: 35, type: 'service' },
  // Continuation south of the library, matching the supplied hostel/sports plan.
  { id: 'parking', x: 425, y: 950, width: 145, height: 62, type: 'parking' },
  { id: 'medical', x: 175, y: 1085, width: 120, height: 46, type: 'small-building' },
  { id: 'narmadha', d: 'M 180 1170 H 340 V 1190 H 360 V 1240 H 335 V 1270 H 185 V 1245 H 165 V 1190 H 180 Z', type: 'hostel' },
  { id: 'ganga', d: 'M 380 1180 H 525 V 1165 H 565 V 1210 H 540 V 1270 H 385 V 1240 H 365 V 1200 H 380 Z', type: 'hostel' },
  { id: 'yamuna', d: 'M 715 1170 H 875 V 1190 H 905 V 1245 H 885 V 1270 H 730 V 1240 H 710 Z', type: 'hostel' },
  { id: 'kaveri', d: 'M 255 1300 H 430 V 1275 H 465 V 1340 H 420 V 1355 H 250 Z', type: 'hostel' },
  { id: 'bhavani', d: 'M 690 1295 H 850 V 1275 H 900 V 1345 H 875 V 1360 H 690 Z', type: 'hostel' },
  { id: 'girls-mess', d: 'M 535 1260 H 650 V 1280 H 680 V 1350 H 515 V 1280 H 535 Z', type: 'mess' },
  { id: 'basketball-left', x: 535, y: 1165, width: 45, height: 115, type: 'court' },
  { id: 'basketball-mid', x: 595, y: 1160, width: 70, height: 125, type: 'court' },
  { id: 'basketball-right', x: 680, y: 1165, width: 45, height: 115, type: 'court' },
  { id: 'cafeteria', d: 'M 880 1080 H 1085 V 1105 H 1110 V 1170 H 1055 V 1190 H 915 V 1170 H 860 V 1120 H 880 Z', type: 'cafeteria' },
  { id: 'court-1', x: 850, y: 1200, width: 65, height: 95, type: 'sports-court' },
  { id: 'court-2', x: 935, y: 1200, width: 70, height: 95, type: 'sports-court' },
  { id: 'court-3', x: 1025, y: 1200, width: 85, height: 95, type: 'sports-court' },
  { id: 'playground', x: 850, y: 1320, width: 260, height: 150, type: 'playground' },
];

const drainagePaths = [
  { id: 'd1', d: 'M 395 170 L 395 760 M 795 170 L 795 760', status: 'good' },
  { id: 'd2', d: 'M 155 510 L 1080 485', status: 'maintenance' },
  { id: 'd3', d: 'M 400 645 L 800 645', status: 'blocked' },
];

const mapLabels = [
  { id: 'special', x: 785, y: 130, label: 'Special\nLabs', kind: 'purple' },
  { id: 'ib', x: 330, y: 500, label: 'IB Block', kind: 'orange' },
  { id: 'as', x: 835, y: 500, label: 'AS Block', kind: 'orange' },
  { id: 'auditorium', x: 605, y: 770, label: 'Main\nAuditorium', kind: 'purple' },
  { id: 'library', x: 595, y: 875, label: 'Library', kind: 'red' },
  { id: 'parking', x: 500, y: 982, label: 'Parking\nlot', kind: 'blue' },
  { id: 'medical', x: 235, y: 1080, label: 'Medical\nCentre', kind: 'purple' },
  { id: 'narmadha', x: 245, y: 1220, label: 'Narmadha\nHostel', kind: 'red' },
  { id: 'ganga', x: 465, y: 1225, label: 'Ganga\nHostel', kind: 'purple' },
  { id: 'yamuna', x: 795, y: 1225, label: 'Yamuna\nHostel', kind: 'green' },
  { id: 'kaveri', x: 335, y: 1340, label: 'Kaveri\nHostel', kind: 'orange' },
  { id: 'bhavani', x: 790, y: 1340, label: 'Bhavani\nHostel', kind: 'purple' },
  { id: 'girls-mess', x: 600, y: 1340, label: 'Girls\nMess', kind: 'red' },
  { id: 'basketball', x: 630, y: 1210, label: 'Basket\nBall\nCourt', kind: 'blue' },
  { id: 'volleyball', x: 880, y: 1245, label: 'Volley\nBall\nCourt', kind: 'purple' },
  { id: 'tennis', x: 1065, y: 1245, label: 'Tennis\nCourts', kind: 'red' },
  { id: 'cafeteria', x: 980, y: 1125, label: 'Cafeteria', kind: 'green' },
  { id: 'playground', x: 980, y: 1400, label: 'Empty\nPlayground', kind: 'purple' },
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
  const [view, setView] = useState({ x: 0, y: 0, zoom: DEFAULT_ZOOM });

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
    setView(clampView(DEFAULT_ZOOM, width / 2 - (MAP_WIDTH * DEFAULT_ZOOM) / 2, height / 2 - (MAP_HEIGHT * DEFAULT_ZOOM) / 2));
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
    // A plain map click should only clear a selected issue; it must not expose
    // internal canvas X/Y coordinates to the user.
    setSelectedMarkerId(null);
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
              <rect x="78" y="0" width="1070" height="1500" className="map-boundary" />

              {layers.roads && roads.map((road) => (
                <path key={road.id} d={road.d} className={`map-road ${road.type}`} />
              ))}

              {layers.buildings && buildings.map((building) => (
                <g key={building.id}>
                  {building.d ? (
                    <path d={building.d} className={`map-building ${building.type || ''}`} />
                  ) : (
                    <rect x={building.x} y={building.y} width={building.width} height={building.height} className={`map-building ${building.type || ''}`} />
                  )}
                </g>
              ))}

              {layers.drainage && drainagePaths.map((line) => (
                <path key={line.id} d={line.d} className={`map-drain ${line.status}`} />
              ))}

              {layers.labels && mapLabels.map((label) => (
                <g key={label.id} className={`map-campus-label ${label.kind || ''}`}>
                  <text x={label.x} y={label.y} textAnchor="middle" className="map-label-text">
                    {label.label.split('\n').map((line, index) => <tspan key={line} x={label.x} dy={index === 0 ? 0 : 19}>{line}</tspan>)}
                  </text>
                </g>
              ))}
              {layers.labels && <>
                <g className="map-landmark-icon lab-icon" transform="translate(820 150)"><circle r="24" /><path d="M-10 -8h20v18h-20zM-5 -13h10M-6 1h12" /></g>
                <g className="map-landmark-icon lab-icon" transform="translate(470 665)"><circle r="24" /><path d="M-10 -8h20v18h-20zM-5 -13h10M-6 1h12" /></g>
                <g className="map-landmark-icon library-icon" transform="translate(595 850)"><circle r="25" /><path d="M-12 10h24M-9 8V-5M0 8V-5M9 8V-5M-14 -5L0-13L14-5" /></g>
                <g className="map-landmark-icon hostel-icon" transform="translate(245 1240)"><circle r="24" /><path d="M-13 5h26M-10 5v-10h20v10M-8 0h16" /></g>
                <g className="map-landmark-icon hostel-icon" transform="translate(420 1225)"><circle r="24" /><path d="M-13 5h26M-10 5v-10h20v10M-8 0h16" /></g>
                <g className="map-landmark-icon cafeteria-icon" transform="translate(980 1155)"><circle r="24" /><path d="M-5-12v24M4-12v10M9-12v10M4-2h5M-10-12v9c0 6 7 6 7 0v-9" /></g>
              </>}
            </svg>

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
