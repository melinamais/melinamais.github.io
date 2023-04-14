$(document).ready(() => {
    $(".boton-enviar").click((e) => {
        let formulario = new FormValidator('formulario-reclamo',[
            {
                name : "nombre",
                display : "nombre",
                rules : "required|min_length[5]"
            },
            {
                name : "email",
                display : "@email",
                rules : "required|valid_email"
            },
            {
                name : "telefono",
                display : "telefono",
                rules : "required|min_length[11]"
            },
            {
                name : "reclamo",
                display : "reclamo",
                rules : "required|min_length[20]"
            }
        ],function(errores, evento){
            if(errores.length > 0){
                let mensaje = '';
                errores.forEach((campo) => {
                    let nombre = campo.message.split(" ")[1];
                    if(campo.message.split(" ")[7]!=undefined){
                        mensaje += "😐 Error campo "+nombre+" debe tener por lo menos "+campo.message.split(" ")[7]+" caracteres";
                    }else{
                        switch(nombre){
                            case "nombre":
                                mensaje += "😐 Error campo "+nombre+" es obligatorio";
                            break;
                            case "@email":
                                mensaje += "😐 Error campo "+nombre+" es obligatorio";
                            break;
                            case "telefono":
                                mensaje += "😐 Error campo "+nombre+" es obligatorio";
                            break;
                            case "reclamo":
                                mensaje += "😐 Error campo "+nombre+" es obligatorio";
                            break;
                        }
                    }
                })
                $(".mensaje-error").css({"display":"block"});
                document.querySelector('.mensaje-error').innerText = mensaje;
            }else{
                $(".mensaje-error").hide();
                evento.preventDefault();
                $(".mensaje-confirmacion").css({"display" : "block"});
                $("#reclamos").css({"opacity" : "0.3"});
            }
        });
    })
  
    $(".boton-cerrar").click(() => {
        $(".mensaje-confirmacion").hide();
        $("#reclamos").css({"opacity" : "1"})
        document.querySelector("form").reset();
    })
    $(".boton-aceptar").click(() => {
        $(".mensaje-confirmacion").hide();
        $("#reclamos").css({"opacity" : "1"})
        document.querySelector("form").reset();
    })
});