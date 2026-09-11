import React from 'react';

const ROLE_MENUS = {
  CITIZEN: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'report-issue', label: 'Report Drainage Issue', icon: '📝' },
    { id: 'my-complaints', label: 'My Complaints', icon: '📋' },
    { id: 'drainage-map', label: 'Drainage Map', icon: '🗺️' },
    { id: 'maintenance-updates', label: 'Maintenance Updates', icon: '🛠️' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'help-support', label: 'Help & Support', icon: '❓' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ],
  STAFF: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'complaint-management', label: 'Complaint Management', icon: '🗂️' },
    { id: 'assigned-complaints', label: 'Assigned Complaints', icon: '🎯' },
    { id: 'drainage-map', label: 'Drainage Map', icon: '🗺️' },
    { id: 'inspections', label: 'Inspections', icon: '🔍' },
    { id: 'maintenance-board', label: 'Maintenance', icon: '🛠️' },
    { id: 'emergency-monitoring', label: 'Emergency Issues', icon: '🚨' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ],
  ADMIN: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'complaint-management', label: 'Complaint Management', icon: '🗂️' },
    { id: 'infrastructure', label: 'Drainage Infrastructure', icon: '🏗️' },
    { id: 'drainage-map', label: 'Drainage Map', icon: '🗺️' },
    { id: 'staff-management', label: 'Staff Management', icon: '👥' },
    { id: 'maintenance-board', label: 'Maintenance Management', icon: '🛠️' },
    { id: 'emergency-monitoring', label: 'Emergency Monitoring', icon: '🚨' },
    { id: 'stormwater-analysis', label: 'Stormwater Analysis', icon: '🌊' },
    { id: 'reports-analytics', label: 'Reports & Analytics', icon: '📈' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ],
};

export default function SidebarNav({ currentRole, activeTab, onTabSelect }) {
  const menuItems = ROLE_MENUS[currentRole] || ROLE_MENUS.CITIZEN;

  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-icon">🌊</div>
        <div className="brand-copy">
          <h2>Urban Drainage</h2>
          <span>Department Portal</span>
        </div>
      </div>

      <div className="role-indicator">
        <span className="dot pulse" />
        <span>{currentRole.toLowerCase()} workspace</span>
      </div>

      <nav className="nav-menu" aria-label="Sidebar navigation">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onTabSelect(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
