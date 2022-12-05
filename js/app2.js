document.body.addEventListener("click", function (e) {
    
    /* declaramos variable global */
    var ordenprincipal, ordensiguiente

    /* si hago click en flecha der */
    if(e.target.id=="imgder"){
        /* coger de la img principal la propiedad "orden" */
        ordenprincipal = document.getElementById("img00").getAttribute("orden");

        /* convirtiendo a número la variable ordenprincipal */
        ordenprincipal = Number(ordenprincipal)


        /* condición en caso de que sea valor de orden 10 */
        if(ordenprincipal===10){
            /* paso a la primera foto, ya que la 10 es la última y la 11 no existe */
            ordensiguiente = 1
        }else{
            /* le sumo 1  */
            ordensiguiente = ordenprincipal + 1
        }
        
        
       /* cambio el src de la img00 para que se muestre la siguiente foro */
        document.getElementById("img00").src = `imagenes/foto0${ordensiguiente}.jpg`

        /* cambio la propiedad del atributo "orden" para que sea el de la siguiente foto */
        document.getElementById("img00").setAttribute("orden",ordensiguiente)

    }   

    /* si hago click en flecha izd */
    if(e.target.id=="imgizd"){
        
        /* coger de la img principal la propiedad "orden" */
        ordenprincipal = document.getElementById("img00").getAttribute("orden");

        /* convirtiendo a número la variable ordenprincipal */
        ordenprincipal = Number(ordenprincipal)

        /* condición en caso de que sea valor de orden 1 */
        if(ordenprincipal===1){
            /* paso a la primera foto, ya que la 10 es la última y la 11 no existe */
            ordensiguiente = 10
        }else{
            /* le resto 1  */
            ordensiguiente = ordenprincipal - 1
        }
        
       /* cambio el src de la img00 para que se muestre la foto anterior */
        document.getElementById("img00").src = `imagenes/foto0${ordensiguiente}.jpg`

        /* cambio la propiedad del atributo "orden" para que sea el de la foto anterior */
        document.getElementById("img00").setAttribute("orden",ordensiguiente)

    }

})