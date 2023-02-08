$(document).ready(function() {
   $("input[type=radio]").click(function(){
        var color = $(this).val();
        $("p").css("backgroundColor", color);
   })

})