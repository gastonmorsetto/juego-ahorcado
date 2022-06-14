//Tomamos Valor Boton e Imput
let btoAgregarPalabra = document.querySelector("#iniciar-juego");
let ingresarPalabra = document.querySelector("#ingresar-palabra");
let btoTexto = document.querySelector("#bto-texto");

//Creamos las Variables
let click = -1;
let entrada = "";
let palabrasIncorrectas = [];
let palabrasCorrectas = [];

//Agregamos Palabra
btoAgregarPalabra.addEventListener("click", function(event){
    event.preventDefault();
    inputInvisible.blur();

    click *= (-1);
    if(click > 0){
        entrada = "";
        activarAnimacion();
    }else{
        entrada = caprurarImput();
        if(!validarEntrada(entrada)){
            agregarPalabra(entrada, listaDePalabras);
            ingresarPalabra.value = "";
            desactivarAnimacion();
        }else{
            click = 1;
            errorDeEntrada();
        }
    }
});

ingresarPalabra.addEventListener("click", function(event){
    event.preventDefault();
    inputInvisible.blur();
});

//Capturo entrada del input
function caprurarImput(){
    return(document.querySelector("#ingresar-palabra").value.toUpperCase());
}

//Valido que no existan carateres especiales y tengan entre 3 y 17 letras
function validarEntrada(entradas){
    let palabraIncorrecta = false;
    if(entrada.length != 0){
        entrada = entrada.split(" ");
        for(let i = 0; i < entrada.length; i++){
            if(entrada[i].length < 3 || entrada.length > 17){
                palabraIncorrecta = true;
                break;
            }else{
                for(let t = 0; t < entrada[i].length; t++){
                    if((entrada[i].charCodeAt(t) < 65 || entrada[i].charCodeAt(t) > 90) && entrada[i].charCodeAt(t) != 209){
                        palabraIncorrecta = true;
                        break;
                    }
                }
            }
        }
    }
    return palabraIncorrecta;
}

//Validamos queno este repetida la palabra
function agregarPalabra(entrada, listaDePalabras){
    if(entrada.length != 0){
        entrada.forEach(function(palabra){
            if(!contiene(palabra, listaDePalabras)){
                listaDePalabras.push(palabra);
            }
        });
    }
}