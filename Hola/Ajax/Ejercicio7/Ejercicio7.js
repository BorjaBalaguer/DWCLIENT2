//var objeto = false;
//if (window.XMLHttpRequest) {
    objeto = new XMLHttpRequest();
    //} else if (window.ActiveXObject) {
    //objeto = new ActiveXObject("Microsoft.XMLHTTP");
    //}
    function sacardatos(datos, idDiv){
        if(objeto) {
            var lugar = document.getElementById(idDiv);
            email= document.getElementById("email").value;
            telefono= document.getElementById("telefono").value;
            ruta="datos.php";
            envio1="enviarEmail="+email;
            envio2="enviarTelefono="+telefono;
            url=ruta+"?"+envio1+"&"+envio2;
            objeto.open("GET", url, true);
            objeto.onreadystatechange = function(){
            if (objeto.readyState == 4 && objeto.status == 200) {
                lugar.innerHTML = objeto.responseText;
            }
            }
        objeto.send(null);
        }
    }