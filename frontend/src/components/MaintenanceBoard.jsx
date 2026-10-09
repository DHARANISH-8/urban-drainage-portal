import React, { useEffect, useState } from 'react';

export default function MaintenanceBoard({ complaints = [], onSelectComplaint, onUpdateStatus, currentUser, currentRole }) {
  const activeMaintenance = complaints.filter((complaint) => (
    ['ASSIGNED', 'IN_PROGRESS'].includes(complaint.status)
    && (currentRole === 'ADMIN' || complaint.assignedStaffId === currentUser?.id)
  ));
  const [selectedId, setSelectedId] = useState(null);
  const [workProgress, setWorkProgress] = useState('');
  const [resolutionDetails, setResolutionDetails] = useState('');
  const [workStatus, setWorkStatus] = useState('IN_PROGRESS');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const selectedComplaint = complaints.find((complaint) => complaint.id === selectedId);

  useEffect(() => {
    setWorkProgress(selectedComplaint?.workProgress || '');
    setResolutionDetails(selectedComplaint?.resolutionDetails || '');
    setWorkStatus(selectedComplaint?.status || 'IN_PROGRESS');
    setError('');
  }, [
    selectedComplaint?.id,
    selectedComplaint?.status,
    selectedComplaint?.workProgress,
    selectedComplaint?.resolutionDetails,
  ]);

  const handleUpdateWork = async (event) => {
    event.preventDefault();
    if (!selectedComplaint) return;
    setSaving(true);
    setError('');
    try {
      const saved = await onUpdateStatus(
        selectedComplaint.id,
        workStatus,
        selectedComplaint.inspectionNotes,
        selectedComplaint.maintenanceNotes,
        workProgress,
        resolutionDetails,
      );
      if (saved) {
        setSelectedId(null);
      } else {
        setError('Update was not saved. Check the error message and try again.');
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="maintenance-panel panel-card">
      <div className="panel-header">
        <div>
          <h2>Drainage Maintenance Workboard</h2>
          <p>Complaints assigned to you that are awaiting work or in progress.</p>
        </div>
      </div>

      {activeMaintenance.length === 0 ? (
        <div className="empty-state"><p>No complaints are currently assigned to you for maintenance.</p></div>
      ) : (
        <div className="maintenance-grid">
          {activeMaintenance.map((item) => (
            <div key={item.id} className={`maintenance-card ${item.status.toLowerCase()}`}>
              <div className="card-topline">
                <span className="code">#CMP-{item.id}</span>
                <span className={`priority-tag ${item.priority?.toLowerCase()}`}>{item.priority}</span>
              </div>

              <h3>{item.issueType?.replaceAll('_', ' ')}</h3>
              {item.description && <p>{item.description}</p>}
              {item.address && <p className="loc">{item.address}</p>}
              {item.createdAt && <p>Submitted: {new Date(item.createdAt).toLocaleString()}</p>}

              {item.inspectionNotes && <div className="field-note"><small>Inspection notes</small><p>{item.inspectionNotes}</p></div>}
              {item.workProgress && <div className="field-note work-note"><small>Work progress</small><p>{item.workProgress}</p></div>}
              {item.resolutionDetails && <div className="field-note"><small>Resolution details</small><p>{item.resolutionDetails}</p></div>}

              <div className="card-footer">
                <span className={`status-pill ${item.status.toLowerCase()}`}>{item.status.replaceAll('_', ' ')}</span>
                <button type="button" className="action-btn-sm" onClick={() => onSelectComplaint(item)}>View complaint</button>
                <button
                  type="button"
                  className="action-btn-sm"
                  onClick={() => setSelectedId(item.id)}
                >
                  Update work
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedComplaint && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Update work — #CMP-{selectedComplaint.id}</h2>
              <button type="button" className="close-btn" onClick={() => setSelectedId(null)} aria-label="Close work update">✕</button>
            </div>
            <form onSubmit={handleUpdateWork} className="modal-form">
              <div className="form-group">
                <label>Citizen description</label>
                <p>{selectedComplaint.description || 'Not provided'}</p>
              </div>
              {selectedComplaint.address && (
                <div className="form-group">
                  <label>Reported location</label>
                  <p>{selectedComplaint.address}</p>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="workStatus">Status</label>
                <select id="workStatus" value={workStatus} onChange={(event) => setWorkStatus(event.target.value)}>
                  <option value="ASSIGNED">Assigned</option>
                  <option value="IN_PROGRESS">In progress</option>
                  <option value="RESOLVED">Resolved</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="workProgress">Work progress</label>
                <textarea id="workProgress" rows="3" value={workProgress} onChange={(event) => setWorkProgress(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="resolutionDetails">Resolution details</label>
                <textarea id="resolutionDetails" rows="3" value={resolutionDetails} onChange={(event) => setResolutionDetails(event.target.value)} />
              </div>
              {error && <p className="alert-box error" role="alert">{error}</p>}
              <div className="modal-actions">
                <button type="button" className="action-btn-secondary" onClick={() => setSelectedId(null)}>Cancel</button>
                <button type="submit" className="action-btn-success" disabled={saving}>Save work update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
