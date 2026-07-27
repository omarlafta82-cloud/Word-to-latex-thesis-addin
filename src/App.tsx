import React, { useState, useEffect } from 'react';
import { TemplateSelector } from './components/TemplateSelector';
import { MetadataForm } from './components/MetadataForm';
import { ConversionPreview } from './components/ConversionPreview';
import { OfflineIndicator } from './components/OfflineIndicator';
import { OfflineHistory } from './components/OfflineHistory';
import { DocumentExtractor } from './converters/DocumentExtractor';
import { LaTeXConverter } from './converters/LaTeXConverter';
import { offlineStorage, StoredConversion } from './utils/OfflineStorage';
import { offlineDetector } from './utils/OfflineDetector';
import './App.css';

interface AppState {
  step: 'template' | 'metadata' | 'preview' | 'complete';
  selectedUniversity: string;
  selectedDegreeType: string;
  metadata: any;
  latexOutput: string;
  isConverting: boolean;
  error: string | null;
  isOnline: boolean;
}

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    step: 'template',
    selectedUniversity: 'utm',
    selectedDegreeType: '',
    metadata: {},
    latexOutput: '',
    isConverting: false,
    error: null,
    isOnline: navigator.onLine,
  });

  // Initialize offline storage and detect online/offline changes
  useEffect(() => {
    const initOfflineStorage = async () => {
      try {
        await offlineStorage.init();
        console.log('✅ Offline storage initialized');
      } catch (error) {
        console.error('❌ Failed to initialize offline storage:', error);
      }
    };

    initOfflineStorage();

    // Subscribe to online/offline changes
    const unsubscribe = offlineDetector.subscribe(isOnline => {
      setState(prev => ({ ...prev, isOnline }));
      console.log(isOnline ? '🟢 Online' : '🔴 Offline');
    });

    return unsubscribe;
  }, []);

  const handleTemplateSelect = (university: string, degreeType: string) => {
    setState(prev => ({
      ...prev,
      selectedUniversity: university,
      selectedDegreeType: degreeType,
      step: 'metadata',
    }));
  };

  const handleMetadataSubmit = async (metadata: any) => {
    setState(prev => ({ ...prev, metadata, step: 'preview', isConverting: true, error: null }));

    try {
      // Extract document content from Word
      const extractor = new DocumentExtractor();
      const documentContent = await extractor.extractFromWord();

      // Convert to LaTeX
      const converter = new LaTeXConverter(
        state.selectedUniversity,
        state.selectedDegreeType,
        metadata
      );
      const latexOutput = await converter.convert(documentContent);

      // Save to offline storage
      const conversion: StoredConversion = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        documentName: documentContent.metadata.title || 'Untitled Document',
        metadata,
        latexOutput,
        university: state.selectedUniversity,
        degreeType: state.selectedDegreeType,
      };

      try {
        await offlineStorage.saveConversion(conversion);
        console.log('✅ Conversion saved offline');
      } catch (storageError) {
        console.warn('⚠️ Could not save to offline storage:', storageError);
      }

      setState(prev => ({
        ...prev,
        latexOutput,
        isConverting: false,
        step: 'preview',
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Conversion failed',
        isConverting: false,
      }));
    }
  };

  const handleRestoreConversion = (conversion: StoredConversion) => {
    setState(prev => ({
      ...prev,
      metadata: conversion.metadata,
      latexOutput: conversion.latexOutput,
      selectedUniversity: conversion.university,
      selectedDegreeType: conversion.degreeType,
      step: 'preview',
    }));
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([state.latexOutput], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'thesis.tex';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleReset = () => {
    setState({
      step: 'template',
      selectedUniversity: 'utm',
      selectedDegreeType: '',
      metadata: {},
      latexOutput: '',
      isConverting: false,
      error: null,
      isOnline: navigator.onLine,
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📄 UTM Thesis to LaTeX Converter</h1>
        <p>Convert your Word thesis to LaTeX format</p>
      </header>

      <main className="app-main">
        <OfflineIndicator />

        {state.error && (
          <div className="error-message">
            <strong>❌ Error:</strong> {state.error}
          </div>
        )}

        {state.step !== 'preview' && <OfflineHistory onRestore={handleRestoreConversion} />}

        {state.step === 'template' && (
          <TemplateSelector onSelect={handleTemplateSelect} />
        )}

        {state.step === 'metadata' && (
          <MetadataForm
            university={state.selectedUniversity}
            degreeType={state.selectedDegreeType}
            onSubmit={handleMetadataSubmit}
            isLoading={state.isConverting}
          />
        )}

        {state.step === 'preview' && (
          <ConversionPreview
            latexOutput={state.latexOutput}
            isLoading={state.isConverting}
            onDownload={handleDownload}
            onReset={handleReset}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>UTM Thesis Converter v1.1 | {state.isOnline ? '🟢 Online' : '🔴 Offline'} | Built for Malaysian students</p>
      </footer>
    </div>
  );
};

export default App;
