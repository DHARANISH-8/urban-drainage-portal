import React, { useEffect, useMemo, useRef, useState } from 'react';
import { authorizedFetch } from '../api';

const MAP_WIDTH = 870;
const MAP_HEIGHT = 768;
const MAP_MIN_ZOOM = 0.35;
const MAP_MAX_ZOOM = 4;
const DEFAULT_ZOOM = 1.0;

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

// Precise road network traced matching Figma campus design
const roads = [
  { id: 'main-crossroad', d: 'M 35 557 H 870', type: 'main' },
  { id: 'west-road', d: 'M 271 198 V 624', type: 'main' },
  { id: 'north-road', d: 'M 484 70 V 768', type: 'main' },
  { id: 'east-road', d: 'M 708 557 V 768', type: 'main' },
  { id: 'academic-loop-top', d: 'M 271 198 H 484', type: 'main' },
  { id: 'academic-loop-bottom', d: 'M 271 557 H 484', type: 'main' },
  { id: 'inner-academic-link', d: 'M 271 293 H 484', type: 'secondary' },
  { id: 'mech-top-link', d: 'M 484 393 H 604', type: 'secondary' },
  { id: 'mech-bottom-link', d: 'M 484 464 H 604', type: 'secondary' },
  { id: 'east-wing-link', d: 'M 602 385 H 694 V 458', type: 'secondary' },
];

// Campus building layouts matching the Figma design reference
const buildings = [
  { id: 'main-ground', d: 'M 115 195 H 225 Q 255 195 255 225 V 365 Q 255 395 225 395 H 115 Q 85 395 85 365 V 225 Q 85 195 115 195 Z', type: 'ground' },
  { id: 'cricket-ground', x: 120, y: 415, width: 105, height: 135, type: 'ground' },
  { id: 'central-academic-block', x: 278, y: 203, width: 198, height: 345, type: 'academic' },
  { id: 'science-facility', x: 511, y: 296, width: 82, height: 73, type: 'white' },
  { id: 'mechanical-wing', d: 'M 500 392 H 589 V 421 H 604 V 457 H 589 V 465 H 500 Z', type: 'white' },
  { id: 'east-wing', d: 'M 605 386 H 689 V 457 H 605 V 431 H 589 V 404 H 605 Z', type: 'white' },
  { id: 'girls-hostels', x: 189, y: 622, width: 163, height: 145, type: 'white' },
  { id: 'boys-hostels', x: 691, y: 491, width: 163, height: 147, type: 'white' },
  { id: 'cafeteria-main', d: 'M 489 619 H 522 V 600 H 555 V 619 H 588 V 648 H 555 V 670 H 522 V 648 H 489 Z', type: 'white' },
  { id: 'cafeteria-w', x: 415, y: 622, width: 35, height: 26, type: 'white' },
  { id: 'cafeteria-e', x: 555, y: 622, width: 35, height: 26, type: 'white' },
  { id: 'court-w', x: 409, y: 663, width: 64, height: 47, type: 'white' },
  { id: 'court-e', x: 541, y: 670, width: 64, height: 47, type: 'white' },
];

const mapLabels = [
  { id: 'main-ground', x: 170, y: 295, label: 'MAIN GROUND' },
  { id: 'cricket-ground', x: 172, y: 475, label: 'CRICKET\nGROUND' },
  { id: 'ib', x: 319, y: 425, label: 'IB' },
  { id: 'as', x: 434, y: 425, label: 'AS' },
  { id: 'sf', x: 552, y: 335, label: 'SF' },
  { id: 'mech', x: 547, y: 420, label: 'MECH' },
  { id: 'boys-hostels', x: 773, y: 568, label: 'BOYS HOSTELS' },
  { id: 'girls-hostels', x: 270, y: 690, label: 'GIRLS HOSTELS' },
  { id: 'cafeteria', x: 538, y: 641, label: 'CAFETERIA' },
];

