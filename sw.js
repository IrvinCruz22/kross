var appShellFiles = [
  '/kross/index.html',
  '/kross/about.html',
  '/kross/images/favicon.png',
  '/kross/plugins/bootstrap/bootstrap.min.css',
  '/kross/plugins/slick/slick.css',
  '/kross/plugins/themify-icons/themify-icons.css',
  '/kross/css/style.css',
  '/kross/images/logo.png',
  '/kross/images/illustrations/leaf-bg.png',
  '/kross/images/illustrations/dots-cyan.png',
  '/kross/images/illustrations/leaf-orange.png',
  '/kross/images/illustrations/dots-orange.png',
  '/kross/images/illustrations/leaf-yellow.png',
  '/kross/images/illustrations/leaf-cyan.png',
  '/kross/images/illustrations/dots-group-orange.png',
  '/kross/images/illustrations/leaf-pink-round.png',
  '/kross/images/illustrations/leaf-cyan-2.png',
  '/kross/images/experience/icon-1.png',
  '/kross/images/experience/icon-2.png',
  '/kross/images/experience/icon-3.png',
  '/kross/images/portfolio/item-1.png',
  '/kross/images/portfolio/item-2.png',
  '/kross/images/portfolio/item-3.png',
  '/kross/images/portfolio/item-4.png',
  '/kross/images/portfolio/item-5.png',
  '/kross/images/testimonial/client-1.png',
  '/kross/images/backgrounds/education-bg.png',
  '/kross/plugins/jQuery/jquery.min.js',
  '/kross/plugins/bootstrap/bootstrap.min.js',
  '/kross/plugins/slick/slick.min.js',
  '/kross/plugins/shuffle/shuffle.min.js',
  '/kross/js/script.js',
];

self.addEventListener('install', event => {  

  const endInstall = caches.open('box').then( cache =>{  
    return cache.addAll(appShellFiles);
  });

  event.waitUntil( endInstall);

  //self.skipWaiting();
});

self.addEventListener('fetch', e =>{

  const respuesta = caches.open( 'box' ).then( cache => {

         fetch( e.request ).then( newRes => 
                 cache.put( e.request, newRes ));

         return cache.match( e.request );

     });

     e.respondWith( respuesta );
});



//console.log("Hola desde el sw UTVAM");

//self.addEventListener('fetch' , event => {
   // event.respondWith( fetch(event.request) );
// });

// self.addEventListener('install', e => {
    //console.log("Hola desde la intalación del Service Worker UTVAM");
//   caches.open( "Espacio 1" );
 // });
