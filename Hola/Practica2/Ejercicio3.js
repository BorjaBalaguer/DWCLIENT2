function nombreNavegador() {
    document.write("<h1>Bienvenido a mi pagina</h1><p> Navegador en uso: " + navigator.appCodeName + "</p>");
}

function alerta() {
    var opcion = confirm("Acepta o Cancela");
    if (opcion == true) {
        document.write("Bienvenido a mi pagina.");
    }else{
        document.write("Salir");
    }
}

nombreNavegador();
alerta();