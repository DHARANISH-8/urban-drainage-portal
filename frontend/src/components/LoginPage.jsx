import React, { useState } from 'react';

const accounts = {
  CITIZEN: { label: 'Citizen' },
  STAFF: { label: 'Staff' },
  ADMIN: { label: 'Administrator' },
};

export default function LoginPage({ onLogin, notice = '' }) {
  const [mode, setMode] = useState('login');
  const [role, setRole] = useState('CITIZEN');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const selectRole = (nextRole) => {
    setRole(nextRole);
    setError('');
  };

  const switchMode = () => {
    if (mode === 'login') {
      setMode('register');
      setRole('CITIZEN');
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setPassword('');
    } else {
      setMode('login');
    }
    setError('');
  };

  const submit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const isRegistering = mode === 'register';
      if (isRegistering && role !== 'CITIZEN') {
        throw new Error('Staff and Administrator accounts must be created by an administrator from Account Management.');
      }
      const response = await fetch(isRegistering ? '/api/auth/register' : '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isRegistering
          ? { name, email, phone, password, address }
          : { email, password, role }),
      });
      const body = await response.json().catch(() => null);
      if (!response.ok) {
        if (!isRegistering && response.status === 401) {
          throw new Error('Invalid email or password.');
        }
        if (response.status >= 500) {
          throw new Error('Unable to connect to the server. Please try again.');
        }
        throw new Error(body?.message || body?.detail || `${isRegistering ? 'Registration' : 'Sign-in'} failed. Please try again.`);
      }
      if (!body?.token || !body?.role) {
        throw new Error('The sign-in service returned an invalid response. Please try again.');
      }
      onLogin(body);
    } catch (err) {
      setError(err instanceof TypeError
        ? 'Unable to connect to the server. Please try again.'
        : err.message || `Unable to ${mode === 'register' ? 'register' : 'sign in'}.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-visual" aria-label="Urban drainage network monitoring">
        <div className="login-visual-brand">
          <span className="login-brand-icon" aria-hidden="true">⌁</span>
          <span>URBAN DRAINAGE <small>Municipal operations</small></span>
        </div>
        <div className="login-visual-copy">
          <span className="eyebrow">SMART CITY INFRASTRUCTURE</span>
          <h1>Every flow.<br />Under control.</h1>
          <p>One connected view of the drainage network keeping our neighborhoods moving.</p>
        </div>
        <div className="network-visual" aria-hidden="true">
          <svg viewBox="0 0 620 330" role="presentation">
            <path className="network-route" d="M40 246h112l58-60h94l62 62h95l115-116M152 246l64 55h112l38-53M304 186v-93h106l42 39h114M216 186l-34-91h-90" />
            <path className="network-secondary" d="M41 246h112l58-60h94l62 62h95l115-116M152 246l64 55h112l38-53M304 186v-93h106l42 39h114M216 186l-34-91h-90" />
            <g className="network-nodes">
              <circle cx="40" cy="246" r="7" /><circle cx="152" cy="246" r="8" />
              <circle cx="216" cy="186" r="7" /><circle cx="304" cy="186" r="9" />
              <circle cx="366" cy="248" r="7" /><circle cx="461" cy="248" r="8" />
              <circle cx="576" cy="132" r="9" /><circle cx="304" cy="93" r="7" />
              <circle cx="182" cy="95" r="7" /><circle cx="216" cy="301" r="6" />
              <circle cx="328" cy="301" r="6" /><circle cx="452" cy="132" r="6" />
            </g>
            <g className="network-buildings">
              <path d="M72 216v-27h18v27m9 0v-44h22v44m257 0v-31h18v31m33-20v-39h23v39m35 0v-54h29v54" />
              <path d="M266 159v-22h17v22m48-81v-19h21v19m-231 0V47h19v31" />
            </g>
          </svg>
          <div className="network-caption"><span className="network-live-dot" /> NETWORK MONITORING <span>LIVE</span></div>
        </div>
        <div className="login-visual-footer">
          <span>PUBLIC WORKS · WATER SYSTEMS</span>
          <span>BUILT FOR THE CITY</span>
        </div>
      </section>
      <section className="login-card">
        <div className="login-brand">
          <span className="login-brand-icon">🌊</span>
          <div><h1>Urban Drainage Portal</h1><p>Municipal Department</p></div>
        </div>
        <h2>{mode === 'register' ? 'Create a citizen account' : 'Sign in to your workspace'}</h2>
        <p className="login-intro">{mode === 'register'
          ? 'Register to report drainage issues and follow their progress.'
          : 'Choose your account type and enter your account credentials.'}</p>
        {mode === 'login' && (
          <div className="login-role-options" role="group" aria-label="Sign in as">
            {Object.entries(accounts).map(([key, account]) => (
              <button
                key={key}
                type="button"
                className={role === key ? 'selected' : ''}
                aria-pressed={role === key}
                onClick={() => selectRole(key)}
              >
                {account.label}
              </button>
            ))}
          </div>
        )}
        <form onSubmit={submit} className="login-form">
          {mode === 'register' && (
            <>
              <label>Full name<input type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required maxLength={120} /></label>
              <label>Mobile number<input type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required maxLength={20} /></label>
            </>
          )}
          <label>
            Email
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          {mode === 'register' && (
            <label>Address / area<textarea autoComplete="street-address" value={address} onChange={(e) => setAddress(e.target.value)} required maxLength={300} rows={2} /></label>
          )}
          <label>
            Password
            <input
              type="password"
              autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={mode === 'register' ? 8 : undefined}
            />
          </label>
          {(error || notice) && <p className="login-error" role="alert">{error || notice}</p>}
          <button className="login-submit" type="submit" disabled={submitting}>
            {submitting ? (mode === 'register' ? 'Creating account…' : 'Signing in…')
              : mode === 'register' ? 'Create account' : `Sign in as ${accounts[role].label}`}
          </button>
        </form>
        <p className="login-mode-switch">
          {mode === 'register' ? 'Already have an account?' : 'New to the portal?'}
          {' '}<button type="button" onClick={switchMode}>{mode === 'register' ? 'Sign in' : 'Create a citizen account'}</button>
        </p>
      </section>
    </main>
  );
}
