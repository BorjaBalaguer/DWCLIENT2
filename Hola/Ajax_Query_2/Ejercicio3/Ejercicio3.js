$.ajax({
    url: "ejemplo.js",
    dataType: "script",
    success: function() {
      texto();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error: " + jqXHR.status + " " + errorThrown);
    }
});