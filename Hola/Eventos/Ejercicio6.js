window.onload = function() {
    var botones = document.getElementsByTagName("button");
    for(var i=0; i<botones.length; i++) {
    botones[i].onclick = resalta; 
    }
}

function resalta() {
  alert("Has pulsado sobre un boton");
}