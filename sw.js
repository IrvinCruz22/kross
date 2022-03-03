

//console.log("Hola desde el sw UTVAM");

self.addEventListener('fetch' , event => {
    event.respondWith( fetch(event.request) );
 });

 self.addEventListener('install', e => {
    //console.log("Hola desde la intalación del Service Worker UTVAM");
    caches.open( "Espacio 1" );
  });