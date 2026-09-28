// Cooltivo: funzionamento offline. Serve i file dalla cache e li aggiorna in background.
const CACHE = 'cooltivo-v1';
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/favicon-32.png",
  "./fonts/instrument-serif-400.woff2",
  "./fonts/overlock-400.woff2",
  "./fonts/overlock-700.woff2",
  "./fonts/orbitron-400.woff2",
  "./fonts/orbitron-700.woff2",
  "./fonts/roboto-400.woff2",
  "./fonts/roboto-500.woff2",
  "./fonts/roboto-700.woff2"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(cache => cache.match(e.request, { ignoreSearch: true }).then(cached => {
    const fresh = fetch(e.request).then(res => {
      if (res.ok) cache.put(e.request, res.clone());
      return res;
    }).catch(() => cached);
    return cached || fresh;
  })));
});
