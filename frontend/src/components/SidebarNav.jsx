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

const NAV_ICON_PATHS = {
  dashboard: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  'report-issue': <><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L9 17l-4 1 1-4Z" /><path d="M4 4h6M4 8h4" /></>,
  'my-complaints': <><path d="M8 6h13M8 12h13M8 18h13" /><path d="M3 6h.01M3 12h.01M3 18h.01" /></>,
  'complaint-management': <><path d="M4 5h16M4 12h16M4 19h16" /><path d="m8 3-4 2 4 2m8 3 4 2-4 2m-8 3-4 2 4 2" /></>,
  'assigned-complaints': <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0m3-12v6m-3-3h6" /></>,
  'drainage-map': <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z" /><path d="M9 3v15m6-12v15" /></>,
  infrastructure: <><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5" /><path d="M9 9h.01M15 9h.01M12 12h.01" /></>,
  'maintenance-updates': <><path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L15 12l-3-3Z" /></>,
  'maintenance-board': <><path d="M9 6V4h6v2m-9 0h12v15H6Zm3 5h6m-6 4h6" /></>,
  inspections: <><path d="m3 11 9-8 9 8v9H3Z" /><path d="M9 20v-6h6v6m-3-15v3" /></>,
  'emergency-monitoring': <><path d="M12 3 2.8 19h18.4L12 3Z" /><path d="M12 9v4m0 3h.01" /></>,
  'stormwater-analysis': <><path d="M3 17h18M5 17V9l4 4 4-8 3 6 3-3v9" /><path d="M5 21h14" /></>,
  'reports-analytics': <><path d="M4 19V5m0 14h17" /><path d="m7 15 4-4 3 2 5-6" /></>,
  notifications: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4" /></>,
  profile: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  'help-support': <><circle cx="12" cy="12" r="9" /><path d="M9.6 9a2.5 2.5 0 1 1 4.4 1.6c-1.2 1.3-2 1.4-2 3m0 3h.01" /></>,
  'staff-management': <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0m3-12v6m-3-3h6" /></>,
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
            <span className="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {NAV_ICON_PATHS[item.id]}
              </svg>
            </span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
