import React, { useState } from 'react';
import './App.css';

const DEGREE_OPTIONS = [
  { value: 'phd', label: 'Doctor of Philosophy (PhD)' },
  { value: 'masters', label: "Master's Degree" },
  { value: 'bachelor', label: "Bachelor's Degree" },
];

const DEFAULT_METADATA = {
  title: '',
  author: '',
  supervisor: '',
  coSupervisor: '',
  faculty: '',
  graduationYear: new Date().getFullYear(),
  degreeType: 'phd',
};

function App() {
  const [step, setStep] = useState('upload');
  const [filePath, setFilePath] = useState('');
  const [fileName, setFileName] = useState('');
  const [metadata, setMetadata] = useState(DEFAULT_METADATA);
  const [latexOutput, setLatexOutput] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const isElectron = typeof window !== 'undefined' && !!window.electron;

  const handleBrowseFile = async () => {
    if (!isElectron) return;
    const selected = await window.electron.openFileDialog();
    if (selected) {
      setFilePath(selected);
      setFileName(selected.split(/[/\\]/).pop());
      setError('');
      setStep('metadata');
    }
  };

  const handleMetadataChange = (field, value) => {
    setMetadata(prev => ({ ...prev, [field]: value }));
  };

  const handleConvert = async () => {
    if (!filePath || !isElectron) return;
    setIsConverting(true);
    setError('');
    try {
      const result = await window.electron.convertFile(
        filePath,
        metadata,
        metadata.degreeType
      );
      if (result.success) {
        setLatexOutput(result.latex);
        setStep('result');
      } else {
        setError(result.error || 'Conversion failed. Please check your file and try again.');
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred during conversion.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleSave = async () => {
    if (!isElectron) return;
    const savePath = await window.electron.saveFileDialog();
    if (savePath) {
      const result = await window.electron.saveFile(savePath, latexOutput);
      if (result.success) {
        await window.electron.showNotification({
          type: 'info',
          title: 'File Saved',
          message: 'LaTeX file saved successfully!',
          detail: `Saved to: ${savePath}`,
        });
      } else {
        setError('Failed to save file: ' + (result.error || 'Unknown error'));
      }
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(latexOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_) {
      // Clipboard not available in all contexts
    }
  };

  const handleReset = () => {
    setStep('upload');
    setFilePath('');
    setFileName('');
    setLatexOutput('');
    setError('');
    setMetadata(DEFAULT_METADATA);
  };

  const stepIndex = { upload: 0, metadata: 1, result: 2 };
  const currentStep = stepIndex[step] ?? 0;

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-left">
          <span className="header-logo">📄</span>
          <div>
            <h1>UTM Thesis Converter</h1>
            <p className="header-sub">Word to LaTeX — Professional Thesis Formatting</p>
          </div>
        </div>
        <div className="steps-bar">
          {['Select File', 'Thesis Info', 'Download'].map((label, i) => (
            <React.Fragment key={label}>
              <div className={`step-item ${i === currentStep ? 'active' : i < currentStep ? 'done' : ''}`}>
                <div className="step-circle">{i < currentStep ? '✓' : i + 1}</div>
                <span className="step-label">{label}</span>
              </div>
              {i < 2 && <div className={`step-connector ${i < currentStep ? 'done' : ''}`} />}
            </React.Fragment>
          ))}
        </div>
      </header>

      {/* Main content */}
      <main className="app-main">
        {error && (
          <div className="error-banner" role="alert">
            <span>❌ {error}</span>
            <button onClick={() => setError('')} aria-label="Dismiss error">×</button>
          </div>
        )}

        {/* Step 1: Upload */}
        {step === 'upload' && (
          <div className="card">
            <h2>Step 1: Select Your Word Document</h2>
            <p className="card-desc">
              Choose the <strong>.docx</strong> or <strong>.doc</strong> file of your thesis to begin the conversion.
            </p>
            <button
              className="upload-area"
              onClick={handleBrowseFile}
              aria-label="Browse for Word document"
            >
              <div className="upload-icon">📁</div>
              <p className="upload-title">Click to Browse for Your Thesis File</p>
              <span className="upload-hint">Supports .docx and .doc formats</span>
            </button>
          </div>
        )}

        {/* Step 2: Metadata */}
        {step === 'metadata' && (
          <div className="card">
            <h2>Step 2: Thesis Information</h2>
            <p className="card-desc">
              File selected: <strong className="file-name">📄 {fileName}</strong>
            </p>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="title">Thesis Title <span className="required">*</span></label>
                <input
                  id="title"
                  type="text"
                  value={metadata.title}
                  onChange={e => handleMetadataChange('title', e.target.value)}
                  placeholder="e.g. Machine Learning in Healthcare"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author Full Name <span className="required">*</span></label>
                <input
                  id="author"
                  type="text"
                  value={metadata.author}
                  onChange={e => handleMetadataChange('author', e.target.value)}
                  placeholder="e.g. Ahmad bin Abdullah"
                />
              </div>
              <div className="form-group">
                <label htmlFor="supervisor">Supervisor <span className="required">*</span></label>
                <input
                  id="supervisor"
                  type="text"
                  value={metadata.supervisor}
                  onChange={e => handleMetadataChange('supervisor', e.target.value)}
                  placeholder="e.g. Prof. Dr. Siti Binti Hassan"
                />
              </div>
              <div className="form-group">
                <label htmlFor="coSupervisor">Co-Supervisor <span className="optional">(optional)</span></label>
                <input
                  id="coSupervisor"
                  type="text"
                  value={metadata.coSupervisor}
                  onChange={e => handleMetadataChange('coSupervisor', e.target.value)}
                  placeholder="e.g. Dr. Lee Wei Ming"
                />
              </div>
              <div className="form-group">
                <label htmlFor="faculty">Faculty</label>
                <input
                  id="faculty"
                  type="text"
                  value={metadata.faculty}
                  onChange={e => handleMetadataChange('faculty', e.target.value)}
                  placeholder="e.g. Faculty of Computing"
                />
              </div>
              <div className="form-group">
                <label htmlFor="year">Graduation Year</label>
                <input
                  id="year"
                  type="number"
                  value={metadata.graduationYear}
                  onChange={e => handleMetadataChange('graduationYear', parseInt(e.target.value) || new Date().getFullYear())}
                  min="2000"
                  max="2035"
                />
              </div>
              <div className="form-group full-width">
                <label htmlFor="degree">Degree Type</label>
                <select
                  id="degree"
                  value={metadata.degreeType}
                  onChange={e => handleMetadataChange('degreeType', e.target.value)}
                >
                  {DEGREE_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="button-row">
              <button className="btn-secondary" onClick={() => setStep('upload')}>
                ← Back
              </button>
              <button
                className="btn-primary"
                onClick={handleConvert}
                disabled={isConverting || !metadata.title.trim() || !metadata.author.trim() || !metadata.supervisor.trim()}
              >
                {isConverting ? '⏳ Converting...' : 'Convert to LaTeX →'}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Result */}
        {step === 'result' && (
          <div className="card">
            <h2>Step 3: Download Your LaTeX File</h2>
            <div className="success-banner">
              ✅ Conversion successful! Your thesis has been converted to LaTeX format.
            </div>
            <div className="preview-box">
              <div className="preview-header">
                <span>LaTeX Preview</span>
                <button className="btn-copy" onClick={handleCopy}>
                  {copied ? '✓ Copied!' : '📋 Copy All'}
                </button>
              </div>
              <pre className="preview-content">
                {latexOutput.length > 3000
                  ? latexOutput.substring(0, 3000) + '\n\n... [truncated — full content saved in file]'
                  : latexOutput}
              </pre>
            </div>
            <div className="button-row">
              <button className="btn-secondary" onClick={handleReset}>
                🔄 Convert Another File
              </button>
              <button className="btn-primary" onClick={handleSave}>
                💾 Save .tex File
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        UTM Thesis Converter v1.0 &nbsp;·&nbsp; Built for Malaysian students
      </footer>
    </div>
  );
}

export default App;
