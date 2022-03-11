

//console.log("Hola desde el sw UTVAM");

self.addEventListener('fetch' , event => {
    event.respondWith( fetch(event.request) );
 });

 self.addEventListener('install', e => {
    //console.log("Hola desde la intalación del Service Worker UTVAM");
    caches.open( "Espacio 1" );
  });
  

  self.addEventListener('fetch' , event => {
   //event.respondWith( fetch(event.request) );  
 
   if( event.request.url.includes('http://localhost:8080/images/')){
     console.log(event.request.url);
   }  

 });