import React, { useState } from 'react';

export default function ComplaintList({ complaints = [], currentUser, onSelectComplaint, filterMode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [priorityFilter, setPriorityFilter] = useState('ALL');

  const filteredComplaints = complaints.filter((c) => {
    // Mode filters
    if (filterMode === 'MY_COMPLAINTS' && c.userId !== currentUser?.id) return false;
    if (filterMode === 'ASSIGNED_TO_ME' && c.assignedStaffId !== currentUser?.id) return false;
    if (filterMode === 'EMERGENCY' && c.priority !== 'EMERGENCY') return false;

    // Search filter
    const matchesSearch =
      searchTerm === '' ||
      c.id.toString().includes(searchTerm) ||
      c.issueType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description?.toLowerCase().includes(searchTerm.toLowerCase());

    // Status & Priority filters
    const matchesStatus = statusFilter === 'ALL' || c.status === statusFilter;
    const matchesPriority = priorityFilter === 'ALL' || c.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="complaint-list-panel panel-card">
      <div className="panel-header">
        <div>
          <h2>📋 {filterMode === 'MY_COMPLAINTS' ? 'My Submitted Complaints' : filterMode === 'ASSIGNED_TO_ME' ? 'Assigned Maintenance Complaints' : 'Drainage Complaints Directory'}</h2>
          <p>Total Records: {filteredComplaints.length}</p>
        </div>

        <div className="filter-controls-row">
          <input
            type="text"
            placeholder="🔎 Search complaints by ID, issue, address..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="filter-select">
            <option value="ALL">All Statuses</option>
            <option value="SUBMITTED">Submitted</option>
            <option value="UNDER_REVIEW">Under Review</option>
            <option value="ASSIGNED">Assigned</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="RESOLVED">Resolved</option>
            <option value="REJECTED">Rejected</option>
          </select>

          <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} className="filter-select">
            <option value="ALL">All Priorities</option>
            <option value="EMERGENCY">Emergency</option>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
        </div>
      </div>

      {filteredComplaints.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📭</span>
          <p>No drainage complaints match your current criteria.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="complaints-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Issue Type</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Location / Address</th>
                <th>Assigned Staff</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.map((c) => (
                <tr key={c.id} className={c.priority === 'EMERGENCY' ? 'row-emergency' : ''}>
                  <td>
                    <strong className="code-pill">#CMP-{c.id}</strong>
                  </td>
                  <td>
                    <span className="issue-title">{c.issueType?.replace('_', ' ')}</span>
                  </td>
                  <td>
                    <span className={`priority-tag ${c.priority?.toLowerCase()}`}>
                      {c.priority}
                    </span>
                  </td>
                  <td>
                    <span className={`status-tag ${c.status?.toLowerCase()}`}>
                      {c.status?.replace('_', ' ')}
                    </span>
                  </td>
                  <td>
                    <span className="address-cell" title={c.address}>📍 {c.address}</span>
                  </td>
                  <td>
                    <span className="staff-cell">
                      {c.assignedStaffName || (c.assignedStaffId != null ? `Staff ID #${c.assignedStaffId}` : 'Unassigned')}
                    </span>
                  </td>
                  <td>{c.createdAt ? new Date(c.createdAt).toLocaleString() : 'Not provided'}</td>
                  <td>
                    <button
                      type="button"
                      className="view-btn"
                      onClick={() => onSelectComplaint(c)}
                    >
                      View Lifecycle ➔
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
