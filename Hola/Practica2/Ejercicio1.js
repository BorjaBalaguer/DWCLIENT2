function redondear(){
    if (precio != 0) {
        preciototal = precio * 1.21;
        alert("El precio total es: " +  preciototal.toFixed(2) + "€");
        iva = preciototal - precio;
        alert("El iva añadido ha sido un total de: " + iva.toFixed(2) + "€");
    }else{
        alert("Introduce un precio valido");
    }
}

var precio = 0;
var preciototal = 0;
var iva = 0;

precio=parseInt(prompt("Introduce el precio del articulo:","",));

redondear();