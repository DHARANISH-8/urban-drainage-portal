import React, { useState, useEffect } from 'react';
import './App.css';

import NavbarHeader from './components/NavbarHeader';
import SidebarNav from './components/SidebarNav';
import DrainageMap from './components/DrainageMap';
import ReportIssue from './components/ReportIssue';
import ComplaintList from './components/ComplaintList';
import ComplaintDetail from './components/ComplaintDetail';
import InfrastructureManager from './components/InfrastructureManager';
import MaintenanceBoard from './components/MaintenanceBoard';
import EmergencyMonitoring from './components/EmergencyMonitoring';
import StormwaterAnalysis from './components/StormwaterAnalysis';
import NotificationsView from './components/NotificationsView';
import ProfileView from './components/ProfileView';
import LoginPage from './components/LoginPage';
import { authHeaders, authorizedFetch, SESSION_EXPIRED_EVENT } from './api';

export default function App() {
  const [session, setSession] = useState(() => {
    try {
      const savedSession = JSON.parse(localStorage.getItem('urban_drainage_session'));
      return typeof savedSession?.token === 'string' && savedSession.token ? savedSession : null;
    } catch {
      return null;
    }
  });
  const [sessionError, setSessionError] = useState('');
  const currentUser = session;
  const currentRole = session?.role;
  const [activeTab, setActiveTab] = useState('dashboard');

  const [complaints, setComplaints] = useState([]);
  const [infrastructure, setInfrastructure] = useState([]);
  const [drains, setDrains] = useState([]);
  const [selectedDrainId, setSelectedDrainId] = useState(null);
  const [stats, setStats] = useState(null);
  const [staffList, setStaffList] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [loading, setLoading] = useState(true);

  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('urban_drainage_theme') || 'day';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
    localStorage.setItem('urban_drainage_theme', themeMode);
  }, [themeMode]);

  const handleToggleTheme = () => {
    setThemeMode((prev) => (prev === 'night' ? 'day' : 'night'));
  };

  const handleLogin = (nextSession) => {
    if (!nextSession?.token || !['CITIZEN', 'STAFF', 'ADMIN'].includes(nextSession.role)) {
      throw new Error('The sign-in service returned an invalid session. Please try again.');
    }
    localStorage.setItem('urban_drainage_session', JSON.stringify(nextSession));
    setSessionError('');
    setSession(nextSession);
    setActiveTab('dashboard');
  };

  const handleLogout = async () => {
    if (session?.token) await authorizedFetch('/api/auth/logout', session.token, { method: 'POST' }).catch(() => {});
    localStorage.removeItem('urban_drainage_session');
    setSession(null);
    setSessionError('');
  };

  useEffect(() => {
    const handleSessionExpired = (event) => {
      if (event.detail?.token !== session?.token) return;
      localStorage.removeItem('urban_drainage_session');
      setSession(null);
      setSessionError('Your session has expired. Please sign in again.');
    };
    window.addEventListener(SESSION_EXPIRED_EVENT, handleSessionExpired);
    return () => window.removeEventListener(SESSION_EXPIRED_EVENT, handleSessionExpired);
  }, [session?.token]);

  // Fetch data from backend Spring Boot APIs
  const fetchAllData = async () => {
    if (!session?.token) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const complaintsUrl = currentRole === 'CITIZEN'
        ? `/api/complaints/user/${currentUser.id}`
        : currentRole === 'STAFF' ? `/api/complaints/staff/${currentUser.id}` : '/api/complaints';
      const [complaintsRes, infraRes, drainsRes, statsRes, staffRes, notifRes] = await Promise.all([
        authorizedFetch(complaintsUrl, session.token),
        authorizedFetch('/api/drainage/infrastructure', session.token),
        authorizedFetch('/api/drains', session.token),
        currentRole === 'CITIZEN' ? Promise.resolve({ ok: false }) : authorizedFetch('/api/complaints/stats', session.token),
        currentRole === 'CITIZEN' ? Promise.resolve({ ok: false }) : authorizedFetch('/api/users/staff', session.token),
        authorizedFetch(`/api/notifications/user/${currentUser.id}`, session.token),
      ]);

      if (complaintsRes.ok) {
        const cData = await complaintsRes.json();
        setComplaints(cData);
      }
      if (infraRes.ok) {
        const iData = await infraRes.json();
        setInfrastructure(iData);
      }
      if (drainsRes.ok) {
        const drainData = await drainsRes.json();
        setDrains(drainData);
      }
      if (statsRes.ok) {
        const sData = await statsRes.json();
        setStats(sData);
      }
      if (staffRes.ok) {
        const stData = await staffRes.json();
        setStaffList(stData);
      }
      if (notifRes.ok) {
        const nData = await notifRes.json();
        setNotifications(nData);
      }
    } catch (err) {
      console.error('Error fetching backend data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [session]);

  // Actions
  const handleAssignStaff = async (complaintId, staffId, staffName) => {
    try {
      const res = await authorizedFetch(`/api/complaints/${complaintId}/assign`, session.token, {
        method: 'PUT',
        headers: authHeaders(session.token, { 'Content-Type': 'application/json' }),
        body: JSON.stringify({ staffId, staffName }),
      });
      if (res.ok) {
        fetchAllData();
        const updated = await res.json();
        setSelectedComplaint(updated);
      }
    } catch (err) {
      alert('Failed to assign staff.');
    }
  };

  const handleUpdateStatus = async (complaintId, status, inspectionNotes, maintenanceNotes) => {
    try {
      const res = await authorizedFetch(`/api/complaints/${complaintId}/status`, session.token, {
        method: 'PUT',
        headers: authHeaders(session.token, { 'Content-Type': 'application/json' }),
        body: JSON.stringify({ status, inspectionNotes, maintenanceNotes }),
      });
      if (res.ok) {
        fetchAllData();
        const updated = await res.json();
        setSelectedComplaint(updated);
      }
    } catch (err) {
      alert('Failed to update status.');
    }
  };

  const handleMarkNotificationRead = async (notifId) => {
    try {
      await authorizedFetch(`/api/notifications/${notifId}/read`, session.token, { method: 'PUT' });
      setNotifications((prev) => prev.map((n) => (n.id === notifId ? { ...n, read: true } : n)));
    } catch (err) {
      console.error('Error marking notification as read:', err);
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  if (!session) return <LoginPage onLogin={handleLogin} notice={sessionError} />;

  return (
    <div className="app-shell">
      <SidebarNav
        currentRole={currentRole}
        activeTab={activeTab}
        onTabSelect={(tab) => setActiveTab(tab)}
      />

      <main className="content-panel">
        <NavbarHeader
          currentUser={currentUser}
          currentRole={currentRole}
          onLogout={handleLogout}
          unreadNotificationsCount={unreadCount}
          onOpenNotifications={() => setActiveTab('notifications')}
          themeMode={themeMode}
          onToggleTheme={handleToggleTheme}
        />

        {/* Dynamic Tab Rendering */}
        {activeTab === 'dashboard' && (
          <DashboardView
            currentRole={currentRole}
            currentUser={currentUser}
            stats={stats}
            complaints={complaints}
            infrastructure={infrastructure}
            onNavigate={(tab) => setActiveTab(tab)}
            onSelectComplaint={(c) => setSelectedComplaint(c)}
          />
        )}

        {activeTab === 'report-issue' && (
          <ReportIssue
            currentUser={currentUser}
            token={session.token}
            selectedDrain={drains.find((drain) => drain.id === selectedDrainId) || null}
            onSubmitSuccess={() => {
              fetchAllData();
              setActiveTab(selectedDrainId == null ? 'my-complaints' : 'drainage-map');
            }}
          />
        )}

        {activeTab === 'my-complaints' && (
          <ComplaintList
            complaints={complaints}
            staffList={staffList}
            currentRole={currentRole}
            currentUser={currentUser}
            filterMode="MY_COMPLAINTS"
            onSelectComplaint={(c) => setSelectedComplaint(c)}
          />
        )}

        {(activeTab === 'complaint-management' || activeTab === 'reports-analytics') && (
          <ComplaintList
            complaints={complaints}
            staffList={staffList}
            currentRole={currentRole}
            currentUser={currentUser}
            filterMode="ALL"
            onSelectComplaint={(c) => setSelectedComplaint(c)}
          />
        )}

        {activeTab === 'assigned-complaints' && (
          <ComplaintList
            complaints={complaints}
            staffList={staffList}
            currentRole={currentRole}
            currentUser={currentUser}
            filterMode="ASSIGNED_TO_ME"
            onSelectComplaint={(c) => setSelectedComplaint(c)}
          />
        )}

        {activeTab === 'drainage-map' && (
          <DrainageMap
            complaints={complaints}
            drains={drains}
            token={session.token}
            currentRole={currentRole}
            selectedDrainId={selectedDrainId}
            onSelectDrain={(drain) => setSelectedDrainId(drain?.id ?? null)}
            onReportDrain={(drain) => {
              setSelectedDrainId(drain.id);
              setActiveTab('report-issue');
            }}
            onSelectComplaint={(c) => setSelectedComplaint(c)}
          />
        )}

        {activeTab === 'infrastructure' && (
          <InfrastructureManager
            infrastructure={infrastructure}
            onRefresh={fetchAllData}
            token={session.token}
          />
        )}

        {(activeTab === 'maintenance-board' || activeTab === 'maintenance-updates' || activeTab === 'inspections') && (
          <MaintenanceBoard
            complaints={complaints}
            onSelectComplaint={(c) => setSelectedComplaint(c)}
            onUpdateStatus={handleUpdateStatus}
          />
        )}

        {activeTab === 'emergency-monitoring' && (
          <EmergencyMonitoring
            complaints={complaints}
            onSelectComplaint={(c) => setSelectedComplaint(c)}
          />
        )}

        {activeTab === 'stormwater-analysis' && <StormwaterAnalysis token={session.token} />}

        {activeTab === 'notifications' && (
          <NotificationsView
            notifications={notifications}
            onMarkRead={handleMarkNotificationRead}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileView currentUser={currentUser} currentRole={currentRole} />
        )}

        {activeTab === 'help-support' && (
          <div className="panel-card help-panel">
            <h2>❓ Urban Drainage Department Support</h2>
            <p>For urgent flood emergencies or immediate drain blockages requiring municipal jetting crews:</p>
            <div className="support-box">
              <p>📞 <strong>Helpline:</strong> 1800-URBAN-DRAIN (24x7 Control Room)</p>
              <p>📧 <strong>Email:</strong> support.drainage@city.gov</p>
              <p>📍 <strong>Headquarters:</strong> Municipal Drainage Works Complex, Sector 4</p>
            </div>
          </div>
        )}

        {/* Complaint Detail Modal */}
        {selectedComplaint && (
          <ComplaintDetail
            complaint={selectedComplaint}
            staffList={staffList}
            currentRole={currentRole}
            onClose={() => setSelectedComplaint(null)}
            onAssignStaff={handleAssignStaff}
            onUpdateStatus={handleUpdateStatus}
          />
        )}
      </main>
    </div>
  );
}

// Inner Dashboard View Component
function DashboardView({ currentRole, currentUser, stats, complaints, infrastructure, onNavigate, onSelectComplaint }) {
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(false);
  const total = stats?.totalComplaints || complaints.length;
  const inProgress = stats?.inProgress || complaints.filter(c => c.status === 'IN_PROGRESS').length;
  const resolved = stats?.resolved || complaints.filter(c => c.status === 'RESOLVED').length;
  const emergency = stats?.emergencyCount || complaints.filter(c => c.priority === 'EMERGENCY').length;

  useEffect(() => {
    const controller = new AbortController();
    const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=11.5053&longitude=77.2380&current=temperature_2m,precipitation,rain,weather_code&hourly=precipitation_probability&forecast_days=1&timezone=Asia%2FKolkata';

    fetch(weatherUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Weather request failed');
        return response.json();
      })
      .then((data) => {
        const currentHour = data.hourly.time.indexOf(data.current.time);
        const rainProbability = currentHour >= 0 ? data.hourly.precipitation_probability[currentHour] : 0;
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          rainProbability,
          precipitation: data.current.precipitation,
        });
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setWeatherError(true);
      });

    return () => controller.abort();
  }, []);

  const floodRisk = weather?.rainProbability >= 70 ? 'HIGH' : weather?.rainProbability >= 40 ? 'MODERATE' : 'LOW';
  const weatherDescription = weather?.precipitation > 0 ? 'Rain currently reported' : 'Current conditions are dry';

  const statCards = [
    { value: total.toString(), label: 'Total Complaints', tone: 'blue', icon: '▣', badge: 'Database Live' },
    { value: inProgress.toString(), label: 'In Progress', tone: 'orange', icon: '◔', badge: 'Active Fieldwork' },
    { value: resolved.toString(), label: 'Resolved', tone: 'green', icon: '✓', badge: 'Completed' },
    { value: emergency.toString(), label: 'Emergency Cases', tone: 'red', icon: '🚨', badge: 'Priority Response' },
  ];

  return (
    <>
      <section className="stats-grid">
        {statCards.map((stat) => (
          <article key={stat.label} className={`stat-card tone-${stat.tone}`}>
            <div className="stat-topline">
              <span className={`mini-icon ${stat.tone}`}>{stat.icon}</span>
              <span className="badge-text">{stat.badge}</span>
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </article>
        ))}
      </section>

      <section className="quick-actions">
        <button
          type="button"
          className="action-btn blue"
          onClick={() => onNavigate('report-issue')}
        >
          <span className="action-icon">＋</span>
          Report New Drainage Issue
        </button>
        <button
          type="button"
          className="action-btn green"
          onClick={() => onNavigate(currentRole === 'CITIZEN' ? 'my-complaints' : 'complaint-management')}
        >
          <span className="action-icon">⌕</span>
          View Complaint Status &amp; Timeline
        </button>
        <button
          type="button"
          className="action-btn sky"
          onClick={() => onNavigate('drainage-map')}
        >
          <span className="action-icon">🗺️</span>
          Open Interactive Drainage Map
        </button>
        {currentRole === 'ADMIN' ? (
          <button
            type="button"
            className="action-btn light"
            onClick={() => onNavigate('stormwater-analysis')}
          >
            <span className="action-icon">🌊</span>
            Run Stormwater Hydrologic Analysis
          </button>
        ) : (
          <button
            type="button"
            className="action-btn light"
            onClick={() => onNavigate('help-support')}
          >
            <span className="action-icon">📞</span>
            Contact Municipal Department
          </button>
        )}
      </section>

      <section className="lower-grid">
        <div className="timeline-panel panel-card">
          <div className="panel-header">
            <h3>Recent Drainage Complaints &amp; Lifecycle</h3>
            <button
              type="button"
              className="link-btn"
              onClick={() => onNavigate(currentRole === 'CITIZEN' ? 'my-complaints' : 'complaint-management')}
            >
              View all complaints
            </button>
          </div>

          <div className="timeline-list">
            {complaints.slice(0, 4).map((item) => (
              <div key={item.id} className="timeline-item cursor-pointer" onClick={() => onSelectComplaint(item)}>
                <div className="mini-meta">
                  <span className="code">#CMP-{item.id}</span>
                  <span className="title">{item.issueType?.replace('_', ' ')} — <small>{item.address}</small></span>
                </div>

                <div className="timeline-row">
                  <div className="status-track">
                    {['SUBMITTED', 'UNDER_REVIEW', 'ASSIGNED', 'IN_PROGRESS', 'RESOLVED'].map((status) => {
                      const statusOrder = ['SUBMITTED', 'UNDER_REVIEW', 'ASSIGNED', 'IN_PROGRESS', 'RESOLVED'];
                      const currentIndex = statusOrder.indexOf(item.status);
                      const targetIndex = statusOrder.indexOf(status);
                      const isDone = targetIndex <= currentIndex;
                      const isActive = status === item.status;

                      return (
                        <span
                          key={`${item.id}-${status}`}
                          className={`status-step ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}`}
                        >
                          <em className="dot" />
                          <small>{status.replace('_', ' ')}</small>
                        </span>
                      );
                    })}
                  </div>

                  <div className="timeline-side">
                    <span className={`priority priority-${item.priority?.toLowerCase()}`}>{item.priority}</span>
                    <span className="timeline-date">{new Date(item.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="right-stack">
          {/* Weather & Flood Risk Panel */}
          <div className="weather-card panel-card">
            <div className="weather-header">
              <h3>🌧️ Weather &amp; Flood Risk Advisory</h3>
              <small>Sathyamangalam, Tamil Nadu</small>
            </div>

            <div className="weather-main">
              <div className="temp">{weather ? `${weather.temperature}°C` : '--'}</div>
              <div className="weather-text">{weatherError ? 'Weather service unavailable' : weather ? weatherDescription : 'Loading live conditions...'}</div>
            </div>

            <div className="weather-metrics">
              <div className="metric-box">
                <span className="metric-label">Rain Probability</span>
                <strong>{weather ? `${weather.rainProbability}%` : '--'}</strong>
              </div>
              <div className="metric-box warning">
                <span className="metric-label">Flood Risk</span>
                <strong>{weather ? floodRisk : '--'}</strong>
              </div>
            </div>

            <div className="warning-banner">
              <span className="warning-icon">ⓘ</span>
              <p>{weather?.rainProbability >= 40 ? 'Advisory: Rain may affect low-lying drainage catchments. Keep storm inlets clear.' : 'Advisory: Monitor local rainfall and keep storm inlets clear.'}</p>
            </div>
          </div>

          {/* Infrastructure Assets Overview Card */}
          <div className="alerts-card panel-card">
            <div className="panel-header">
              <h3>🔵 Key Drainage Assets</h3>
              <button type="button" className="link-btn" onClick={() => onNavigate('drainage-map')}>View GIS Map</button>
            </div>

            <div className="alert-list">
              {infrastructure.slice(0, 4).map((asset) => (
                <div key={asset.id} className="alert-item">
                  <div className="alert-icon">🔵</div>
                  <div className="alert-copy">
                    <div className="alert-title-row">
                      <span className="alert-name">{asset.name}</span>
                      <span className={`alert-severity ${asset.status?.toLowerCase()}`}>{asset.status}</span>
                    </div>
                    <div className="alert-location">{asset.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
