mes = prompt("Dime un mes del año: ","").toLowerCase();

if (mes == "diciembre" || mes =="enero" || mes =="febrero") {
    alert("Estamos en invierno");

}
else if (mes == "marzo" || mes =="abril" || mes =="mayo") {
    alert("Estamos en primavera");
}
else if (mes == "junio" || mes =="julio" || mes =="agosto") {
    alert("Estamos en verano");
}
else if (mes == "septiembre" || mes =="octubre" || mes =="noviembre") {
    alert("Estamos en otoño");
}else{
    alert("No has puesto un mes valido.")
}