import React, { useEffect, useMemo, useState } from 'react';
import { authorizedFetch } from '../api';

const ISSUE_TYPES = [
  { value: 'BLOCKED_DRAIN', label: 'Blocked Drain' },
  { value: 'DRAIN_OVERFLOW', label: 'Drain Overflow' },
  { value: 'WATERLOGGING', label: 'Waterlogging' },
  { value: 'DAMAGED_DRAIN', label: 'Damaged Drain' },
  { value: 'OPEN_DRAIN', label: 'Open Drain' },
  { value: 'GARBAGE_ACCUMULATION', label: 'Garbage Accumulation' },
  { value: 'DRAINAGE_LEAKAGE', label: 'Drainage Leakage' },
  { value: 'FLOODING', label: 'Flooding' },
  { value: 'MANHOLE_PROBLEM', label: 'Manhole Problem' },
  { value: 'OTHER', label: 'Other' },
];

const AUTOMATIC_PRIORITY_MAP = {
  FLOODING: 'EMERGENCY',
  DRAIN_OVERFLOW: 'HIGH',
  WATERLOGGING: 'HIGH',
  BLOCKED_DRAIN: 'HIGH',
  MANHOLE_PROBLEM: 'MEDIUM',
  OPEN_DRAIN: 'MEDIUM',
  DRAINAGE_LEAKAGE: 'MEDIUM',
  DAMAGED_DRAIN: 'MEDIUM',
  GARBAGE_ACCUMULATION: 'LOW',
  OTHER: 'LOW',
};

const MAP_WIDTH = 820;
const MAP_HEIGHT = 520;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const projectToLatLng = (x, y) => {
  const minLat = 19.04;
  const maxLat = 19.1;
  const minLng = 72.84;
  const maxLng = 72.91;

  const lat = maxLat - (y / MAP_HEIGHT) * (maxLat - minLat);
  const lng = minLng + (x / MAP_WIDTH) * (maxLng - minLng);

  return {
    latitude: Number(lat.toFixed(6)),
    longitude: Number(lng.toFixed(6)),
  };
};

const projectFromLatLng = (latitude, longitude) => {
  const minLat = 19.04;
  const maxLat = 19.1;
  const minLng = 72.84;
  const maxLng = 72.91;

  const x = ((longitude - minLng) / (maxLng - minLng)) * MAP_WIDTH;
  const y = ((maxLat - latitude) / (maxLat - minLat)) * MAP_HEIGHT;

  return {
    x: clamp(x, 10, MAP_WIDTH - 10),
    y: clamp(y, 10, MAP_HEIGHT - 10),
  };
};

