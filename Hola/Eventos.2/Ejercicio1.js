window.onload = function () {
    document.getElementById('formulario').onsubmit = validar
}

function validar(evento) {
    if(this.nombre.value == '' || this.ciudad.value == '' || this.pais.value == '') {
        evento.preventDefault()
        alert('campos vacios')    
    }
}