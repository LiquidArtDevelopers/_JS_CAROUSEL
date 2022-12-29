
/* 1) zona de carousel de flechas esto sólo se ejecuta cuando pulsamos en las flechas*/
var numfotos = 10;
var ordenprincipal, ordensiguiente
var intervalo, temporizador; //GORKA: declaro las variables
const flechaDER = document.getElementById("imgder");
const flechaIZD = document.getElementById("imgizd");
const fotogrande = document.getElementById("img00");


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

    crearTemporizador(10000)
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

    crearTemporizador(10000)

})




/* 2) zona de creación de miniaturas (esto se ejecuta al cargar la web*/

const inferior = document.getElementById("inferior")
let contenido = "";
// recorremos el número de fotos
for(let i = 1; i<=numfotos; i++){
    //creamos contenido HTML variable
    contenido = `<img id="${i}" orden="${i}" class="miniatura" src="./imagenes/foto0${i}.jpg" alt="">`
    //insertamos contenido HTML dentro del div inferior
    inferior.insertAdjacentHTML("beforeend",contenido)
}



/* 3) zona de pulsar en miniaturas y cargar imagen en grande (esto sólo se ejecuta cuando pulsamos en las miniaturas*/

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

        crearTemporizador(10000)
        
    })
}


/* 4) llamada a la función random cuando cargue la web (esto se ejcuta al cargar la web)*/
random();

/* 5) ejecutamos función interwall para que cada 5 segundos me cargue una imagen random  (esto se ejecuta al cargar la web) */
crearIntervalo(5000);


/*  zona de funciones */
//función que obtiene un valor en milisegundos para establecer un setInterval de la función random cada dicho tiempo.
function crearIntervalo(tiempo){
    //en caso de que exista en la variable intervalo un setInterval anterior, lo borramos con clearInterval
    if(intervalo != undefined){
        clearInterval(intervalo)
    }
    //creamos el intervalo en bucle donde ejecutará cada "valor de tiempo" la función random (que lo que hace es elegir un num random del 1 al 10 y mostrar la imagen en grande con dicho número)
    intervalo = window.setInterval(random,tiempo)
}

//función que se encarga de crear un timeOut al cabo del tiempo obtenido en la variable tiempo.
function crearTemporizador(tiempo){
    //en caso de que ya exista un evento temporizador en la var temporizador, lo eliminamos
    if(temporizador != undefined){
        clearTimeout(temporizador)
    }
    //en caso de que también exista un intervalo en la variable intervalo, también la eliminamos.
    if(intervalo != undefined){
        clearInterval(intervalo)
    }
    //finalmente creamos un temporizador que se ejecutará al cabo del valor de "variable tiempo", y donde llamará a la función crearIntervalo (para iniciar el bucle de nuevo, y cada 5s)
    temporizador = window.setTimeout(crearIntervalo(5000),tiempo)
}

//función encargada de obtener un num random del 1 al 10 (entero) y de cambiar el SRC y el atributo "orden" a la imagen principal
function random(){
    //crear un número aleatorio
    let numAleatorio;
    numAleatorio = Number(numAleatorio);
    numAleatorio = Math.random()*numfotos;
    numAleatorio = Math.ceil(numAleatorio)
    
    fotogrande.src=`imagenes/foto0${numAleatorio}.jpg`
    fotogrande.setAttribute("orden", numAleatorio)
    
}



