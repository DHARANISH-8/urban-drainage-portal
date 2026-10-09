import React from 'react';

export default function EmergencyMonitoring({ complaints = [], onSelectComplaint }) {
  const emergencies = complaints.filter(
    (c) => c.priority === 'EMERGENCY'
  );

  return (
    <div className="emergency-panel panel-card">
      <div className="panel-header emergency-header">
        <div className="header-alert-title">
          <span className="pulse-alert-dot" />
          <h2>🚨 Emergency Drainage Issue Monitoring Center</h2>
        </div>
        <p>Complaints submitted with emergency priority.</p>
      </div>

      <div className="emergency-grid">
        {emergencies.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">✅</span>
            <p>No emergency-priority complaints were found.</p>
          </div>
        ) : (
          emergencies.map((item) => (
            <div key={item.id} className="emergency-card">
              <div className="card-top">
                <span className="emerg-code">#CMP-{item.id}</span>
                <span className="emerg-badge">CRITICAL EMERGENCY</span>
              </div>

              <h3>{item.issueType?.replace('_', ' ')}</h3>
              {item.address && <p className="emerg-loc">📍 <strong>Location:</strong> {item.address}</p>}
              {(item.latitude != null || item.longitude != null) && (
                <p className="emerg-coords">
                  {item.latitude != null ? `Latitude: ${item.latitude}` : ''}
                  {item.latitude != null && item.longitude != null ? ' · ' : ''}
                  {item.longitude != null ? `Longitude: ${item.longitude}` : ''}
                </p>
              )}

              {item.description && <div className="emerg-desc">{item.description}</div>}

              <div className="emerg-meta">
                <span>Status: <strong className={`status-tag ${item.status?.toLowerCase()}`}>{item.status?.replace('_', ' ')}</strong></span>
                <span>Assigned: <strong>{item.assignedStaffName || 'Not assigned'}</strong></span>
              </div>

              <button
                type="button"
                className="emerg-action-btn"
                onClick={() => onSelectComplaint(item)}
              >
                🚨 Open Emergency Control &amp; Dispatch ➔
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
