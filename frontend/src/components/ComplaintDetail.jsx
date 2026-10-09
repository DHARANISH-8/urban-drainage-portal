import React, { useState } from 'react';

const STAGE_ORDER = ['SUBMITTED', 'UNDER_REVIEW', 'ASSIGNED', 'IN_PROGRESS', 'RESOLVED'];

export default function ComplaintDetail({ complaint, staffList = [], currentRole, onClose, onUpdateStatus, onAssignStaff }) {
  if (!complaint) return null;

  const [selectedStaffId, setSelectedStaffId] = useState(complaint.assignedStaffId || '');
  const [newStatus, setNewStatus] = useState(complaint.status || 'SUBMITTED');
  const [inspectionNotes, setInspectionNotes] = useState(complaint.inspectionNotes || '');
  const [maintenanceNotes, setMaintenanceNotes] = useState(complaint.maintenanceNotes || '');
  const [updating, setUpdating] = useState(false);

  const currentStageIndex = STAGE_ORDER.indexOf(complaint.status);

  const handleAssign = async () => {
    if (!selectedStaffId) return;
    setUpdating(true);
    const staffObj = staffList.find(s => s.id === Number(selectedStaffId));
    await onAssignStaff(complaint.id, Number(selectedStaffId), staffObj ? staffObj.name : 'Staff Member');
    setUpdating(false);
  };

  const handleStatusSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    await onUpdateStatus(complaint.id, newStatus, inspectionNotes, maintenanceNotes);
    setUpdating(false);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content complaint-detail-modal">
        <div className="modal-header">
          <div>
            <span className="complaint-code">#CMP-{complaint.id}</span>
            <h2>{complaint.issueType?.replace('_', ' ')}</h2>
          </div>
          <button type="button" className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {/* Visual Lifecycle Timeline */}
          <div className="lifecycle-timeline-card">
            <h4>Complaint Lifecycle Stage</h4>
            <div className="timeline-stepper">
              {STAGE_ORDER.map((stage, idx) => {
                const isPassed = currentStageIndex >= idx;
                const isCurrent = complaint.status === stage;

                return (
                  <div key={stage} className={`stepper-item ${isPassed ? 'passed' : ''} ${isCurrent ? 'current' : ''}`}>
                    <div className="stepper-dot">{isPassed ? '✓' : idx + 1}</div>
                    <span className="stepper-label">{stage.replace('_', ' ')}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="detail-grid">
            <div className="detail-col">
              <div className="info-group">
                <label>Reported By</label>
                <p><strong>{complaint.userName || 'Citizen'}</strong> (User ID #{complaint.userId})</p>
              </div>
              <div className="info-group">
                <label>Priority Level</label>
                <p><span className={`priority-tag ${complaint.priority?.toLowerCase()}`}>{complaint.priority}</span></p>
              </div>
              <div className="info-group">
                <label>Current Status</label>
                <p><span className={`status-tag ${complaint.status?.toLowerCase()}`}>{complaint.status?.replace('_', ' ')}</span></p>
              </div>
              <div className="info-group">
                <label>Location / Address</label>
                <p>📍 {complaint.address}</p>
                <small className="coordinates">Lat: {complaint.latitude}, Lng: {complaint.longitude}</small>
              </div>
            </div>

            <div className="detail-col">
              <div className="info-group">
                <label>Assigned Maintenance Staff</label>
                <p>👷 {complaint.assignedStaffName || 'Unassigned'}</p>
              </div>
              <div className="info-group">
                <label>Submission Date</label>
                <p>📅 {new Date(complaint.createdAt).toLocaleString()}</p>
              </div>
              <div className="info-group">
                <label>Description</label>
                <p className="description-text">{complaint.description}</p>
              </div>
            </div>
          </div>

          {complaint.photoUrl && (
            <div className="photo-section">
              <label>Attached Incident Photograph</label>
              <img src={complaint.photoUrl} alt="Complaint evidence" className="detail-photo" />
            </div>
          )}

          {/* Notes Display */}
          {(complaint.inspectionNotes || complaint.maintenanceNotes) && (
            <div className="notes-display-box">
              {complaint.inspectionNotes && (
                <div className="note-block">
                  <strong>🔍 Inspection Notes:</strong>
                  <p>{complaint.inspectionNotes}</p>
                </div>
              )}
              {complaint.maintenanceNotes && (
                <div className="note-block">
                  <strong>🛠️ Maintenance Completion Notes:</strong>
                  <p>{complaint.maintenanceNotes}</p>
                </div>
              )}
            </div>
          )}

          {/* Staff / Admin Actions Section */}
          {(currentRole === 'STAFF' || currentRole === 'ADMIN') && (
            <div className="management-actions-card">
              <h3>⚙️ Staff & Admin Management Actions</h3>
              
              {/* Assignment Controls */}
              {currentRole === 'ADMIN' && <div className="action-row">
                <div className="form-group flex-1">
                  <label>Assign to Maintenance Staff:</label>
                  <select
                    value={selectedStaffId}
                    onChange={(e) => setSelectedStaffId(e.target.value)}
                  >
                    <option value="">-- Select Department Staff --</option>
                    {staffList.map((s) => (
                      <option key={s.id} value={s.id}>{s.name} ({s.department})</option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  className="action-btn-primary"
                  onClick={handleAssign}
                  disabled={updating || !selectedStaffId}
                >
                  Assign Staff
                </button>
              </div>}

              {/* Status Update Controls */}
              <form onSubmit={handleStatusSubmit} className="status-update-form">
                <div className="form-group">
                  <label>Update Status:</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                  >
                    <option value="SUBMITTED">SUBMITTED</option>
                    <option value="UNDER_REVIEW">UNDER REVIEW</option>
                    <option value="ASSIGNED">ASSIGNED</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="RESOLVED">RESOLVED</option>
                    <option value="REJECTED">REJECTED</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Inspection Notes:</label>
                  <input
                    type="text"
                    placeholder="Field inspection findings..."
                    value={inspectionNotes}
                    onChange={(e) => setInspectionNotes(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Maintenance / Completion Notes:</label>
                  <input
                    type="text"
                    placeholder="Work performed, equipment used, resolution..."
                    value={maintenanceNotes}
                    onChange={(e) => setMaintenanceNotes(e.target.value)}
                  />
                </div>

                <button type="submit" className="action-btn-success" disabled={updating}>
                  Save Progress &amp; Notify Citizen
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
