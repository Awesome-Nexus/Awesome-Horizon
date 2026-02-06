// Service Worker for Awesome Horizon PWA
const CACHE_NAME = 'awesome-horizon-v2'
const OFFLINE_PAGE = '/offline'

const STATIC_ASSETS = [
  '/',
  '/science',
  '/technology',
  '/engineering',
  '/arts',
  '/mathematics',
  '/about',
  '/favicon.svg',
  '/logo.svg',
  '/apple-touch-icon.png'
]

const CACHE_STRATEGIES = {
  networkFirst: ['/api/', '/resources'],
  cacheFirst: ['/fonts/', '/images/', '/_nuxt/', '/icon-'],
  staleWhileRevalidate: ['/']
}

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.error('Failed to cache static assets:', err)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => {
              console.log('Deleting old cache:', name)
              return caches.delete(name)
            })
        )
      })
      .then(() => self.clients.claim())
  )
})

// Fetch event - handle requests with appropriate strategy
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip cross-origin requests (except for CDN)
  if (url.origin !== location.origin && !url.hostname.includes('vercel.app')) {
    return
  }

  // Apply cache-first strategy for static assets
  if (CACHE_STRATEGIES.cacheFirst.some((path) => url.pathname.startsWith(path))) {
    event.respondWith(cacheFirst(request))
    return
  }

  // Apply network-first strategy for API requests
  if (CACHE_STRATEGIES.networkFirst.some((path) => url.pathname.startsWith(path))) {
    event.respondWith(networkFirst(request))
    return
  }

  // Apply stale-while-revalidate for pages
  event.respondWith(staleWhileRevalidate(request))
})

// Cache-first strategy
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request)
  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.error('Cache-first fetch failed:', error)
    return new Response('Offline', { status: 503 })
  }
}

// Network-first strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    return new Response(JSON.stringify({ error: 'Offline' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request)

  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        const cache = caches.open(CACHE_NAME)
        cache.then((c) => c.put(request, networkResponse.clone()))
      }
      return networkResponse
    })
    .catch(() => {
      // Network failed, but we might have a cached response
      return cachedResponse
    })

  return cachedResponse || fetchPromise
}

// Handle push notifications
self.addEventListener('push', (event) => {
  if (!event.data) return

  const data = event.data.json()
  const options = {
    body: data.body || 'New content available',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: data.id || 1
    },
    actions: [
      { action: 'open', title: 'Open' },
      { action: 'close', title: 'Close' }
    ]
  }

  event.waitUntil(
    self.registration.showNotification(data.title || 'Awesome Horizon', options)
  )
})

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'close') return

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((windowClients) => {
        // Focus existing window or open new one
        for (const client of windowClients) {
          if (client.url === '/' && 'focus' in client) {
            return client.focus()
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/')
        }
      })
  )
})

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-favorites') {
    event.waitUntil(syncFavorites())
  }
})

async function syncFavorites() {
  // Sync offline favorites when back online
  console.log('Syncing favorites...')
}
