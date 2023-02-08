function añadirElemento() {
    let p = document.createElement("li");
    let parrafoTexto = document.createTextNode("oso");
    p.appendChild(parrafoTexto);
    document.getElementById("lista").appendChild(p);
}

function insertarElemento() {
    let parrafo = document.createElement("li");
    let parrafoTexto = document.createTextNode("caballo");
    parrafo.appendChild(parrafoTexto);
    segundo_parrafo = document.getElementById('lista').getElementsByTagName('li')[1];
    document.getElementById('lista').insertBefore(parrafo, segundo_parrafo);
 
}

function reemplazarElemento() {
    let parrafo = document.createElement("li");
    let parrafoNode = document.createTextNode("cabra");
    parrafo.appendChild(parrafoNode);
    segundo_parrafo = document.getElementById('lista').getElementsByTagName('li')[1];
    document.getElementById('lista').replaceChild(parrafo, segundo_parrafo);
}

function borrarElemento() {
    segundo_parrafo = document.getElementById("lista").getElementsByTagName('li')[1];
    document.getElementById('lista').removeChild(segundo_parrafo);
}

function clonarElemento() {
    clonar = document.getElementById('lista').cloneNode(true);
    document.body.appendChild(clonar);
}

function crearElementoDom() {
    parrafo = document.createElement("ul");
    parrafo2 = document.createElement("li");
    cont = document.createTextNode("capibara");
    parrafo.appendChild(parrafo2).appendChild(cont);
    document.getElementById('leon').appendChild(parrafo); 
}

function crearElementoHTML() {
    parrafo = document.createElement("ul");
    parrafo.innerHTML = '<li>gato</li>'
    document.getElementById('leon').appendChild(parrafo);   
}
