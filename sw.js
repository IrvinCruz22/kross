

//console.log("Hola desde el sw UTVAM");

self.addEventListener('fetch' , event => {
    //console.log("Holap");
    console.log(event.request);
    //return event.request;
});