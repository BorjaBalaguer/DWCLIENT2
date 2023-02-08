const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
const xmlDoc = this.responseXML;
const x = xmlDoc.getElementsByTagName("lista");
let txt = "";
for (let i = 0; i < x.length; i++) {
txt = txt + x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("contenido").innerHTML = txt;
}
xhttp.open("GET", "prueba.xml");
xhttp.send();