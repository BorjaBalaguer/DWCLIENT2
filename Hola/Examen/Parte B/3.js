window.onload = function(){
    document.getElementById("menu").addEventListener("submit" , menu);
    document.getElementsByTagName("input").onclick = decirprecio;
}

function menu(){
    var primero = document.getElementsByName("entrantes");

    var precio = 15;
    var contador = 0;

    Array.from(primero).forEach(entrante => {
        if (entrante.checked) {
            precio = precio + 5;
            contador++;
        }
    });

    alert('Tienes seleccionados: ' + contador + ' Entrantes y 1 Segundo. Precio final es: "' + precio);
}

function resalta(){
    alert('Tienes seleccionados: ' + contador + ' Entrantes y 1 Segundo. \n El precio final del menu es : ' + precio + 
    'Los platos seleccionados son: ');
}