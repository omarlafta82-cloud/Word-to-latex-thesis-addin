import React, { useState } from 'react';
import './App.css';

const initialMetadata = {
  title: '',
  author: '',
  supervisor: '',
  coSupervisor: '',
  faculty: '',
  graduationYear: String(new Date().getFullYear()),
  abstract: '',
};
const UNIVERSITY_ID = 'utm';

export default function App() {
  const [filePath, setFilePath] = useState('');
  const [metadata, setMetadata] = useState(initialMetadata);
  const [degreeType, setDegreeType] = useState('phd');
  const [latexOutput, setLatexOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const chooseFile = async () => {
    const selected = await window.electron.openFileDialog();
    if (selected) setFilePath(selected);
  };

  const convert = async () => {
    if (!filePath) {
      await window.electron.showNotification({
        type: 'warning',
        title: 'Missing file',
        message: 'Please select a Word file first.',
      });
      return;
    }

    setLoading(true);
    const result = await window.electron.convertDocx(filePath, metadata, UNIVERSITY_ID, degreeType);
    setLoading(false);

    if (!result.success) {
      await window.electron.showNotification({
        type: 'error',
        title: 'Conversion failed',
        message: result.error || 'Unknown conversion error',
      });
      return;
    }

    setLatexOutput(result.latex);
  };

  const save = async () => {
    if (!latexOutput) return;
    const target = await window.electron.saveFileDialog();
    if (!target) return;

    const result = await window.electron.saveFile(target, latexOutput);
    await window.electron.showNotification({
      type: result.success ? 'info' : 'error',
      title: result.success ? 'Saved' : 'Save failed',
      message: result.success ? `Saved to ${target}` : result.error,
    });
  };

  const onField = (field) => (e) => {
    setMetadata((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="app">
      <h1>UTM Thesis Converter</h1>
      <p>Convert DOCX thesis files to UTM LaTeX format.</p>

      <div className="panel">
        <button onClick={chooseFile}>Choose .docx File</button>
        <span className="file-path">{filePath || 'No file selected'}</span>
      </div>

      <div className="grid">
        <input placeholder="Title" value={metadata.title} onChange={onField('title')} />
        <input placeholder="Author" value={metadata.author} onChange={onField('author')} />
        <input placeholder="Supervisor" value={metadata.supervisor} onChange={onField('supervisor')} />
        <input placeholder="Co-supervisor" value={metadata.coSupervisor} onChange={onField('coSupervisor')} />
        <input placeholder="Faculty" value={metadata.faculty} onChange={onField('faculty')} />
        <input placeholder="Graduation year" value={metadata.graduationYear} onChange={onField('graduationYear')} />
      </div>

      <textarea placeholder="Abstract" value={metadata.abstract} onChange={onField('abstract')} rows={4} />

      <div className="panel">
        <label>
          Degree Type
          <select value={degreeType} onChange={(e) => setDegreeType(e.target.value)}>
            <option value="phd">PhD</option>
            <option value="master">Master</option>
          </select>
        </label>
        <button onClick={convert} disabled={loading}>{loading ? 'Converting...' : 'Convert'}</button>
        <button onClick={save} disabled={!latexOutput}>Save .tex</button>
      </div>

      <textarea value={latexOutput} readOnly rows={16} placeholder="LaTeX output will appear here." />
    </div>
  );
}
