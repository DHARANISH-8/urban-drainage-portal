import React, { useEffect, useState } from 'react';

const STATUSES = ['SUBMITTED', 'UNDER_REVIEW', 'ASSIGNED', 'IN_PROGRESS', 'RESOLVED', 'REJECTED'];

export default function ComplaintDetail({
  complaint,
  staffList = [],
  currentRole,
  currentUser,
  onClose,
  onUpdateStatus,
  onAssignStaff,
}) {
  const [selectedStaffId, setSelectedStaffId] = useState('');
  const [newStatus, setNewStatus] = useState('SUBMITTED');
  const [inspectionNotes, setInspectionNotes] = useState('');
  const [maintenanceNotes, setMaintenanceNotes] = useState('');
  const [workProgress, setWorkProgress] = useState('');
  const [resolutionDetails, setResolutionDetails] = useState('');
  const [updating, setUpdating] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (!complaint) return;
    setSelectedStaffId(complaint.assignedStaffId ?? '');
    setNewStatus(complaint.status || 'SUBMITTED');
    setInspectionNotes(complaint.inspectionNotes || '');
    setMaintenanceNotes(complaint.maintenanceNotes || '');
    setWorkProgress(complaint.workProgress || '');
    setResolutionDetails(complaint.resolutionDetails || '');
    setFormError('');
  }, [complaint]);

  if (!complaint) return null;

  const canUpdate = currentRole === 'ADMIN'
    || (currentRole === 'STAFF' && currentUser?.id === complaint.assignedStaffId);

  const handleAssign = async () => {
    if (!selectedStaffId) return;
    setUpdating(true);
    setFormError('');
    try {
      const saved = await onAssignStaff(complaint.id, Number(selectedStaffId));
      if (!saved) setFormError('Assignment was not saved. Check the error message and try again.');
    } finally {
      setUpdating(false);
    }
  };

  const handleStatusSubmit = async (event) => {
    event.preventDefault();
    setUpdating(true);
    setFormError('');
    try {
      const saved = await onUpdateStatus(
        complaint.id,
        newStatus,
        inspectionNotes,
        maintenanceNotes,
        workProgress,
        resolutionDetails,
      );
      if (!saved) setFormError('Update was not saved. Check the error message and try again.');
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content complaint-detail-modal">
        <div className="modal-header">
          <div>
            <span className="complaint-code">#CMP-{complaint.id}</span>
            <h2>{complaint.issueType?.replaceAll('_', ' ') || 'Complaint'}</h2>
          </div>
          <button type="button" className="close-btn" onClick={onClose} aria-label="Close complaint details">✕</button>
        </div>

        <div className="modal-body">
          <section className="lifecycle-timeline-card">
            <h4>Current lifecycle status</h4>
            <p><span className={`status-tag ${complaint.status?.toLowerCase()}`}>{complaint.status?.replaceAll('_', ' ') || 'Not provided'}</span></p>
            {complaint.updatedAt && <small>Last updated: {new Date(complaint.updatedAt).toLocaleString()}</small>}
            <small>Status history is not available for this complaint.</small>
          </section>

          <section className="management-actions-card">
            <h3>Citizen-reported information</h3>
            <div className="detail-grid">
              <div className="detail-col">
                <div className="info-group">
                  <label>Reported by</label>
                  <p>{complaint.userName || 'Not provided'}{complaint.userId != null ? ` (User ID #${complaint.userId})` : ''}</p>
                </div>
                <div className="info-group">
                  <label>Priority</label>
                  <p>{complaint.priority || 'Not provided'}</p>
                </div>
                {complaint.address && (
                  <div className="info-group">
                    <label>Reported address / location</label>
                    <p>{complaint.address}</p>
                  </div>
                )}
                {(complaint.latitude != null || complaint.longitude != null) && (
                  <div className="info-group">
                    <label>Reported coordinates</label>
                    <p>
                      {complaint.latitude != null ? `Latitude: ${complaint.latitude}` : ''}
                      {complaint.latitude != null && complaint.longitude != null ? ' · ' : ''}
                      {complaint.longitude != null ? `Longitude: ${complaint.longitude}` : ''}
                    </p>
                  </div>
                )}
              </div>
              <div className="detail-col">
                <div className="info-group">
                  <label>Submitted</label>
                  <p>{complaint.createdAt ? new Date(complaint.createdAt).toLocaleString() : 'Not provided'}</p>
                </div>
                <div className="info-group">
                  <label>Assigned staff</label>
                  <p>{complaint.assignedStaffName || (complaint.assignedStaffId != null ? `Staff ID #${complaint.assignedStaffId}` : 'Not assigned')}</p>
                </div>
                <div className="info-group">
                  <label>Original description</label>
                  <p className="description-text">{complaint.description || 'Not provided'}</p>
                </div>
              </div>
            </div>
            {complaint.photoUrl && (
              <div className="photo-section">
                <label>Citizen-attached photograph</label>
                <img src={complaint.photoUrl} alt="Photo submitted with complaint" className="detail-photo" />
              </div>
            )}
          </section>

          {(complaint.inspectionNotes || complaint.workProgress || complaint.maintenanceNotes || complaint.resolutionDetails) && (
            <section className="notes-display-box">
              <h3>Staff updates</h3>
              {complaint.inspectionNotes && <div className="note-block"><strong>Inspection notes</strong><p>{complaint.inspectionNotes}</p></div>}
              {complaint.workProgress && <div className="note-block"><strong>Work progress</strong><p>{complaint.workProgress}</p></div>}
              {complaint.maintenanceNotes && <div className="note-block"><strong>Maintenance notes</strong><p>{complaint.maintenanceNotes}</p></div>}
              {complaint.resolutionDetails && <div className="note-block"><strong>Resolution details</strong><p>{complaint.resolutionDetails}</p></div>}
            </section>
          )}

          {currentRole === 'ADMIN' && (
            <section className="management-actions-card">
              <h3>Staff assignment</h3>
              <div className="action-row">
                <div className="form-group flex-1">
                  <label htmlFor="assignedStaff">Assign or reassign staff</label>
                  <select id="assignedStaff" value={selectedStaffId} onChange={(event) => setSelectedStaffId(event.target.value)}>
                    <option value="">Select staff member</option>
                    {staffList.map((staff) => (
                      <option key={staff.id} value={staff.id}>{staff.name}</option>
                    ))}
                  </select>
                </div>
                <button type="button" className="action-btn-primary" onClick={handleAssign} disabled={updating || !selectedStaffId}>
                  Save assignment
                </button>
              </div>
            </section>
          )}

          {canUpdate && (
            <section className="management-actions-card">
              <h3>Staff update</h3>
              <form onSubmit={handleStatusSubmit} className="status-update-form">
                <div className="form-group">
                  <label htmlFor="complaintStatus">Status</label>
                  <select id="complaintStatus" value={newStatus} onChange={(event) => setNewStatus(event.target.value)}>
                    {STATUSES.map((status) => <option key={status} value={status}>{status.replaceAll('_', ' ')}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inspectionNotes">Inspection notes</label>
                  <textarea id="inspectionNotes" rows="2" value={inspectionNotes} onChange={(event) => setInspectionNotes(event.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="workProgress">Work progress</label>
                  <textarea id="workProgress" rows="2" value={workProgress} onChange={(event) => setWorkProgress(event.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="maintenanceNotes">Maintenance notes</label>
                  <textarea id="maintenanceNotes" rows="2" value={maintenanceNotes} onChange={(event) => setMaintenanceNotes(event.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="resolutionDetails">Resolution details</label>
                  <textarea id="resolutionDetails" rows="2" value={resolutionDetails} onChange={(event) => setResolutionDetails(event.target.value)} />
                </div>
                {formError && <p className="alert-box error" role="alert">{formError}</p>}
                <button type="submit" className="action-btn-success" disabled={updating}>
                  Save staff update
                </button>
              </form>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
