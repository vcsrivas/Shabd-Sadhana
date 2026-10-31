// WordTrio offline helper. Keeps the app opening when the phone is briefly offline.
// It only handles the app's own files and the Excel reader; pronunciation audio,
// dictionary lookups and fonts go straight to the network untouched.
const CACHE = 'wordtrio-v6';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  const mine = url.origin === self.location.origin || url.hostname === 'cdnjs.cloudflare.com';
  if (req.method !== 'GET' || !mine || req.headers.has('range') || req.destination === 'audio' || req.destination === 'video') return;
  e.respondWith(
    fetch(req).then(r => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return r; })
      .catch(() => caches.match(req).then(r => r || caches.match('index.html')))
  );
});