export default function DrainageMap({
  complaints = [],
  drains = [],
  token,
  selectedDrainId,
  currentRole,
  onSelectDrain,
  onReportDrain,
  onSelectComplaint,
}) {
  const viewportRef = useRef(null);
  const dragRef = useRef(null);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [complaintHistory, setComplaintHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState('');
  const [showComplaintHistory, setShowComplaintHistory] = useState(false);
  const [layers, setLayers] = useState({
    roads: true,
    buildings: true,
    drainage: true,
    labels: true,
  });
  const [showLayersPanel, setShowLayersPanel] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState({ x: 0, y: 0, zoom: DEFAULT_ZOOM });

  // Map each drain to a canvas point
  const mappedDrains = useMemo(() => {
    return drains.map((drain) => {
      const { x, y } = projectPoint(drain.latitude, drain.longitude);
      const isUnderMaintenance = drain.underMaintenance || drain.status === 'UNDER_MAINTENANCE';
      const isInactive = drain.status === 'INACTIVE';
      const hasEmergency = drain.latestComplaint?.priority === 'EMERGENCY';

      let statusBadge = '🟢';
      let statusClass = 'active';

      if (isInactive) {
        statusBadge = '⚪';
        statusClass = 'inactive';
      } else if (isUnderMaintenance) {
        statusBadge = hasEmergency ? '🔴' : '🟠';
        statusClass = 'maintenance';
      }

      return {
        id: `drain-${drain.id}`,
        drainId: drain.id,
        item: drain,
        x,
        y,
        drainCode: drain.drainCode || `DRN-${String(drain.id).padStart(3, '0')}`,
        statusBadge,
        statusClass,
        isUnderMaintenance,
        isInactive,
      };
    });
  }, [drains]);

  const filteredSearchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const query = searchTerm.toLowerCase();

    return mappedDrains.filter((point) => {
      const item = point.item || {};
      return `${point.drainCode} ${item.name || ''} ${item.location || ''} ${item.address || ''}`
        .toLowerCase()
        .includes(query);
    });
  }, [mappedDrains, searchTerm]);

  const clampView = (nextZoom = view.zoom, nextX = view.x, nextY = view.y) => {
    const width = viewportRef.current?.clientWidth || 1100;
    const height = viewportRef.current?.clientHeight || 680;
    const mapWidth = MAP_WIDTH * nextZoom;
    const mapHeight = MAP_HEIGHT * nextZoom;
    const minX = mapWidth > width ? width - mapWidth : (width - mapWidth) / 2;
    const maxX = mapWidth > width ? 0 : minX;
    const minY = mapHeight > height ? height - mapHeight : (height - mapHeight) / 2;
    const maxY = mapHeight > height ? 0 : minY;

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
    const fitZoom = clamp(Math.min(width / MAP_WIDTH, height / MAP_HEIGHT), MAP_MIN_ZOOM, MAP_MAX_ZOOM);
    setView(clampView(fitZoom, (width - MAP_WIDTH * fitZoom) / 2, (height - MAP_HEIGHT * fitZoom) / 2));
  }, []);

  const handleZoom = (direction) => {
    const factor = direction > 0 ? 1.2 : 0.82;
    const nextZoom = clamp(view.zoom * factor, MAP_MIN_ZOOM, MAP_MAX_ZOOM);
    const viewport = viewportRef.current;
    if (!viewport) return;

    const rect = viewport.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const worldX = (centerX - view.x) / view.zoom;
    const worldY = (centerY - view.y) / view.zoom;

    setView(clampView(nextZoom, centerX - worldX * nextZoom, centerY - worldY * nextZoom));
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
    if (event.target.closest('button')) return;
    event.currentTarget.setPointerCapture(event.pointerId);
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
    const fitZoom = clamp(Math.min(width / MAP_WIDTH, height / MAP_HEIGHT), MAP_MIN_ZOOM, MAP_MAX_ZOOM);
    setView(clampView(fitZoom, (width - MAP_WIDTH * fitZoom) / 2, (height - MAP_HEIGHT * fitZoom) / 2));
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
    const firstPoint = mappedDrains[0];
    if (!firstPoint) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    const centerX = viewport.clientWidth / 2;
    const centerY = viewport.clientHeight / 2;
    const nextZoom = 2.0;
    setView(clampView(nextZoom, centerX - firstPoint.x * nextZoom, centerY - firstPoint.y * nextZoom));
  };

  const handleMapClick = () => {
    setSelectedMarkerId(null);
    onSelectDrain?.(null);
  };

  useEffect(() => {
    if (selectedDrainId == null || !token) {
      setComplaintHistory([]);
      setHistoryError('');
      return undefined;
    }

    let isCurrent = true;
    setHistoryLoading(true);
    setHistoryError('');
    authorizedFetch(`/api/drains/${selectedDrainId}/complaints`, token)
      .then(async (response) => {
        if (!response.ok) throw new Error('Unable to load complaint history.');
        const history = await response.json();
        if (isCurrent) setComplaintHistory(history);
      })
      .catch((error) => {
        if (isCurrent) setHistoryError(error.message || 'Unable to load complaint history.');
      })
      .finally(() => {
        if (isCurrent) setHistoryLoading(false);
      });

    return () => { isCurrent = false; };
  }, [selectedDrainId, token]);

  const handleSearchSelect = (point) => {
    const viewport = viewportRef.current;
    if (!viewport || !point) return;

    const nextZoom = 2.2;
    const nextX = viewport.clientWidth / 2 - point.x * nextZoom;
    const nextY = viewport.clientHeight / 2 - point.y * nextZoom;
    setView(clampView(nextZoom, nextX, nextY));
    setSelectedMarkerId(point.id);
    setSearchTerm(point.drainCode);
    onSelectDrain?.(point.item);
  };

  const selectedDrain = drains.find((drain) => String(drain.id) === String(selectedDrainId));

  return (
    <div className="custom-map-panel">
      <div className="custom-map-toolbar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search drain ID (e.g. DRN-023) or location..."
            aria-label="Search map drains and locations"
          />
        </div>

        <div className="toolbar-actions">
          <button type="button" className="toolbar-button" onClick={() => setShowLayersPanel((prev) => !prev)}>
            ⚙️ Layers
          </button>
        </div>
      </div>

      {showLayersPanel && (
        <div className="map-layers-panel">
          {Object.entries(layers).map(([key, enabled]) => (
            <label key={key} className="layer-toggle">
              <input
                type="checkbox"
                checked={enabled}
                onChange={() => setLayers((prev) => ({ ...prev, [key]: !prev[key] }))}
              />
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
          onPointerDown={handleMouseDown}
          onPointerMove={handleMouseMove}
          onPointerUp={handleMouseUp}
          onPointerCancel={handleMouseUp}
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
              <rect x="0" y="0" width={MAP_WIDTH} height={MAP_HEIGHT} className="map-boundary" />

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

              {/* White gates / U-shaped structures matching Figma design */}
              {layers.buildings && (
                <>
                  <path className="map-gate-mark" d="M 460 30 H 480 V 50 H 495 V 30 H 515 V 90 H 495 V 70 H 480 V 90 H 460 Z" />
                  <path className="map-gate-mark" d="M 35 527 H 81 V 544 H 35 Z M 35 566 H 81 V 583 H 35 Z" />
                  {/* Central Academic block structures: IB/AS arch towers, central hall */}
                  <rect className="map-building-detail" x="303" y="318" width="32" height="183" rx="16" ry="16" />
                  <rect className="map-building-detail" x="418" y="318" width="32" height="183" rx="16" ry="16" />
                  <rect className="map-building-detail" x="345" y="437" width="60" height="63" />
                  <rect className="map-building-detail muted" x="335" y="496" width="80" height="6" />
                  <rect className="map-building-detail" x="330" y="513" width="90" height="31" />
                  <rect className="map-building-detail dark" x="523" y="422" width="48" height="18" />
                  <rect className="map-building-detail dark" x="623" y="412" width="48" height="18" />
                </>
              )}

              {layers.labels && mapLabels.map((label) => (
                <g key={label.id} className="map-campus-label">
                  <text x={label.x} y={label.y} textAnchor="middle" className="map-label-text">
                    {label.label.split('\n').map((line, index) => (
                      <tspan key={line} x={label.x} dy={index === 0 ? 0 : 18}>{line}</tspan>
                    ))}
                  </text>
                </g>
              ))}
            </svg>

            {/* Unique Drain Markers positioned over the map */}
            {mappedDrains.map((point) => {
              const isSelected = selectedDrainId === point.drainId || selectedMarkerId === point.id;
              return (
                <button
                  key={point.id}
                  type="button"
                  className={`figma-drain-symbol ${point.statusClass} ${isSelected ? 'selected' : ''}`}
                  style={{ left: point.x, top: point.y }}
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedMarkerId(point.id);
                    onSelectDrain?.(point.item);
                  }}
                  title={`Drain ${point.drainCode} - Status: ${point.item.status}`}
                  aria-label={`Drain ${point.drainCode}, status ${point.item.status}`}
                >
                  <span className="status-dot">{point.statusBadge}</span>
                  <div className="grate-icon">
                    <div className="grate-bars" />
                  </div>
                  <span className="drain-tag">{point.drainCode}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Drain Information Panel matching Figma requirement #3 & #7 */}
        {selectedDrain && (
          <aside className="drain-info-card" aria-label={`Drain ${selectedDrain.drainCode} Information`}>
            <div className="info-card-header">
              <div className="header-titles">
                <span className="drain-code-badge">{selectedDrain.drainCode}</span>
                <h3>{selectedDrain.name}</h3>
              </div>
              <button
                type="button"
                className="close-panel-btn"
                aria-label="Close drain information"
                onClick={() => {
                  setSelectedMarkerId(null);
                  onSelectDrain?.(null);
                }}
              >
                ✕
              </button>
            </div>

            <div className="info-section">
              <div className="info-row">
                <span className="info-label">Drain ID:</span>
                <span className="info-value highlight">{selectedDrain.drainCode}</span>
              </div>

              <div className="info-row">
                <span className="info-label">Location:</span>
                <span className="info-value">{selectedDrain.location || selectedDrain.address || 'Campus Main Drain'}</span>
              </div>

              <div className="info-row">
                <span className="info-label">Status:</span>
                <span className={`status-pill ${selectedDrain.underMaintenance ? 'maintenance' : selectedDrain.status === 'INACTIVE' ? 'inactive' : 'active'}`}>
                  {selectedDrain.underMaintenance ? 'UNDER MAINTENANCE' : selectedDrain.status?.replaceAll('_', ' ') || 'ACTIVE'}
                </span>
              </div>

              <div className="info-row">
                <span className="info-label">Previous Complaints:</span>
                <span className="info-value bold">{selectedDrain.complaintCount || 0}</span>
              </div>

              <div className="info-row">
                <span className="info-label">Last Complaint:</span>
                <span className="info-value">
                  {selectedDrain.latestComplaint?.createdAt
                    ? new Date(selectedDrain.latestComplaint.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
                    : 'None recorded'}
                </span>
              </div>

              <div className="info-row">
                <span className="info-label">Last Maintenance:</span>
                <span className="info-value">
                  {selectedDrain.lastMaintenanceAt
                    ? new Date(selectedDrain.lastMaintenanceAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
                    : 'Not recorded'}
                </span>
              </div>
            </div>

            {historyError && <p className="drain-history-error">⚠️ {historyError}</p>}

            <div className="panel-button-group">
              <button
                type="button"
                className="action-btn secondary"
                onClick={() => setShowComplaintHistory((visible) => !visible)}
              >
                {showComplaintHistory ? 'Hide Complaint History' : 'View Complaint History'}
              </button>

              <button
                type="button"
                className="action-btn primary"
                onClick={() => onReportDrain?.(selectedDrain)}
              >
                Report a Complaint
              </button>
            </div>

            {/* Complaint History view matching requirement #7 */}
            {showComplaintHistory && (
              <div className="complaint-history-container">
                <h4>Complaint History ({selectedDrain.drainCode})</h4>
                {historyLoading && <p className="history-hint">Loading history...</p>}
                {!historyLoading && complaintHistory.length === 0 && (
                  <p className="history-hint">No previous complaints recorded for this drain.</p>
                )}
                {!historyLoading && complaintHistory.length > 0 && (
                  <ol className="history-list">
                    {complaintHistory.map((item, index) => (
                      <li key={item.id} className="history-item">
                        <div className="history-item-top">
                          <span className="item-num">{index + 1}. {item.issueType?.replaceAll('_', ' ')}</span>
                          <span className={`item-status ${item.status === 'RESOLVED' ? 'resolved' : 'pending'}`}>
                            {item.status === 'RESOLVED' ? 'Resolved' : 'Under Maintenance'}
                          </span>
                        </div>
                        <div className="history-item-date">
                          Date: {item.createdAt ? new Date(item.createdAt).toLocaleDateString('en-GB') : 'Unavailable'}
                        </div>
                        {item.description && <p className="history-desc">{item.description}</p>}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            )}
          </aside>
        )}
      </div>

      {filteredSearchResults.length > 0 && (
        <div className="search-results-panel">
          {filteredSearchResults.slice(0, 6).map((point) => (
            <button
              key={point.id}
              type="button"
              className="search-result-item"
              onClick={() => handleSearchSelect(point)}
            >
              <span className="search-code">{point.drainCode}</span>
              <span className="search-name">{point.item.name}</span>
              <span className={`search-badge ${point.statusClass}`}>{point.item.status}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
