// WordTrio offline helper: keeps the app working when the phone is briefly offline.
// words.xlsx and index.html are always fetched fresh when online, so updates appear immediately.
const CACHE = 'wordtrio-v1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.hostname === 'api.dictionaryapi.dev') return; // meanings are cached by the app itself
  e.respondWith(
    fetch(e.request).then(r => { const copy = r.clone(); if (r.ok) caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request))
  );
});
