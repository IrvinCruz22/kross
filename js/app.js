//confirmar si soporta sw
if(navigator.serviceWorker){
    //alert("Soporta el SW")
    navigator.serviceWorker.register("/kross/sw.js");
}
else{
    alert(":( no soporta el SW");
}
