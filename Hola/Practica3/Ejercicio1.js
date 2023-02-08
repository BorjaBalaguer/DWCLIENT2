function añadirParrafo() {
    let p = document.createElement("p");
    let parrafoTexto = document.createTextNode("Parrafo anyadido");
    p.appendChild(parrafoTexto);
    document.getElementById("texto").appendChild(p);
}

function insertarParrafo() {
    let parrafo = document.createElement("p");
    let parrafoTexto = document.createTextNode("Parrafo insertado");
    parrafo.appendChild(parrafoTexto);
    segundo_parrafo = document.getElementById('texto').getElementsByTagName('p')[1];
    document.getElementById('texto').insertBefore(parrafo, segundo_parrafo);
 
}

function reemplazarParrafo() {
    
    let parrafo = document.createElement("p");
    let parrafoNode = document.createTextNode("Parrafo reemplazado");
    parrafo.appendChild(parrafoNode);
    segundo_parrafo = document.getElementById('texto').getElementsByTagName('p')[1];
    document.getElementById('texto').replaceChild(parrafo, segundo_parrafo);
}

function borrarParrafo() {
    segundo_parrafo = document.getElementById("texto").getElementsByTagName('p')[1];
    document.getElementById('texto').removeChild(segundo_parrafo);
}

function clonarParrafo() {
    clonar = document.getElementById('texto').cloneNode(true);
    document.body.appendChild(clonar);
    
}
