//var objeto = false;
//if (window.XMLHttpRequest) {
objeto = new XMLHttpRequest();
//} else if (window.ActiveXObject) {
//objeto = new ActiveXObject("Microsoft.XMLHTTP");
//}
function sacardatos(datos, idDiv){
    if(objeto) {
        var lugar = document.getElementById(idDiv);
        objeto.open("GET", datos);
        objeto.onreadystatechange = function(){
        if (objeto.readyState == 4 && objeto.status == 200) {
            lugar.innerHTML = objeto.responseText;
        }
        }
    objeto.send(null);
    }
}