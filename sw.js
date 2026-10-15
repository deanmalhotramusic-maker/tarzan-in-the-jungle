// Offline support: keeps the game, 3D engine, models and textures on the phone so it opens without internet.
// The game page itself is always fetched fresh when online, so updates show up on the next open.
// Live weather always goes to the network. Bump VERSION when the game files change.
const VERSION='tarzan-v5';
const SHELL=['./','./index.html','./classic.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-180.png',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);if(u.hostname.endsWith('open-meteo.com'))return;
  if(r.mode==='navigate'){ // newest page when online, saved copy when offline
    e.respondWith(caches.open(VERSION).then(c=>fetch(r,{cache:'no-store'}).then(res=>{if(res.ok)c.put('./index.html',res.clone());return res}).catch(()=>c.match(r,{ignoreSearch:true}).then(h=>h||c.match('./index.html')))));return}
  // everything else: serve the saved copy right away and refresh it in the background
  e.respondWith(caches.open(VERSION).then(async c=>{
    const hit=await c.match(r,{ignoreSearch:u.origin===location.origin});
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res}).catch(()=>hit);
    return hit||net;
  }));
});
