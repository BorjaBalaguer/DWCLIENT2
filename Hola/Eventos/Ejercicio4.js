function mayor() {
    this.style.fontSize = '16pt';
}
  
function menor() {
    
    this.style.fontSize = '12pt';
}

  
  window.onload = function () {
    element = document.getElementById("encima");
    

    if (element.addEventListener) { 

    element.addEventListener("mouseover", mayor);
    element.addEventListener("mouseout", menor);
    } else{

        element.attachEvent("onmouseout", menor);
        element.attachEvent("onmouseover", mayor);

    }
   
  }