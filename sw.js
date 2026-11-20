// Primero internet; si no hay (por ejemplo en el barco), muestra la última versión guardada.
const C = "boca-v1";
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  const propio = u.origin === location.origin, foto = u.hostname === "media.api-sports.io", fuente = u.hostname.endsWith("gstatic.com") || u.hostname === "fonts.googleapis.com";
  if (!propio && !foto && !fuente) return;
  e.respondWith(fetch(r).then(res => {
    if (res.ok || res.type === "opaque") { const copia = res.clone(); caches.open(C).then(c => c.put(r, copia)); }
    return res;
  }).catch(() => caches.match(r).then(m => m || (r.mode === "navigate" ? caches.match("./") : Response.error()))));
});
