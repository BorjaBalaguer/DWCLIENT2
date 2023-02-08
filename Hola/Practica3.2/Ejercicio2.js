function sumar() {
    var valor = parseInt(document.getElementById('valor').value)
    valor = valor + 10
    document.getElementById('valor').value = valor
}
function reinicializa() {
    document.getElementById('valor').value = '0';
}