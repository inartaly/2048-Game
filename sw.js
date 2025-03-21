self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("2048-cache").then(cache => {
      return cache.addAll([
        "./index.html",
        "./css/styles.css",
        "./js/game.js",
        "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
