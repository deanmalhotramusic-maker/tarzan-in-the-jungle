// Offline support: keeps the game, 3D engine and fonts on the phone so it opens without internet.
// Live weather always goes to the network. Bump VERSION when the game files change.
const VERSION='tarzan-v3';
const SHELL=['./','./index.html','./classic.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-180.png',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);if(u.hostname.endsWith('open-meteo.com'))return;
  // serve from the phone right away, then refresh the copy in the background so updates arrive next launch
  e.respondWith(caches.open(VERSION).then(async c=>{
    const hit=await c.match(r,{ignoreSearch:u.origin===location.origin});
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res}).catch(()=>hit);
    return hit||net;
  }));
});
