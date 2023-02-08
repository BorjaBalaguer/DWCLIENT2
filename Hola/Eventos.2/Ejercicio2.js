window.onload = function () {
    document.getElementById('link').onclick = prevenirComportamiento;
}
function prevenirComportamiento(evento) {
    evento.preventDefault()
}