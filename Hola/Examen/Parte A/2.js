function resalta(elEvento) {
    var evento = elEvento || window.event;
    switch (evento.type) {
        case 'mouseover':
            this.style.fontSize = '20pt';
            break;
    
        case 'mouseout':
            this.style.fontSize = '12pt';
            break;
    }
}

window.onload = function(){
    document.getElementById("encima").onmouseout = resalta;
    document.getElementById("encima").onmouseover = resalta;
}