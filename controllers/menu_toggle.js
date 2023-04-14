const boton = document.querySelector(".boton-menu");
const menu = document.querySelector(".items-menu");
var ocultar = true;

boton.addEventListener('click', () => {
    if(ocultar){
        menu.style = "visibility: visible";
    }else{
        menu.style = "visibility: hidden";
    }
    ocultar = !ocultar;
})