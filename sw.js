// self.addEventListener('install', e => {
//  e.waitUntil(
//    // after the service worker is installed,
//    // open a new cache
//    caches.open('my-pwa-cache').then(cache => {
//      // add all URLs of resources we want to cache
//      return cache.addAll([
//        '/',
//        '/index.html',
//        '/img/logo.png',
//        '/css/style.css',
//        '/js/jquery.js',
//        '/js/particles.min.js',
//      ]);
//    })
//  );
// });

/** An empty service worker! */
// self.addEventListener('fetch', function(event) {
//   /** An empty fetch handler! */
// });
// 
// Use a cacheName for cache versioning
var cacheName = 'v1:static';

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                './',
                './css/style.css',
                './js/jquery.js',
                './js/main.js',
                './js/particles.min.js',
                './js/aos.js',
                // './css/fonts/roboto.woff',
                // './offline.html'
            ]).then(function() {
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a URL…
self.addEventListener('fetch', function(event) {
    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});
