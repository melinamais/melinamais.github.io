$(document).ready(() => {
    $(".boton-enviar").click(() => {
        let formulario = new FormValidator('formulario-reclamo',[
            {
                name : "nombre",
                rules : "required|min_length[5]"
            },
            {
                name : "email",
                rules : "required|valid_email"
            },
            {
                name : "telefono",
                rules : "required|min_length[11]"
            },
            {
                name : "reclamo",
                rules : "required|min_length[20]"
            }
        ],function(errores, evento){
            if(errores.length > 0){
                let leer_primer_error = errores[0].message;  //Mensaje en ingles
                //Pasos para mostrar el mensaje en español
                let nombre_input = leer_primer_error.split(" ")[1];

                let mensaje = '';
                if(leer_primer_error.split(" ")[7]!=undefined){
                    mensaje = "😐 Error campo "+nombre_input+" debe tener por lo menos "+leer_primer_error.split(" ")[7]+" caracteres";
                }else{
                    mensaje = "😐 Error campo "+nombre_input+" es obligatorio";
                }
                $(".mensaje-error").css({"display":"block"});
                document.querySelector('.mensaje-error').innerText = mensaje;
            }else{
                $(".mensaje-error").hide();
                evento.preventDefault();
                $(".mensaje-confirmacion").css({
                    "display" : "block"
                });
                $("#reclamos").css({
                    "opacity" : "0.3"
                });
            }
        });
    })
    
    //Ocultar mensaje de confirmacion del reclamo (Modal)
    $(".boton-cerrar").click(() => {
        $(".mensaje-confirmacion").hide();
        $("#reclamos").css({
            "opacity" : "1"
        })
        document.querySelector("form").reset();
    })
    $(".boton-aceptar").click(() => {
        $(".mensaje-confirmacion").hide();
        $("#reclamos").css({
            "opacity" : "1"
        })
        document.querySelector("form").reset();
    })
});
