import React, { useState } from 'react';

export default function MaintenanceBoard({ complaints = [], onSelectComplaint, onUpdateStatus }) {
  const activeMaintenance = complaints.filter(
    (c) => c.status === 'ASSIGNED' || c.status === 'IN_PROGRESS' || c.status === 'RESOLVED'
  );

  const [selectedId, setSelectedId] = useState(null);
  const [maintenanceNotes, setMaintenanceNotes] = useState('');
  const [workStatus, setWorkStatus] = useState('IN_PROGRESS');

  const selectedComplaint = complaints.find((c) => c.id === selectedId);

  const handleUpdateWork = async (e) => {
    e.preventDefault();
    if (!selectedId) return;
    await onUpdateStatus(selectedId, workStatus, selectedComplaint?.inspectionNotes, maintenanceNotes);
    setSelectedId(null);
    setMaintenanceNotes('');
  };

  return (
    <div className="maintenance-panel panel-card">
      <div className="panel-header">
        <div>
          <h2>🛠️ Drainage Maintenance Workboard</h2>
          <p>Track ongoing drain clearing, jetting, culvert repairs, and field inspections.</p>
        </div>
      </div>

      <div className="maintenance-grid">
        {activeMaintenance.map((item) => (
          <div key={item.id} className={`maintenance-card ${item.status?.toLowerCase()}`}>
            <div className="card-topline">
              <span className="code">#CMP-{item.id}</span>
              <span className={`priority-tag ${item.priority?.toLowerCase()}`}>{item.priority}</span>
            </div>

            <h3>{item.issueType?.replace('_', ' ')}</h3>
            <p className="loc">📍 {item.address}</p>

            <div className="assigned-bar">
              <span>👷 Staff: <strong>{item.assignedStaffName || 'Unassigned'}</strong></span>
            </div>

            {item.inspectionNotes && (
              <div className="field-note">
                <small>Inspection Note:</small>
                <p>{item.inspectionNotes}</p>
              </div>
            )}

            {item.maintenanceNotes && (
              <div className="field-note work-note">
                <small>Maintenance Note:</small>
                <p>{item.maintenanceNotes}</p>
              </div>
            )}

            <div className="card-footer">
              <span className={`status-pill ${item.status?.toLowerCase()}`}>{item.status?.replace('_', ' ')}</span>
              <button
                type="button"
                className="action-btn-sm"
                onClick={() => {
                  setSelectedId(item.id);
                  setWorkStatus(item.status);
                  setMaintenanceNotes(item.maintenanceNotes || '');
                }}
              >
                ✏️ Update Progress
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedComplaint && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Update Maintenance Work — #CMP-{selectedComplaint.id}</h2>
              <button type="button" className="close-btn" onClick={() => setSelectedId(null)}>✕</button>
            </div>
            <form onSubmit={handleUpdateWork} className="modal-form">
              <div className="form-group">
                <label>Issue Type &amp; Location</label>
                <p><strong>{selectedComplaint.issueType?.replace('_', ' ')}</strong> — {selectedComplaint.address}</p>
              </div>

              <div className="form-group">
                <label>Maintenance Work Status *</label>
                <select
                  value={workStatus}
                  onChange={(e) => setWorkStatus(e.target.value)}
                >
                  <option value="ASSIGNED">ASSIGNED (Pending Dispatch)</option>
                  <option value="IN_PROGRESS">IN PROGRESS (Crew Onsite)</option>
                  <option value="RESOLVED">RESOLVED (Restored &amp; Cleaned)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Progress / Completion Notes *</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Record equipment deployed (e.g., suction tanker, high-pressure jetter), volume cleared, or restoration completion..."
                  value={maintenanceNotes}
                  onChange={(e) => setMaintenanceNotes(e.target.value)}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="action-btn-secondary" onClick={() => setSelectedId(null)}>Cancel</button>
                <button type="submit" className="action-btn-success">Save &amp; Notify Citizen</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
