self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('chamapro-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
  );
});
