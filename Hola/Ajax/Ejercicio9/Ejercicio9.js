window.onload = function () {
    let contenedor = document.getElementById("contenedor");
    contenedor.style.display = "none";
 
    let XMLHttpObjectRequest = false;
    if (window.XMLHttpRequest) {
        XMLHttpObjectRequest = new XMLHttpRequest();
    }
 
    document.getElementsByTagName("form")[0].onsubmit = traerPHP;
 
    function traerPHP(evento) {
        contenedor.style.display = "block";
        evento.preventDefault();
        if (XMLHttpObjectRequest) {
            let contenedor = document.getElementById("contenedor");
            let nombre = document.getElementById("nombre").value;
            let nReps = document.getElementById("nReps").value;
            XMLHttpObjectRequest.open("GET", "prueba.php?nombre=" + nombre + "&nReps=" + nReps);
            XMLHttpObjectRequest.onreadystatechange = function() {
                if(XMLHttpObjectRequest.readyState === 4 && XMLHttpObjectRequest.status === 200) {
                    contenedor.innerHTML = XMLHttpObjectRequest.responseText;
                }
            }
            XMLHttpObjectRequest.send(null);
        }
    }
 }