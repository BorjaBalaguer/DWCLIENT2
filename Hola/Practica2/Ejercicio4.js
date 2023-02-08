
var firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
if (firefox) {
    ventana =self.open(" ", "ventana1", height=500,width=500,top=500 );
}else{
    alert("Navegador erroneo, use firefox!");
}