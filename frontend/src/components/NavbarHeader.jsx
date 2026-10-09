import React from 'react';

export default function NavbarHeader({
  currentUser,
  currentRole,
  onLogout,
  unreadNotificationsCount,
  onOpenNotifications,
  themeMode,
  onToggleTheme
}) {
  const currentDateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <header className="topbar">
      <div className="welcome-block">
        <h1>
          Urban Drainage Portal <span className="dept-tag">Municipal Department</span>
        </h1>
        <p className="welcome-subtext">
          Signed in as <strong>{currentUser.name}</strong> · {currentRole.toLowerCase()}
        </p>
      </div>

      <div className="topbar-actions">
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          title="Switch appearance"
        >
          {themeMode === 'night' ? '🌙 Night theme' : '☀️ Day theme'}
        </button>

        <div className="date-pill">{currentDateStr}</div>

        <button 
          type="button" 
          className="notification-pill-btn" 
          onClick={onOpenNotifications}
          title="View Notifications"
        >
          <span className="bell-icon">🔔</span>
          {unreadNotificationsCount > 0 && (
            <span className="unread-badge">{unreadNotificationsCount}</span>
          )}
        </button>

        <div className="user-pill">
          <div className="avatar">
            {currentUser.name ? currentUser.name.split(' ').map(n => n[0]).join('').substring(0, 2) : 'UD'}
          </div>
          <div className="user-info">
            <span className="user-name">{currentUser.name}</span>
            <span className="user-role-badge">{currentRole}</span>
          </div>
        </div>
        <button type="button" className="logout-btn" onClick={onLogout}>Sign out</button>
      </div>
    </header>
  );
}
