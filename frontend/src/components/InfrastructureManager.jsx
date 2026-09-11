import React, { useState } from 'react';

const INFRA_TYPES = [
  { value: 'STORM_DRAIN', label: 'Storm Drain' },
  { value: 'DRAINAGE_CHANNEL', label: 'Drainage Channel' },
  { value: 'OUTLET', label: 'Discharge Outlet' },
  { value: 'CULVERT', label: 'Culvert' },
  { value: 'MANHOLE', label: 'Manhole Junction' },
  { value: 'PUMPING_STATION', label: 'Pumping Station' },
];

export default function InfrastructureManager({ infrastructure = [], onRefresh }) {
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: 'STORM_DRAIN',
    description: '',
    latitude: 19.0760,
    longitude: 72.8777,
    address: '',
    status: 'OPERATIONAL',
  });

  const [saving, setSaving] = useState(false);

  const handleOpenNew = () => {
    setEditingId(null);
    setFormData({
      name: '',
      type: 'STORM_DRAIN',
      description: '',
      latitude: 19.0760,
      longitude: 72.8777,
      address: '',
      status: 'OPERATIONAL',
    });
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      name: item.name,
      type: item.type,
      description: item.description || '',
      latitude: item.latitude,
      longitude: item.longitude,
      address: item.address || '',
      status: item.status || 'OPERATIONAL',
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this drainage infrastructure asset?')) return;
    try {
      await fetch(`/api/drainage/infrastructure/${id}`, { method: 'DELETE' });
      if (onRefresh) onRefresh();
    } catch (err) {
      alert('Failed to delete asset.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const url = editingId ? `/api/drainage/infrastructure/${editingId}` : '/api/drainage/infrastructure';
    const method = editingId ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Save failed.');

      setShowModal(false);
      if (onRefresh) onRefresh();
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="infrastructure-panel panel-card">
      <div className="panel-header">
        <div>
          <h2>🏗️ Drainage Infrastructure Management</h2>
          <p>Register and maintain city drainage network assets across sectors.</p>
        </div>
        <button type="button" className="action-btn-primary" onClick={handleOpenNew}>
          ＋ Register New Asset
        </button>
      </div>

      <div className="table-responsive">
        <table className="complaints-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Asset Name</th>
              <th>Infrastructure Type</th>
              <th>Location Address</th>
              <th>GPS Coordinates</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {infrastructure.map((item) => (
              <tr key={item.id}>
                <td><strong>#INF-{item.id}</strong></td>
                <td><strong>{item.name}</strong></td>
                <td><span className="type-badge">{item.type.replace('_', ' ')}</span></td>
                <td>📍 {item.address}</td>
                <td>{item.latitude}, {item.longitude}</td>
                <td>
                  <span className={`status-tag ${item.status?.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <div className="btn-group">
                    <button type="button" className="btn-icon" onClick={() => handleEdit(item)}>✏️ Edit</button>
                    <button type="button" className="btn-icon danger" onClick={() => handleDelete(item.id)}>🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{editingId ? 'Edit Asset' : 'Register New Drainage Asset'}</h2>
              <button type="button" className="close-btn" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Asset Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Greely Valley Main Outlet"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row grid-2">
                <div className="form-group">
                  <label>Type *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    {INFRA_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Operational Status *</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="OPERATIONAL">OPERATIONAL</option>
                    <option value="MAINTENANCE_REQUIRED">MAINTENANCE REQUIRED</option>
                    <option value="UNDER_REPAIR">UNDER REPAIR</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>
              </div>

              <div className="form-row grid-3">
                <div className="form-group">
                  <label>Latitude *</label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={formData.latitude}
                    onChange={(e) => setFormData({ ...formData, latitude: parseFloat(e.target.value) })}
                  />
                </div>
                <div className="form-group">
                  <label>Longitude *</label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={formData.longitude}
                    onChange={(e) => setFormData({ ...formData, longitude: parseFloat(e.target.value) })}
                  />
                </div>
                <div className="form-group">
                  <label>Address / Zone *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sector 4 Main Road"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Description / Technical Details</label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="action-btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="action-btn-primary" disabled={saving}>
                  {saving ? 'Saving...' : 'Save Asset'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
