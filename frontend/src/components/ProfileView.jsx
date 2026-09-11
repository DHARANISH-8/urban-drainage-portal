import React from 'react';

export default function ProfileView({ currentUser, currentRole }) {
  return (
    <div className="profile-panel-container">
      <div className="profile-panel panel-card">
        <div className="panel-header">
          <h2>👤 User Profile &amp; Department Credentials</h2>
        </div>

        <div className="profile-card-content">
          <div className="profile-avatar-large">
            {currentUser.name ? currentUser.name.split(' ').map(n => n[0]).join('') : 'UD'}
          </div>

          <div className="profile-details-grid">
            <div className="detail-item">
              <label>Full Name</label>
              <p><strong>{currentUser.name}</strong></p>
            </div>
            <div className="detail-item">
              <label>Official Email</label>
              <p>{currentUser.email}</p>
            </div>
            <div className="detail-item">
              <label>Active Role</label>
              <p><span className="role-tag">{currentRole}</span></p>
            </div>
            <div className="detail-item">
              <label>Assigned Department</label>
              <p>Urban Drainage Department</p>
            </div>
            <div className="detail-item">
              <label>Contact Phone</label>
              <p>{currentUser.phone || '+1 555-0192'}</p>
            </div>
            <div className="detail-item">
              <label>System Jurisdiction</label>
              <p>Municipal Waterlogging &amp; Stormwater Management Zone</p>
            </div>
          </div>
        </div>
      </div>

      {/* Database Connection Info Card */}
      <div className="db-info-panel panel-card" style={{ marginTop: '1.5rem' }}>
        <div className="panel-header">
          <h3>🗄️ Backend Persistence &amp; Database Connection Status</h3>
          <span className="status-tag resolved">Connected &amp; Active</span>
        </div>
        <div className="db-details-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div className="db-item">
            <small style={{ color: 'var(--text-muted)' }}>Database Engine</small>
            <p><strong>PostgreSQL / Spring Data JPA</strong></p>
          </div>
          <div className="db-item">
            <small style={{ color: 'var(--text-muted)' }}>Primary Datasource URL</small>
            <p><code>jdbc:postgresql://localhost:5432/urban_drainage</code></p>
          </div>
          <div className="db-item">
            <small style={{ color: 'var(--text-muted)' }}>Dev Fallback</small>
            <p><code>jdbc:h2:mem:urbandrainage</code> (HikariCP)</p>
          </div>
          <div className="db-item">
            <small style={{ color: 'var(--text-muted)' }}>Active Entities</small>
            <p><code>users</code>, <code>drainage_complaints</code>, <code>drainage_infrastructure</code>, <code>notifications</code></p>
          </div>
        </div>
      </div>
    </div>
  );
}
