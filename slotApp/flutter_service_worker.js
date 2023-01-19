'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ab26cbb451c847b9f216d84bc3a92646",
"assets/assets/a.png": "22f115f83e5a077c72c66ca55d675dd4",
"assets/assets/audios/2freeSound.mp3": "7e6e9f8cb7d19794433ac4ed33b023ec",
"assets/assets/audios/3freeSound.mp3": "62af8d6495ffef6b2e39c6fa42b4ebc7",
"assets/assets/audios/coinSound.mp3": "9676e6742593e15271f5e4a5a8a6cbe6",
"assets/assets/audios/dracula_laugh.mp3": "63a1b7467fc9f857474d25de7906e480",
"assets/assets/audios/fastSpin.mp3": "b9b54907e698dfb43d5a575c8b226d4c",
"assets/assets/audios/first.mp3": "0cd025ffed6d27e305ed02f90ceaed8b",
"assets/assets/audios/freeSound.mp3": "1e228dc7b7154a75f4770f8e8fba646a",
"assets/assets/audios/jackpotSound.mp3": "9b3a8c92e984ec5e21bac92c86577c6a",
"assets/assets/audios/second.mp3": "2e6cb3643ad90b1972524d35ab8e5b16",
"assets/assets/audios/spinSound.mp3": "484f783c35db5cb98f0842d3f3091c4c",
"assets/assets/audios/themeMusic.mp3": "72fc06fb588f8d67315de383d7108ed7",
"assets/assets/audios/third.mp3": "87bce9ccc0cefe0f9bd0fed00aa67c26",
"assets/assets/background.png": "13072dc782ac6b1f87f6776f406037bd",
"assets/assets/casino.jpg": "222f884da67461716523e858521a92f8",
"assets/assets/coin.png": "2ab2e94d7b56d2887cb0a2e12f32fd39",
"assets/assets/coins.gif": "15dbfb37e8338e2cc27bc1849d044c4b",
"assets/assets/five_of_a_kind.png": "160483b1824d64ef974e32d0c638b0b1",
"assets/assets/free.png": "a61268182890f6767a053d01ea665b09",
"assets/assets/free_game1.png": "b24a1a4a4ddcc8125293cfb4a85c9933",
"assets/assets/free_games.png": "54ab181969f0d57bddfb89410aaca700",
"assets/assets/ghost.gif": "53d5afb80c21ba0441ac44befd3f977a",
"assets/assets/ghostPic.png": "21d07e448bcb3fd8e3b2b3ef94a97970",
"assets/assets/girl.png": "2b54c4ab0ebcdb90a6112a715e9ff926",
"assets/assets/jackpot.png": "00673dfa47974aff896468f513741de8",
"assets/assets/k.png": "816e2dd962545ab1cadff573806cec4b",
"assets/assets/man.png": "0b2e65b12db829ff045c8b1b066ada73",
"assets/assets/pumpkinPic.png": "cd49b5b147c2561ab1f73f1bfc7e78a0",
"assets/assets/q.png": "965b45e456c7987aa0d0f36a5fb31fd9",
"assets/assets/scatter.gif": "bdb257dec1ae277939fe9d2a380ed567",
"assets/assets/tra_a.png": "fd8d1222563793488e2def0640554135",
"assets/assets/tra_f.png": "dbd8a0d2b9c033941fd4d5699f4264f8",
"assets/assets/tra_j.png": "8a560f561b7a5125ed1b629efc483365",
"assets/assets/tra_k.png": "23b3b34687d29221a6d79f7182980269",
"assets/assets/tra_q.png": "502f7f5b190b42ba9e5763164e6ce6e7",
"assets/assets/tra_w.png": "b1f25a7d2e6b922f02cf1e3e7561a11d",
"assets/assets/vampire.gif": "7b09621b1bc5e2e880914ff77f2c2083",
"assets/assets/vampireEnd.gif": "0f04a74454cbf136c2545653c1bad0b4",
"assets/assets/wild.gif": "3c1ffef0e5fd55bd12ddcffca4cdd693",
"assets/assets/wild.png": "8072c39a51f900f5c35114efa238dada",
"assets/assets/wild_mask.png": "cf0ffee2913a1d8c0f0f656d971b1c79",
"assets/assets/witch.gif": "f69d11cb7e36c12ba8373338ab67e73e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "58a0f67e1dfa639ff3f5b76af493825a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "fed8745cf4fae1072c32d84e19d1fbca",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51b06ebaade1509ae828cd6d11af1ea2",
"/": "51b06ebaade1509ae828cd6d11af1ea2",
"main.dart.js": "c26900dd1a0c48cf4cf20d2ac09124a4",
"manifest.json": "c06e3d5accf0d575928b8d3234abab10",
"version.json": "63dbdfcf7a311e855c97261d534e81f6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
