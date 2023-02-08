$(document).ready(function() {
    $("#boton").click(function(){
        var entrada1 = $('#parametro1').val();
        var entrada2 = $('#parametro2').val();
        $.post( "test.php", {parametro1: entrada1, parametro2: entrada2}, function(data){
            $("#contenedor").html(data);
        });
    });
});