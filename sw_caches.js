var userImages = [];
for(var i=1; i<4; i++) {
  userImages.push('/images/user-'+ i +'.jpg');
}

var appShellFiles = ['/index.html', '/about.html', '/portfolio.html', '/blog.html'];
var contentToCache = appShellFiles.concat(userImages);

//console.log(userImages);

self.addEventListener('install', event => {  
  caches.open('box-1');

  caches.open('box').then( cache =>{

    //cache.add('/index.html');
    //cache.add('/about.html');

    //cache.addAll([ '/index.html', '/about.html', '/portfolio.html' ]);

    cache.addAll(contentToCache);

    cache.match('/index.html')
    .then(res => {
      res.text().then( console.log );
    });
  });

  
  self.skipWaiting();
});
