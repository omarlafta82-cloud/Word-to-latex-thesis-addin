/**
 * Offline Service Worker for UTM Thesis Converter
 * Enables the add-in to work completely offline
 */

const CACHE_NAME = 'utm-thesis-converter-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/taskpane.html',
  '/commands.html',
  '/manifest.xml',
  '/index.tsx',
  '/App.tsx',
  '/App.css',
  '/assets/style.css',
  '/components/TemplateSelector.tsx',
  '/components/MetadataForm.tsx',
  '/components/ConversionPreview.tsx',
  '/converters/DocumentExtractor.ts',
  '/converters/LaTeXConverter.ts',
  '/converters/StyleMapper.ts',
  '/templates/UTMTemplateGenerator.ts',
  '/styles/TemplateSelector.css',
  '/styles/MetadataForm.css',
  '/styles/ConversionPreview.css'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache).catch(err => {
          console.log('Cache addAll error:', err);
        });
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome extensions and other non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Offline - return cached version or offline page
        return caches.match(event.request)
          .then(response => response || new Response('Offline - Resource not cached'));
      })
  );
});
