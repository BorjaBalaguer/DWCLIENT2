function añadirAtributo() {
    elemento = document.createElement('input');
    elemento.setAttribute('type', 'text');
    atributo = document.getElementById("atributo").value;
    nombre = document.getElementById("nombre").value;
    elemento.setAttribute(nombre, atributo);
    elemento2 = document.getElementById('datos');
    elemento2.appendChild(elemento);
}