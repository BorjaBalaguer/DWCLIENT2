$.ajax({
  url: "texto.txt",
  success: function(texto) {
    $("#contenedor").html(texto);
  },
  error: function(jqXHR, textStatus, errorThrown) {
    $("#error").html("Error: " + textStatus + " " + errorThrown);
  }
});