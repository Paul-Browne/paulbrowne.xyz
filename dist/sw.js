var cacheName="v1::static";self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return e.addAll(["/","css/main.css","css/normalize.css","css/shrthnd.css"]).then(function(){return console.log("test"),self.skipWaiting()})}))}),self.addEventListener("fetch",function(n){n.respondWith(caches.open(cacheName).then(function(e){return e.match(n.request).then(function(e){return e||fetch(n.request)})}))});