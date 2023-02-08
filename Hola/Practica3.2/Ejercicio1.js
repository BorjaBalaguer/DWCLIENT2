function refValidate() {
    var comprobar = document.getElementsByName('dni')[0].value
    if(comprobar == '') {
        alert('No puedes enviar un dni vacio')
    }
}