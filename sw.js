const CACHE_NAME = "laxchamp-v10-multi";
const ASSETS = [
    "./", 
    "./index.html", 
    "./director.html", 
    "./admin.html", 
    "./umpire.html", 
    "./umpire-login.html",
    "./live.html", 
    "./schedule.html",
    "./firebase-config.js",
    "https://cdn.tailwindcss.com"
];

self.addEventListener("install", e => {
    self.skipWaiting();
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener("fetch", e => {
    if(e.request.url.includes("firebase")) return;
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
