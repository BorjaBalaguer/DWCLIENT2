function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
    document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
    }
    window.onload = function() {
    setInterval(muestraReloj, 1000);
    }
    window.alert("Esta página tiene un reloj");
    
    var bPreguntar = true;
    window.onbeforeunload = preguntarAntesDeSalir;
    function preguntarAntesDeSalir(){
    if (bPreguntar)
    return "";
    
    }