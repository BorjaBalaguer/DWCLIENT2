window.onload = function() {
    addEventListener('click', cambiarFuente);
    }
    
    function cambiarFuente() {
    let texto = document.getElementById("parrafo");
    if (document.getElementById("negrita").checked) {
    texto.style.fontWeight = "bold";
    }else
    texto.style.fontWeight = "";
    
    if (document.getElementById("cursiva").checked) {
    texto.style.fontStyle = "italic";
    }else
    texto.style.fontStyle = "";
    
    }