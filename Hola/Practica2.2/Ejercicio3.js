var inicio = 0;
function sumar() {
    var numero = document.getElementById("cantidad").value;
    numero = parseInt(numero);
    numero = numero + 10;
    document.getElementById("cantidad").value = numero;
}
function inicializar() {
    var numero = document.getElementById("cantidad").value = 0;

}