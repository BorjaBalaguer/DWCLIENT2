window.onload = function () {
    document.getElementById("color").onchange = cambiarcolor;
    }
    
    function cambiarcolor() {
    var index = this.selectedIndex
    var valor = this[index].value
    document.getElementById("parrafo").style.backgroundColor = valor;
    }