function sabermes(){
    switch (mes) {
        case "diciembre":
        case "enero":
        case "febrero":
            alert("Estamos en invierno");
            break;
        case "marzo":
        case "abril":
        case "mayo":
            alert("Estamos en primavera");
            break;
        case "junio":
        case "julio":
        case "agosto":
            alert("Estamos en verano");
            break;
        case "septiembre":
        case "octubre":
        case "noviembre":
            alert("Estamos en otoño");
             break;
    
        default:
            alert("No has puesto un mes valido.");
            break;
    }
}
var mes = "";

mes = prompt("Dime un mes del año: ","").toLowerCase();
sabermes();