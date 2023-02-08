var mensaje = "";

mensaje= prompt("Introduce una cadena de texto:","",);

var numeroLetras = mensaje.length;
var mensajeMayusculas = mensaje.toUpperCase();
var mensajeMinusculas = mensaje.toLowerCase();
var palabras = mensaje.split(" ");
var palabrasAlReves = mensaje.split(" ").reverse();

document.write("La longitud de la cadena es de: " + numeroLetras + " caracteres." + "<br>");
document.write("La cadena en mayusculas es: " + mensajeMayusculas + "<br>");
document.write("La cadena en minusculas es: " + mensajeMinusculas + "<br>");
document.write("CADENA NORMAL" + "<br>");
for(var i = 0; i < palabras.length; i++){
    document.write(palabras[i] + "<br>");
}
document.write("CADENA AL REVES" + "<br>");
for(var i = 0; i < palabrasAlReves.length; i++){
    document.write(palabrasAlReves[i] + "<br>");
}