export default function ReportIssue({ currentUser, token, selectedDrain, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    issueType: 'BLOCKED_DRAIN',
    description: '',
    latitude: selectedDrain?.latitude ?? 19.076,
    longitude: selectedDrain?.longitude ?? 72.8777,
    address: selectedDrain?.location || 'Greely Valley, Sector 4, City Zone',
    photoUrl: '',
    priority: AUTOMATIC_PRIORITY_MAP['BLOCKED_DRAIN'],
  });

  const [locationMode, setLocationMode] = useState('CURRENT');
  const [loadingGps, setLoadingGps] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!selectedDrain) return;
    setFormData((previous) => ({
      ...previous,
      latitude: selectedDrain.latitude,
      longitude: selectedDrain.longitude,
      address: selectedDrain.location || selectedDrain.name,
    }));
  }, [selectedDrain]);

  const markerPosition = useMemo(() => projectFromLatLng(formData.latitude, formData.longitude), [formData.latitude, formData.longitude]);

  const handleIssueTypeChange = (newType) => {
    const autoMappedPriority = AUTOMATIC_PRIORITY_MAP[newType] || 'MEDIUM';
    setFormData((prev) => ({
      ...prev,
      issueType: newType,
      priority: autoMappedPriority,
    }));
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setErrorMsg('Geolocation is not supported by your browser.');
      return;
    }

    setLoadingGps(true);
    setErrorMsg('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = parseFloat(position.coords.latitude.toFixed(6));
        const lng = parseFloat(position.coords.longitude.toFixed(6));

        setFormData((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lng,
          address: `GPS Location (${lat}, ${lng})`,
        }));
        setLoadingGps(false);
      },
      () => {
        setLoadingGps(false);
        setErrorMsg('Unable to retrieve GPS location. Please select the location manually on the custom map.');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handlePickerClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp((event.clientX - rect.left), 0, MAP_WIDTH);
    const y = clamp((event.clientY - rect.top), 0, MAP_HEIGHT);

    const { latitude, longitude } = projectToLatLng(x, y);

    setFormData((prev) => ({
      ...prev,
      latitude,
      longitude,
      address: `Selected Point (${latitude}, ${longitude})`,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please upload an image file (JPG, PNG, GIF, WEBP, BMP, or AVIF).');
      setFormData((prev) => ({ ...prev, photoUrl: '' }));
      e.target.value = '';
      return;
    }

    setErrorMsg('');
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, photoUrl: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');
    setSuccessMsg('');

    const payload = {
      userId: currentUser?.id || 1,
      userName: currentUser?.name || 'Citizen User',
      issueType: formData.issueType,
      description: formData.description,
      latitude: formData.latitude,
      longitude: formData.longitude,
      address: formData.address,
      photoUrl: formData.photoUrl || null,
      priority: formData.priority,
      drainId: selectedDrain?.id || null,
    };

    try {
      const response = await authorizedFetch(
        selectedDrain ? `/api/drains/${selectedDrain.id}/complaints` : '/api/complaints',
        token,
        {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit complaint.');
      }

      const saved = await response.json();
      setSuccessMsg(`Complaint #CMP-${saved.id} submitted successfully! Priority auto-mapped to ${saved.priority}.`);

      setFormData({
        issueType: 'BLOCKED_DRAIN',
        description: '',
        latitude: 19.076,
        longitude: 72.8777,
        address: 'Greely Valley, Sector 4, City Zone',
        photoUrl: '',
        priority: AUTOMATIC_PRIORITY_MAP['BLOCKED_DRAIN'],
      });

      if (onSubmitSuccess) {
        setTimeout(() => onSubmitSuccess(saved), 1500);
      }
    } catch (err) {
      setErrorMsg(err.message || 'An error occurred while submitting.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="report-issue-container panel-card">
      <div className="form-header">
        <h2>📝 Report Urban Drainage Issue</h2>
        <p>Submit a location-tagged complaint directly to the Urban Drainage Department.</p>
      </div>

      {successMsg && <div className="alert-box success">✅ {successMsg}</div>}
      {errorMsg && <div className="alert-box error">⚠️ {errorMsg}</div>}

      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-row grid-2">
          <div className="form-group">
            <label htmlFor="issueType">Issue Type *</label>
            <select id="issueType" value={formData.issueType} onChange={(e) => handleIssueTypeChange(e.target.value)} required>
              {ISSUE_TYPES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="priority">
              Priority Level * <span className="auto-map-badge">⚡ Auto-Mapped</span>
            </label>
            <select id="priority" value={formData.priority} onChange={(e) => setFormData({ ...formData, priority: e.target.value })} required>
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
              <option value="EMERGENCY">Emergency</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Detailed Description *</label>
          <textarea
            id="description"
            rows="4"
            placeholder="Describe the drainage issue, severity, landmark, and any immediate hazards..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        <div className="location-section">
          <label className="section-label">📍 Complaint Location *</label>
          {selectedDrain ? (
            <div className="selected-drain-association">
              <span>Selected drain</span>
              <strong>{selectedDrain.drainCode} · {selectedDrain.name}</strong>
              <p>{selectedDrain.location || 'Location not recorded'}</p>
              <small>The complaint will be saved to this drain automatically.</small>
            </div>
          ) : <>
          <div className="location-tabs">
            <button type="button" className={`location-tab-btn ${locationMode === 'CURRENT' ? 'active' : ''}`} onClick={() => setLocationMode('CURRENT')}>
              🌐 Use My Current Location
            </button>
            <button type="button" className={`location-tab-btn ${locationMode === 'MAP_PICKER' ? 'active' : ''}`} onClick={() => setLocationMode('MAP_PICKER')}>
              🗺️ Select on Custom Map
            </button>
            <button type="button" className={`location-tab-btn ${locationMode === 'MANUAL' ? 'active' : ''}`} onClick={() => setLocationMode('MANUAL')}>
              Enter Location Manually
            </button>
          </div>

          {locationMode === 'CURRENT' && (
            <div className="location-box">
              <button type="button" className="gps-btn" onClick={handleUseCurrentLocation} disabled={loadingGps}>
                {loadingGps ? '⌛ Acquiring GPS...' : '📡 Acquire My GPS Location'}
              </button>
              <p className="hint">Uses the browser geolocation API to fill the exact coordinates.</p>
            </div>
          )}

          {locationMode === 'MAP_PICKER' && (
            <div className="map-picker-box">
              <p className="hint">Click anywhere on the map to place the complaint marker.</p>
              <div className="custom-map-picker" onClick={handlePickerClick}>
                <svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} className="custom-picker-svg" preserveAspectRatio="xMidYMid meet">
                  <path d="M 20 70 L 200 40 L 350 60 L 470 40 L 600 70 L 760 90 L 800 470 L 610 500 L 420 490 L 220 470 L 80 430 L 20 70 Z" className="picker-area" />
                  <path d="M 120 110 L 150 110 L 190 170 L 330 170 L 370 220 L 360 360 L 260 360 L 210 300 L 130 300 L 90 240 Z" className="picker-block" />
                  <path d="M 480 140 L 640 140 L 690 220 L 700 360 L 560 420 L 500 330 Z" className="picker-block" />
                  <path d="M 140 260 L 300 260 L 300 410 L 200 410 Z" className="picker-block" />
                  <path d="M 420 80 L 420 210 L 700 210 L 700 80" className="picker-road" />
                  <path d="M 60 340 L 380 340 L 420 420 L 720 420" className="picker-road" />
                  <path d="M 180 150 L 180 430" className="picker-road secondary" />
                  <path d="M 560 120 L 560 420" className="picker-road secondary" />
                </svg>

                <div className="custom-picker-marker" style={{ left: markerPosition.x, top: markerPosition.y }}>
                  <span>📍</span>
                </div>
              </div>
            </div>
          )}

          {locationMode === 'MANUAL' && (
            <div className="location-box manual-location-box">
              <p className="hint">Enter the latitude, longitude, and nearest landmark or street address below.</p>
            </div>
          )}

          <div className="form-row grid-3 location-inputs">
            <div className="form-group">
              <label>Latitude</label>
              <input type="number" step="any" min="-90" max="90" value={formData.latitude} readOnly={locationMode !== 'MANUAL'} required onChange={(e) => setFormData((prev) => ({ ...prev, latitude: e.target.value === '' ? '' : Number(e.target.value) }))} />
            </div>
            <div className="form-group">
              <label>Longitude</label>
              <input type="number" step="any" min="-180" max="180" value={formData.longitude} readOnly={locationMode !== 'MANUAL'} required onChange={(e) => setFormData((prev) => ({ ...prev, longitude: e.target.value === '' ? '' : Number(e.target.value) }))} />
            </div>
            <div className="form-group">
              <label>Street Address / Landmark</label>
              <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required />
            </div>
          </div>
          </>}
        </div>

        <div className="form-group">
          <label htmlFor="photo">Upload Photograph (Optional)</label>
          <input type="file" id="photo" accept="image/jpeg,image/png,image/gif,image/webp,image/bmp,image/avif,.jpg,.jpeg,.png,.gif,.webp,.bmp,.avif" onChange={handlePhotoUpload} />
          <p className="hint">Accepted formats: JPG, PNG, GIF, WEBP, BMP, and AVIF.</p>
          {formData.photoUrl && (
            <div className="photo-preview-box">
              <span>Photo Attached:</span>
              <img src={formData.photoUrl} alt="Complaint preview" className="photo-thumb" />
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? 'Submitting Complaint...' : '🚀 Submit Complaint to Department'}
        </button>
      </form>
    </div>
  );
}
