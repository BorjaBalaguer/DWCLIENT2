$(document).ready(function() {
    $("#form").submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        $.get("test.php", formData, function(data) {
          if (data == "usuario correcto") {
            alert("Usuario correcto");
          } else {
            alert("Usuario incorrecto");
          }
        });
    })
});