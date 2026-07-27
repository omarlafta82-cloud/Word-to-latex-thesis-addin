import React, { useState } from 'react';
import '../styles/ConversionPreview.css';

interface ConversionPreviewProps {
  latexOutput: string;
  isLoading: boolean;
  onDownload: () => void;
  onReset: () => void;
}

export const ConversionPreview: React.FC<ConversionPreviewProps> = ({
  latexOutput,
  isLoading,
  onDownload,
  onReset
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(latexOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="conversion-preview">
        <div className="loading">
          <div className="spinner"></div>
          <h2>Converting your document to LaTeX...</h2>
          <p>This may take a few moments</p>
        </div>
      </div>
    );
  }

  return (
    <div className="conversion-preview">
      <div className="preview-card">
        <h2>LaTeX Conversion Complete! ✅</h2>

        <div className="preview-header">
          <p className="info">Your Word document has been successfully converted to LaTeX format.</p>
        </div>

        <div className="preview-container">
          <div className="preview-content">
            <pre><code>{latexOutput}</code></pre>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary" onClick={onDownload}>
            📥 Download as .tex file
          </button>
          <button className="btn btn-secondary" onClick={handleCopy}>
            {copied ? '✅ Copied!' : '📋 Copy to Clipboard'}
          </button>
          <button className="btn btn-outline" onClick={onReset}>
            🔄 Convert Another Document
          </button>
        </div>

        <div className="next-steps">
          <h3>Next Steps:</h3>
          <ol>
            <li>Download the .tex file</li>
            <li>Get the UTM LaTeX template files from your drive</li>
            <li>Open in Overleaf or local LaTeX editor</li>
            <li>Compile to PDF following UTM guidelines</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
