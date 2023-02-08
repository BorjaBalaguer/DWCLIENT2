function comprobar(){
    var numeroAleatorio = Math.floor((Math.random() * (10 -1 + 1)) +1);
    document.getElementById("numeroAleatorio").value = numeroAleatorio;
    if (document.getElementById("numeroUsuario").value == numeroAleatorio) {
        alert("Enhorabuena has acertado!");
    }else{
        alert("A la proximas!");
    }
}