'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1afb5a1677d09b0b7c1c8aac2e028d09",
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
"assets/assets/bjTable.jpg": "5334defe844cb946aa1dbfb1adf157aa",
"assets/assets/blackjackFoto.png": "66f1d705bc798910722c4179d0787395",
"assets/assets/cardGames.jpg": "acb2aee84e895af795f18dc520f8b21a",
"assets/assets/cards/10_of_clubs.png": "9be00d8eeb5db1ed29a995d0a90981ad",
"assets/assets/cards/10_of_diamonds.png": "72239c4ff58c881b9c45e74fd3b5c4ea",
"assets/assets/cards/10_of_hearts.png": "a1db01362deefa2afa4fe0e3eabd8dc7",
"assets/assets/cards/10_of_spades.png": "c2b7cabd89a259a925ed9501c18d73b1",
"assets/assets/cards/2_of_clubs.png": "f74fad0c6a58e9bf831f0062588b6647",
"assets/assets/cards/2_of_diamonds.png": "323788450c99ea5d392d6a0e7b6d4900",
"assets/assets/cards/2_of_hearts.png": "31542f57b8dcc0e8bcbf5f1d624eb768",
"assets/assets/cards/2_of_spades.png": "3f0c0130597e467a073b82b68f726da6",
"assets/assets/cards/3_of_clubs.png": "15c063a813b8e349b32e5a5d95cd091f",
"assets/assets/cards/3_of_diamonds.png": "0b6d3d4c416ba3fe7ddd4fc98418f4d5",
"assets/assets/cards/3_of_hearts.png": "48ad63085bab1530786f2045463cddd7",
"assets/assets/cards/3_of_spades.png": "539938bb1c417d4afafb05585e1a569a",
"assets/assets/cards/4_of_clubs.png": "012293e5115e3c26b6a4b2daa2f643f1",
"assets/assets/cards/4_of_diamonds.png": "88a92171e1710a305f995d82989edf5a",
"assets/assets/cards/4_of_hearts.png": "0c534590165bbfb2f3fd7b2a80da1335",
"assets/assets/cards/4_of_spades.png": "93e3ad2b74bc9b9e490899c9d8751e20",
"assets/assets/cards/5_of_clubs.png": "819973008e50cfc2f741a2f32ae2e073",
"assets/assets/cards/5_of_diamonds.png": "bc312bbb4c045c0c444fb5b14f302ded",
"assets/assets/cards/5_of_hearts.png": "b551c3c9bc16cc05d3e18783f9f9cd1f",
"assets/assets/cards/5_of_spades.png": "cd3a331dc06293a988d5652e2b6c67f2",
"assets/assets/cards/6_of_clubs.png": "ff02f481840b9c368925614a99a54bde",
"assets/assets/cards/6_of_diamonds.png": "8bc013212c74b205ebcab063f8f98c54",
"assets/assets/cards/6_of_hearts.png": "e89432efe614b5dcb1838e51eab7b8de",
"assets/assets/cards/6_of_spades.png": "f32567fc5e64cb648ac378e6248e143d",
"assets/assets/cards/7_of_clubs.png": "a4eda631eab3f0a4d946f08e02c46bc6",
"assets/assets/cards/7_of_diamonds.png": "dcdc956a646aba107477429e0d9d9780",
"assets/assets/cards/7_of_hearts.png": "1488424849eddb86c981591b28028cc4",
"assets/assets/cards/7_of_spades.png": "8c113395f4faad0a2815cc3b381d0a29",
"assets/assets/cards/8_of_clubs.png": "b2569cd6b769c704787a0192628720b3",
"assets/assets/cards/8_of_diamonds.png": "4c685f73017895796585b7dd03f77c1b",
"assets/assets/cards/8_of_hearts.png": "8d255dae0d5a09b2094de420e6ff5704",
"assets/assets/cards/8_of_spades.png": "c12a4b62dbfd98e5baaed8f341c1999d",
"assets/assets/cards/9_of_clubs.png": "f2f628c663174fdece932a35c677178a",
"assets/assets/cards/9_of_diamonds.png": "27464bc237b09c06029f41aea5646554",
"assets/assets/cards/9_of_hearts.png": "9f766a2db8633492abc10dbad17e96a9",
"assets/assets/cards/9_of_spades.png": "0897fcef13707b622848392d7a917968",
"assets/assets/cards/ace_of_clubs.png": "23937afb62be09660a73430add48d390",
"assets/assets/cards/ace_of_diamonds.png": "961b41c9c73692f697043000c7a89977",
"assets/assets/cards/ace_of_hearts.png": "7ff0225c615b650a96cee2c79c269463",
"assets/assets/cards/ace_of_spades.png": "09781d71780f606d4da79ce3bdaaa66d",
"assets/assets/cards/card_back.png": "f830bd9890e84674d97a630f258ba860",
"assets/assets/cards/jack_of_clubs.png": "bbd54fd231151346a400bb19dd5ab003",
"assets/assets/cards/jack_of_diamonds.png": "8bae55d63ef5abf57365dcea5b2b2a64",
"assets/assets/cards/jack_of_hearts.png": "342f6d33754fbee997bd556fda3a6b0e",
"assets/assets/cards/jack_of_spades.png": "1dc973530217df385f2c7dc7123b0b5e",
"assets/assets/cards/king_of_clubs.png": "4c8c08e0355f85a51db14ac8104e0b4c",
"assets/assets/cards/king_of_diamonds.png": "7d35b45dfc64526184d1a217c7e804f7",
"assets/assets/cards/king_of_hearts.png": "eab4b6397f96304924dee151db1d78a1",
"assets/assets/cards/king_of_spades.png": "f7f29aca4487b4c4730c32ce4e40d48f",
"assets/assets/cards/queen_of_clubs.png": "c0ba698907f352492bcd0398c854e7e9",
"assets/assets/cards/queen_of_diamonds.png": "3c54d0c0fdee043af5d34e10b2cb185e",
"assets/assets/cards/queen_of_hearts.png": "4e7a892a46ef9c37d7ca0170d130b4d5",
"assets/assets/cards/queen_of_spades.png": "af1764aa952b536c23796b162c9f0a85",
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
"assets/assets/slotCategory1.jpg": "3ff8d058ed3fe44ff1f11ebd28695e1d",
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
"assets/assets%255Ccards%255Ccard_back.png": "f830bd9890e84674d97a630f258ba860",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "58a0f67e1dfa639ff3f5b76af493825a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "fed8745cf4fae1072c32d84e19d1fbca",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "03c96db4d8f53f74afe7389aeab2b01f",
"/": "03c96db4d8f53f74afe7389aeab2b01f",
"main.dart.js": "59517d9aecb4df104699d0efca02d453",
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
