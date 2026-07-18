const CACHE = 'kaspi-qr-v2';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './assets/галочка.svg', './assets/calf-promo.jpg', './assets/calf.jpg'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));
