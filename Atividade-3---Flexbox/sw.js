const CACHE_NAME = 'animehub-v1';
const urlsToCache = [
  'index.html',
  'styles.css',
  'script.js',
  'manifest.json',
  'assets/Attack_on_Titan_Season_1.webp',
  'assets/demon slayer.jpg',
  'assets/your name.avif',
  'assets/one piece.jpg',
  'assets/castelo animado.avif',
  'assets/narutinho.jpg',
  'assets/aot_filme.jpg',
  'assets/o menino e a garça.jpg',
  'assets/demon_filme.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});