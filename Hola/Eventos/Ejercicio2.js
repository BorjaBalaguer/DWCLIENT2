function mayor(){
    this.style.fontSize = '16pt';
}

function menor(){
    this.style.fontSize = '12pt';
}

window.onload = function(){
    document.getElementById("encima").onmouseout = menor;
    document.getElementById("encima").onmouseover = mayor;
}