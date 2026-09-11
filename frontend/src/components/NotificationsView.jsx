import React from 'react';

export default function NotificationsView({ notifications = [], onMarkRead }) {
  return (
    <div className="notifications-panel panel-card">
      <div className="panel-header">
        <div>
          <h2>🔔 Department Notifications &amp; Alerts</h2>
          <p>Real-time updates regarding your complaint lifecycle, emergency advisories, and maintenance events.</p>
        </div>
      </div>

      <div className="notification-list">
        {notifications.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">🔕</span>
            <p>You have no notifications at this time.</p>
          </div>
        ) : (
          notifications.map((item) => (
            <div key={item.id} className={`notification-item ${!item.read ? 'unread' : ''}`}>
              <div className="notif-icon">
                {item.type === 'EMERGENCY_ALERT' ? '🚨' : item.type === 'ASSIGNMENT' ? '🎯' : item.type === 'STATUS_UPDATE' ? '📋' : '📝'}
              </div>
              <div className="notif-body">
                <div className="notif-header">
                  <h4>{item.title}</h4>
                  <span className="notif-date">{new Date(item.createdAt).toLocaleString()}</span>
                </div>
                <p>{item.message}</p>
              </div>
              {!item.read && (
                <button
                  type="button"
                  className="mark-read-btn"
                  onClick={() => onMarkRead(item.id)}
                >
                  Mark as Read
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
