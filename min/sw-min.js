var cacheName="v1:static";self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return e.addAll(["./","./css/style.css","./js/jquery.js","./js/main.js","./js/particles.min.js","./js/aos.js"]).then(function(){self.skipWaiting()})}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(s){return s||fetch(e.request)}))});