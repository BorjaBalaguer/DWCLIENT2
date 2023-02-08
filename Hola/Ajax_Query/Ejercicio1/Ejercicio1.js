$(document).ready(function() {
    $("button").click(function(){
     /*   $.ajax({
        url: "texto.txt",
        success: function(result){
            $("#contenedor").html(result);
        }
        });*/
        $.ajax({
            url: "texto.txt"
          })
            .done(function( respuesta ) {
              $( "#contenedor" ).html( respuesta );
            });
    });
});