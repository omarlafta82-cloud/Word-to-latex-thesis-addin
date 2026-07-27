/**
 * Offline Storage Manager
 * Manages IndexedDB for offline document storage and conversion history
 */

export interface StoredConversion {
  id: string;
  timestamp: number;
  documentName: string;
  metadata: any;
  latexOutput: string;
  university: string;
  degreeType: string;
}

const DB_NAME = 'utm-thesis-converter';
const STORE_NAME = 'conversions';
const DB_VERSION = 1;

export class OfflineStorage {
  private db: IDBDatabase | null = null;

  /**
   * Initialize the database
   */
  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => {
        console.error('Database failed to open');
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('Database opened successfully');
        resolve();
      };

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;

        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const objectStore = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          objectStore.createIndex('timestamp', 'timestamp', { unique: false });
          objectStore.createIndex('university', 'university', { unique: false });
          console.log('Object store created');
        }
      };
    });
  }

  /**
   * Save a conversion to offline storage
   */
  async saveConversion(conversion: StoredConversion): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.add(conversion);

      request.onerror = () => {
        console.error('Failed to save conversion');
        reject(request.error);
      };

      request.onsuccess = () => {
        console.log('Conversion saved offline:', conversion.id);
        resolve();
      };
    });
  }

  /**
   * Get all conversions from offline storage
   */
  async getAllConversions(): Promise<StoredConversion[]> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readonly');
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.getAll();

      request.onerror = () => {
        reject(request.error);
      };

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  }

  /**
   * Get a specific conversion by ID
   */
  async getConversion(id: string): Promise<StoredConversion | undefined> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readonly');
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.get(id);

      request.onerror = () => {
        reject(request.error);
      };

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  }

  /**
   * Delete a conversion from offline storage
   */
  async deleteConversion(id: string): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.delete(id);

      request.onerror = () => {
        reject(request.error);
      };

      request.onsuccess = () => {
        console.log('Conversion deleted:', id);
        resolve();
      };
    });
  }

  /**
   * Clear all conversions
   */
  async clearAll(): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const objectStore = transaction.objectStore(STORE_NAME);
      const request = objectStore.clear();

      request.onerror = () => {
        reject(request.error);
      };

      request.onsuccess = () => {
        console.log('All conversions cleared');
        resolve();
      };
    });
  }

  /**
   * Get storage statistics
   */
  async getStats(): Promise<{ totalConversions: number; oldestConversion: number; newestConversion: number }> {
    const conversions = await this.getAllConversions();

    if (conversions.length === 0) {
      return {
        totalConversions: 0,
        oldestConversion: 0,
        newestConversion: 0
      };
    }

    const timestamps = conversions.map(c => c.timestamp);

    return {
      totalConversions: conversions.length,
      oldestConversion: Math.min(...timestamps),
      newestConversion: Math.max(...timestamps)
    };
  }
}

// Export singleton instance
export const offlineStorage = new OfflineStorage();
