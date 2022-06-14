//Creo Variables
let iniciarJuego = false;
let errores = 0;
let palabra, letrasPalabra, letrasIngresadas, letrasCorrectas, letrasIncorrectas, tecla, lineas;

//Boton Iniciar juego
let btoIniciarJuego = document.querySelector("#iniciar-juego");

//Input invisible para ingresar letras
let inputInvisible = document.querySelector("#input-teclado");
let subcontenedor = document.querySelector("#subcontenedor");

//Re-inicio del juego
btoIniciarJuego.addEventListener("click", function(event){
    event.preventDefault();
    inputInvisible.blur();

    desactivarAnimacion();

    //Empieza la partida
    inputInvisible.focus();
    iniciarJuego = true;
    errores = 0;
    palabra = palabraAleatoria();
    iniciarDibujo(palabra);
    letrasPalabra = letrasSinRepetir(palabra);
    letrasIngresadas = [];
    letrasCorrectas = [];
    letrasIncorrectas = [];
    lineas = calcularLineas();
    escribirLetrasCorrectas(lineas);
});

//Las entradas por teclado (suave o físico) se activan al hacer click en la zona del canvas o sus laterales
subcontenedor.addEventListener("click", function (event) {
    if (iniciarJuego) {
        event.preventDefault();
        inputInvisible.focus();
    }
});

//Ingreso letras a la partida
inputInvisible.addEventListener("input", function(){
    tecla = inputInvisible.value.toUpperCase();
    inputInvisible.value = "";
    if(iniciarJuego){
        if(teclaValida(tecla)){
            if(!contiene(tecla, letrasIncorrectas)){
                letrasIngresadas.push(tecla);
                letrasIngresadas.sort();
                if(contiene(tecla,letrasPalabra)){
                    letrasCorrectas.push(tecla);
                    letrasCorrectas.sort();
                    lineas = transcribirLetra(lineas, tecla);
                    limpiarPantalla(0, alto * 0.75, ancho, alto);
                    escribirLetrasCorrectas(lineas);
                }else{
                    errores++;
                    dibujarErrores(errores);
                    letrasIncorrectas.push(tecla);
                    limpiarPantalla(0, alto * 0.62, ancho, alto * 0.1);
                    escribirLetrasIncorrectas(letrasIncorrectas);
                }
                if(ganar()){
                    iniciarJuego = false;
                    inputInvisible.blur();

                    escribirP("¡¡¡GANASTE!!!");
                    on = true;
                    ecender();
                }
                if(perder()){
                    iniciarJuego = false;
                    inputInvisible.blur();

                    escribirP("¡¡¡PERDISTE!!!");
                    escribirPalabraCorrecta();
                }
            }
        }
    }
});

//Selecciona palabra aleatoria del banco
function palabraAleatoria(){
    let i = Math.round(Math.random() * (listaDePalabras.length - 1));
    return listaDePalabras[i];
}

//Array conletras que contiene la palabra aleatoria -ordenada y sin repetir-
function letrasSinRepetir(string){
    let letras = [];
    let array = string.split('');
    for(let i = 0; i < array.length; i++){
        if(!contiene(array[i], letras)){
            letras.push(array[i]);
        }
    }
    return letras.sort();
}

//Valido tecla utilizada con ASCII -dejando la ñ y sacando caracteres especiales-
function teclaValida(tecla){
    return((tecla.charCodeAt() >= 65 && tecla.charCodeAt() <= 90 || tecla.charCodeAt() == 209));
}

//Evaluo si array tiene letra determinada
function contiene(elemento, lista){
    return lista.includes(elemento);
}

//Evaluo si se gano la partida
function ganar(){
    return(letrasCorrectas.length == letrasPalabra.length);
}

//Evaluo si se perdio la partida
function perder(){
    return(errores == 9);
}