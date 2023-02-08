$(document).ready(function() {
    $("button").click(function(){
        $.get("contenido.xml", function (xml) {
            $(xml).find("blog").each(function () {
               var name = $(this).find('name').text();
               var description = $(this).find('description').text();
               var url = $(this).find('url').text();
               alert(name + " " + description + " " + url);
            });
        });
    });
});