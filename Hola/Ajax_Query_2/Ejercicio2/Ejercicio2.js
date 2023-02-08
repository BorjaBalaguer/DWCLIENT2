$("#carga").show();

setTimeout(function(){
  $.ajax({
    url: "ejemplo.php",
    success: function(hora) {
      $("#carga").hide();
      $("#contenedor").html(hora);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      $("#carga").hide();
      $("#error").html("Error: " + jqXHR.status + " " + errorThrown);
    }
  });
}, 2000);
