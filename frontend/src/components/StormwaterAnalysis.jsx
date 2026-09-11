import React, { useState } from 'react';

export default function StormwaterAnalysis() {
  // Runoff Form State
  const [runoffForm, setRunoffForm] = useState({
    area: 1000,
    rainfallIntensity: 50,
    runoffCoefficient: 0.7,
  });
  const [runoffResult, setRunoffResult] = useState(null);
  const [loadingRunoff, setLoadingRunoff] = useState(false);

  // Storage Form State
  const [storageForm, setStorageForm] = useState({
    length: 20,
    width: 10,
    depth: 4,
  });
  const [storageResult, setStorageResult] = useState(null);
  const [loadingStorage, setLoadingStorage] = useState(false);

  const [calcError, setCalcError] = useState('');

  const handleCalculateRunoff = async (e) => {
    e.preventDefault();
    setLoadingRunoff(true);
    setCalcError('');
    try {
      const res = await fetch('/api/runoff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          area: parseFloat(runoffForm.area),
          rainfallIntensity: parseFloat(runoffForm.rainfallIntensity),
          runoffCoefficient: parseFloat(runoffForm.runoffCoefficient),
        }),
      });

      if (!res.ok) throw new Error('Runoff calculation failed.');

      const data = await res.json();
      setRunoffResult(data.runoffVolume);
    } catch (err) {
      setCalcError(err.message);
    } finally {
      setLoadingRunoff(false);
    }
  };

  const handleCalculateStorage = async (e) => {
    e.preventDefault();
    setLoadingStorage(true);
    setCalcError('');
    try {
      const res = await fetch('/api/storage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          length: parseFloat(storageForm.length),
          width: parseFloat(storageForm.width),
          depth: parseFloat(storageForm.depth),
        }),
      });

      if (!res.ok) throw new Error('Storage calculation failed.');

      const data = await res.json();
      setStorageResult(data.storageCapacity);
    } catch (err) {
      setCalcError(err.message);
    } finally {
      setLoadingStorage(false);
    }
  };

  return (
    <div className="analysis-panel panel-card">
      <div className="panel-header">
        <div>
          <h2>🌊 Stormwater &amp; Hydrologic Analysis Tool</h2>
          <p>Engineering calculators powered by Spring Boot backend hydrologic APIs (`/api/runoff` &amp; `/api/storage`).</p>
        </div>
      </div>

      {calcError && <div className="alert-box error">⚠️ {calcError}</div>}

      <div className="analysis-grid">
        {/* Calculator 1: Stormwater Runoff Volume */}
        <div className="calc-card">
          <div className="calc-header">
            <h3>🌧️ Stormwater Runoff Volume Calculator</h3>
            <span>API: <code>POST /api/runoff</code></span>
          </div>
          <p className="formula-tag">Formula: Q = Area (A) × Rainfall Intensity (I) × Runoff Coeff (C)</p>

          <form onSubmit={handleCalculateRunoff}>
            <div className="form-group">
              <label>Catchment Area (m²)</label>
              <input
                type="number"
                step="any"
                required
                value={runoffForm.area}
                onChange={(e) => setRunoffForm({ ...runoffForm, area: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Rainfall Intensity (mm/hr)</label>
              <input
                type="number"
                step="any"
                required
                value={runoffForm.rainfallIntensity}
                onChange={(e) => setRunoffForm({ ...runoffForm, rainfallIntensity: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Runoff Coefficient (C: 0.1 to 1.0)</label>
              <input
                type="number"
                step="0.01"
                min="0.1"
                max="1.0"
                required
                value={runoffForm.runoffCoefficient}
                onChange={(e) => setRunoffForm({ ...runoffForm, runoffCoefficient: e.target.value })}
              />
              <small className="hint">0.7 - 0.9 for asphalt/concrete urban surfaces.</small>
            </div>

            <button type="submit" className="calc-btn" disabled={loadingRunoff}>
              {loadingRunoff ? 'Calculating...' : '⚡ Compute Peak Runoff Volume'}
            </button>
          </form>

          {runoffResult !== null && (
            <div className="calc-result-box">
              <span className="result-label">Computed Peak Runoff Volume:</span>
              <strong className="result-value">{runoffResult.toLocaleString()} m³/hr</strong>
            </div>
          )}
        </div>

        {/* Calculator 2: Basin Storage Capacity */}
        <div className="calc-card">
          <div className="calc-header">
            <h3>🏗️ Retention Basin Storage Capacity</h3>
            <span>API: <code>POST /api/storage</code></span>
          </div>
          <p className="formula-tag">Formula: Volume = Length (L) × Width (W) × Depth (D)</p>

          <form onSubmit={handleCalculateStorage}>
            <div className="form-group">
              <label>Basin Length (meters)</label>
              <input
                type="number"
                step="any"
                required
                value={storageForm.length}
                onChange={(e) => setStorageForm({ ...storageForm, length: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Basin Width (meters)</label>
              <input
                type="number"
                step="any"
                required
                value={storageForm.width}
                onChange={(e) => setStorageForm({ ...storageForm, width: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Basin Effective Depth (meters)</label>
              <input
                type="number"
                step="any"
                required
                value={storageForm.depth}
                onChange={(e) => setStorageForm({ ...storageForm, depth: e.target.value })}
              />
            </div>

            <button type="submit" className="calc-btn" disabled={loadingStorage}>
              {loadingStorage ? 'Calculating...' : '⚡ Compute Retention Capacity'}
            </button>
          </form>

          {storageResult !== null && (
            <div className="calc-result-box">
              <span className="result-label">Total Retention Storage Capacity:</span>
              <strong className="result-value">{storageResult.toLocaleString()} m³ (Liters: {(storageResult * 1000).toLocaleString()})</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
