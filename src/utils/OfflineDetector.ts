/**
 * Offline Detector
 * Detects online/offline status and notifies the app
 */

export class OfflineDetector {
  private isOnline: boolean = navigator.onLine;
  private listeners: ((isOnline: boolean) => void)[] = [];

  constructor() {
    this.setupEventListeners();
  }

  /**
   * Setup online/offline event listeners
   */
  private setupEventListeners(): void {
    window.addEventListener('online', () => {
      console.log('🟢 Back online!');
      this.isOnline = true;
      this.notifyListeners();
    });

    window.addEventListener('offline', () => {
      console.log('🔴 Gone offline!');
      this.isOnline = false;
      this.notifyListeners();
    });
  }

  /**
   * Subscribe to online/offline changes
   */
  subscribe(listener: (isOnline: boolean) => void): () => void {
    this.listeners.push(listener);

    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  /**
   * Notify all listeners of status change
   */
  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.isOnline));
  }

  /**
   * Get current online status
   */
  getStatus(): boolean {
    return this.isOnline;
  }

  /**
   * Get status string
   */
  getStatusString(): string {
    return this.isOnline ? 'Online' : 'Offline';
  }
}

// Export singleton instance
export const offlineDetector = new OfflineDetector();
