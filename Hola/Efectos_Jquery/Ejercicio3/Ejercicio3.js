$(document).ready(function(){
  $("#iniciar").click(function(){
    $("#cubo2").attr("src", "./raton.png")
    recorrerCubo2();
    setTimeout(recorrerCubo, 620);
  });


  $("#parar").click(function(){
    $("#cubo2").attr("src", "./raton.png")
    $("#cubo").stop(true);
    $("#cubo2").stop(true);
    setTimeout(inicio, 1000);
    setTimeout(inicio2, 1000);
  })

  function inicio(){
    $("#cubo").css("left", "10px");
    $("#cubo").css("top", "10px");
  }

  function inicio2(){
    $("#cubo2").css("left", "10px");
    $("#cubo2").css("top", "10px");
  }

  function recorrerCubo(){
    $("#cubo").animate({left: "+=450px"}, 2000);
    $("#cubo").animate({top: "+=450px"}, 2000);
    $("#cubo").animate({left: "-=450px"}, 2000);
    $("#cubo").animate({top: "-=450px"}, 2000);
    setTimeout(removerCubo2, 8000);
  }

  function removerCubo2(){
    $("#cubo2").attr("src", "./sangre.png")
  }

  function recorrerCubo2(){
    $("#cubo2").animate({left: "+=450px"}, 2000);
    $("#cubo2").animate({top: "+=450px"}, 2000);
    $("#cubo2").animate({left: "-=450px"}, 2000);
    $("#cubo2").animate({top: "-=450px"}, 2000);
    
  }

});