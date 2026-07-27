import React, { useState, useEffect } from 'react';
import '../styles/OfflineHistory.css';
import { OfflineStorage, StoredConversion } from '../utils/OfflineStorage';
import { offlineStorage } from '../utils/OfflineStorage';

interface OfflineHistoryProps {
  onRestore: (conversion: StoredConversion) => void;
}

export const OfflineHistory: React.FC<OfflineHistoryProps> = ({ onRestore }) => {
  const [conversions, setConversions] = useState<StoredConversion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [stats, setStats] = useState({ totalConversions: 0, oldestConversion: 0, newestConversion: 0 });

  useEffect(() => {
    loadConversions();
  }, []);

  const loadConversions = async () => {
    try {
      const stored = await offlineStorage.getAllConversions();
      setConversions(stored.sort((a, b) => b.timestamp - a.timestamp));

      const storageStats = await offlineStorage.getStats();
      setStats(storageStats);
    } catch (error) {
      console.error('Failed to load conversions:', error);
    }
  };

  const handleRestore = (conversion: StoredConversion) => {
    onRestore(conversion);
  };

  const handleDelete = async (id: string) => {
    try {
      await offlineStorage.deleteConversion(id);
      await loadConversions();
    } catch (error) {
      console.error('Failed to delete conversion:', error);
    }
  };

  const handleClearAll = async () => {
    if (window.confirm('Are you sure? This will delete all offline conversions.')) {
      try {
        await offlineStorage.clearAll();
        await loadConversions();
      } catch (error) {
        console.error('Failed to clear conversions:', error);
      }
    }
  };

  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleString();
  };

  if (stats.totalConversions === 0) {
    return null;
  }

  return (
    <div className="offline-history">
      <button className="history-toggle" onClick={() => setIsOpen(!isOpen)}>
        📜 Offline Conversions ({stats.totalConversions})
      </button>

      {isOpen && (
        <div className="history-panel">
          <div className="history-header">
            <h3>Saved Conversions</h3>
            <button className="clear-btn" onClick={handleClearAll}>
              🗑️ Clear All
            </button>
          </div>

          {conversions.length === 0 ? (
            <p className="empty-message">No offline conversions saved</p>
          ) : (
            <div className="history-list">
              {conversions.map(conversion => (
                <div key={conversion.id} className="history-item">
                  <div className="history-info">
                    <h4>{conversion.documentName}</h4>
                    <p className="document-title">{conversion.metadata.title}</p>
                    <p className="document-meta">
                      {conversion.university.toUpperCase()} • {conversion.degreeType}
                    </p>
                    <p className="timestamp">{formatDate(conversion.timestamp)}</p>
                  </div>
                  <div className="history-actions">
                    <button
                      className="restore-btn"
                      onClick={() => handleRestore(conversion)}
                      title="Restore this conversion"
                    >
                      📂 Restore
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(conversion.id)}
                      title="Delete this conversion"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
