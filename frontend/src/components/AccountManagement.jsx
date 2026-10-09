import React, { useCallback, useEffect, useState } from 'react';
import { authorizedFetch } from '../api';

async function readError(response, fallback) {
  try {
    const body = await response.json();
    if (body.message) return body.message;
    if (body.detail) return body.detail;
  } catch {
    // Use the HTTP status if the response has no JSON error body.
  }
  return `${fallback} (HTTP ${response.status}).`;
}

export default function AccountManagement({ token }) {
  const [accounts, setAccounts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    role: 'STAFF',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const loadAccounts = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await authorizedFetch('/api/users', token);
      if (!response.ok) throw new Error(await readError(response, 'Unable to load accounts'));
      setAccounts(await response.json());
    } catch (loadError) {
      setError(loadError.message || 'Unable to load accounts.');
      setAccounts([]);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadAccounts();
  }, [loadAccounts]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');
    try {
      const response = await authorizedFetch('/api/users', token, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error(await readError(response, 'Unable to create account'));

      const created = await response.json();
      setSuccess(`${created.role} account created for ${created.name}.`);
      setForm({ name: '', email: '', phone: '', address: '', password: '', role: 'STAFF' });
      await loadAccounts();
    } catch (saveError) {
      setError(saveError.message || 'Unable to create account.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="panel-card">
      <div className="panel-header">
        <div>
          <h2>Account Management</h2>
          <p>Create citizen, staff, and administrator accounts.</p>
        </div>
      </div>

      {error && <div className="alert-box error" role="alert">{error}</div>}
      {success && <div className="alert-box success" role="status">{success}</div>}

      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-row grid-2">
          <div className="form-group">
            <label htmlFor="accountName">Full name *</label>
            <input id="accountName" value={form.name} maxLength={120} required onChange={(event) => setForm({ ...form, name: event.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="accountRole">Account role *</label>
            <select id="accountRole" value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })}>
              <option value="CITIZEN">Citizen</option>
              <option value="STAFF">Staff</option>
              <option value="ADMIN">Administrator</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="accountEmail">Email *</label>
            <input id="accountEmail" type="email" autoComplete="email" maxLength={255} value={form.email} required onChange={(event) => setForm({ ...form, email: event.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="accountPhone">Phone *</label>
            <input id="accountPhone" type="tel" autoComplete="tel" maxLength={20} value={form.phone} required onChange={(event) => setForm({ ...form, phone: event.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="accountAddress">Address / area</label>
            <input id="accountAddress" autoComplete="street-address" maxLength={300} value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="accountPassword">Temporary password *</label>
            <input id="accountPassword" type="password" autoComplete="new-password" minLength={8} maxLength={72} value={form.password} required onChange={(event) => setForm({ ...form, password: event.target.value })} />
          </div>
        </div>
        <button type="submit" className="action-btn-primary" disabled={saving}>
          {saving ? 'Creating account…' : 'Create account'}
        </button>
      </form>

      <div className="panel-header" style={{ marginTop: '2rem' }}>
        <div>
          <h3>Existing accounts</h3>
          <p>{accounts.length} accounts</p>
        </div>
        <button type="button" className="action-btn-secondary" onClick={loadAccounts} disabled={loading}>
          Refresh
        </button>
      </div>
      {loading ? (
        <p>Loading accounts…</p>
      ) : accounts.length === 0 ? (
        <p>No accounts found.</p>
      ) : (
        <div className="table-responsive">
          <table className="complaints-table">
            <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Phone</th></tr></thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.id}>
                  <td>{account.name}</td>
                  <td>{account.email}</td>
                  <td>{account.role}</td>
                  <td>{account.phone || 'Not provided'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
