function HoraActual() {
    var data = new Date();
    if (data.getHours() < 14) {
        alert("Buenos dias, son las " + data.toLocaleTimeString() + " horas");
    }else if (data.getHours() < 20) {
        alert("Buenas tardes, son las " + data.toLocaleTimeString() + " horas");
    }else {
        alert("Buenas noches, son las " + data.toLocaleTimeString() + " horas");
    }

}