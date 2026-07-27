import React, { useState, useEffect } from 'react';
import '../styles/OfflineIndicator.css';
import { offlineDetector } from '../utils/OfflineDetector';

export const OfflineIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const unsubscribe = offlineDetector.subscribe(setIsOnline);
    return unsubscribe;
  }, []);

  if (isOnline) {
    return (
      <div className="offline-indicator online">
        <span className="indicator-dot"></span>
        <span className="indicator-text">🟢 Online</span>
      </div>
    );
  }

  return (
    <div className="offline-indicator offline">
      <span className="indicator-dot"></span>
      <span className="indicator-text">🔴 Offline - Working Locally</span>
    </div>
  );
};
