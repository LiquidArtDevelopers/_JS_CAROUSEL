
/* 1) zona de carousel de flechas */
var numfotos = 10;
var ordenprincipal, ordensiguiente
const flechaDER = document.getElementById("imgder");
const flechaIZD = document.getElementById("imgizd");
const fotogrande = document.getElementById("img00")

flechaDER.addEventListener("click", function(){

    /* coger de la img principal la propiedad "orden" */
    ordenprincipal = fotogrande.getAttribute("orden");

    /* convirtiendo a número la variable ordenprincipal */
    ordenprincipal = Number(ordenprincipal)


    /* condición en caso de que sea valor de orden numfotos */
    if(ordenprincipal===numfotos){
        /* paso a la primera foto, ya que la numfotos es la última y la 11 no existe */
        ordensiguiente = 1
    }else{
        /* le sumo 1  */
        ordensiguiente = ordenprincipal + 1
    }
    
    
   /* cambio el src de la img00 para que se muestre la siguiente foro */
   fotogrande.src = `imagenes/foto0${ordensiguiente}.jpg`

    /* cambio la propiedad del atributo "orden" para que sea el de la siguiente foto */
    fotogrande.setAttribute("orden",ordensiguiente)

})

flechaIZD.addEventListener("click", function(){
    /* coger de la img principal la propiedad "orden" */
    ordenprincipal = fotogrande.getAttribute("orden");

    /* convirtiendo a número la variable ordenprincipal */
    ordenprincipal = Number(ordenprincipal)

    /* condición en caso de que sea valor de orden 1 */
    if(ordenprincipal===1){
        /* paso a la primera foto, ya que la numfotos es la última y la 11 no existe */
        ordensiguiente = numfotos
    }else{
        /* le resto 1  */
        ordensiguiente = ordenprincipal - 1
    }
    
   /* cambio el src de la img00 para que se muestre la foto anterior */
   fotogrande.src = `imagenes/foto0${ordensiguiente}.jpg`

    /* cambio la propiedad del atributo "orden" para que sea el de la foto anterior */
    fotogrande.setAttribute("orden",ordensiguiente)

})




/* 2) zona de creación de miniaturas */

const inferior = document.getElementById("inferior")
let contenido = "";
// recorremos el número de fotos
for(let i = 1; i<=numfotos; i++){
    //creamos contenido HTML variable
    contenido = `<img id="${i}" orden="${i}" class="miniatura" src="./imagenes/foto0${i}.jpg" alt="">`
    //insertamos contenido HTML dentro del div inferior
    inferior.insertAdjacentHTML("beforeend",contenido)
}



/* 3) zona de pulsar en miniaturas y cargar imagen en grande */

/* //opción escuchando todos los clicks y condicionando los que sean sobre las miniaturas
document.addEventListener("click", function(e){
    //1-detectar el click en la miniatura    
    if(e.target.classList=="miniatura"){

        //establezco el SRC a la imagen grande (me cambia la imagen)  
        fotogrande.src=e.target.src

        //recojo el atributo no oficial orden de la miniatura clickada
        let nuevoOrden = e.target.getAttribute("orden");
        //establezco el atributo orden a la imagen grande.
        fotogrande.setAttribute("orden",nuevoOrden)

    }
}) */

//opción que escuche sólo los clicks sobre las miniaturas
const miniaturas = document.getElementsByClassName("miniatura")
for(const miniatura of miniaturas){
    miniatura.addEventListener("click", function(){

        //establezco el SRC a la imagen grande (me cambia la imagen)  
        fotogrande.src=miniatura.src

        //recojo el atributo no oficial orden de la miniatura clickada
        let nuevoOrden = miniatura.getAttribute("orden");
        //establezco el atributo orden a la imagen grande.
        fotogrande.setAttribute("orden",nuevoOrden)
    })
}




