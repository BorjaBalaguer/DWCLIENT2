var numeros = [7,8,2,9,10];
var suma = 0;

for (var i = 0; i < numeros.length; i++) {
    if(numeros[i] > 8){
    suma += numeros[i]
    }
    
}

alert("La suma de los numeros mayores de 8 es igual a: " + suma );