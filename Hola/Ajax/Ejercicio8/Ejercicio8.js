var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(){
if(XMLHttpRequestObject) {
var lugar = document.getElementById("contenedor");
XMLHttpRequestObject.open("GET", 'prueba.json');
XMLHttpRequestObject.onreadystatechange = function(){
if (XMLHttpRequestObject.readyState == 4 &&
XMLHttpRequestObject.status == 200) {
objeto = JSON.parse(XMLHttpRequestObject.responseText);
for(let i = 0; i<objeto.arrayColores.length;i++){
lugar.innerHTML += objeto.arrayColores[i].nombreColor + " " + objeto.arrayColores[i].valorHexadec+ '<br>';
}
}

}
XMLHttpRequestObject.send(null);
}
}

window.onload = function(){
document.getElementById('boton').onclick = sacardatos
}