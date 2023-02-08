var numeros;
var suma = 0;
var contador = 0;

for (var i = 0; i <5; i++) {
    numeros=parseInt(prompt("Introduce 5 numeros:" + " (llevas: " + i + "/5)","",));
    suma += numeros;
    if (numeros > 100) {
        contador++;
    }
}

alert("La suma de los 5 numeros es igual a: " + suma + "\n" + "Hay " + contador + " numeros que son mayores de 100");