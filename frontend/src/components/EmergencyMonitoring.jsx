import React from 'react';

export default function EmergencyMonitoring({ complaints = [], onSelectComplaint }) {
  const emergencies = complaints.filter(
    (c) => c.priority === 'EMERGENCY' || c.issueType === 'FLOODING' || c.priority === 'HIGH'
  );

  return (
    <div className="emergency-panel panel-card">
      <div className="panel-header emergency-header">
        <div className="header-alert-title">
          <span className="pulse-alert-dot" />
          <h2>🚨 Emergency Drainage Issue Monitoring Center</h2>
        </div>
        <p>Real-time monitoring of flash flooding, main channel overflows, and critical hazards.</p>
      </div>

      <div className="emergency-banner-box">
        <div className="banner-icon">⚠️</div>
        <div className="banner-content">
          <h4>Active Monsoon &amp; Dewatering Protocol</h4>
          <p>
            Emergency complaints automatically alert senior municipal staff. Dewatering pumps and emergency suction trucks are prioritized for these coordinates.
          </p>
        </div>
      </div>

      <div className="emergency-grid">
        {emergencies.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">✅</span>
            <p>No active emergency drainage alerts currently logged.</p>
          </div>
        ) : (
          emergencies.map((item) => (
            <div key={item.id} className="emergency-card">
              <div className="card-top">
                <span className="emerg-code">#CMP-{item.id}</span>
                <span className="emerg-badge">CRITICAL EMERGENCY</span>
              </div>

              <h3>{item.issueType?.replace('_', ' ')}</h3>
              <p className="emerg-loc">📍 <strong>Location:</strong> {item.address}</p>
              <p className="emerg-coords">GPS: {item.latitude}, {item.longitude}</p>

              <div className="emerg-desc">{item.description}</div>

              <div className="emerg-meta">
                <span>Status: <strong className={`status-tag ${item.status?.toLowerCase()}`}>{item.status?.replace('_', ' ')}</strong></span>
                <span>Assigned: <strong>{item.assignedStaffName || 'Emergency Response Unit'}</strong></span>
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
