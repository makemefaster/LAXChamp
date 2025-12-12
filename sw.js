const CACHE_NAME = "laxchamp-v7"; // BUMPED VERSION
const ASSETS = [
    "./", 
    "./index.html", 
    "./admin.html", 
    "./umpire.html", 
    "./live.html", 
    "./staff.html", 
    "./superuser.html",
    "./firebase-config.js", // This needs to be re-cached
    "https://cdn.tailwindcss.com",
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
];

self.addEventListener("install", e => {
    self.skipWaiting();
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener("fetch", e => {
    if(e.request.url.includes("firebase")) return;
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
