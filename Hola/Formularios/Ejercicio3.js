window.onload = function () {
    document.getElementById("form").onchange = cambiarcolor;
    }
    
    function cambiarcolor() {
    for (let index = 0; index <= document.getElementsByName('color').length; index++) {
    var valor = document.getElementsByName('color')[index]
    if(valor.checked == true) {
    document.getElementById('parrafo').style.backgroundColor = valor.value
            }
        }
    }