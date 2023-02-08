
function fechaActual() {
    var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Novimbre", "Diciembre"];
    var fecha = new Date();
    var dia = fecha.getDay();
    var numero = fecha.getDate();
    var mes = fecha.getMonth();
    var año = fecha.getFullYear();
    
alert(semana[dia] + ", " + numero + " de " + meses[mes] + " de " + año);
}