//Canvas
let screen = document.querySelector("canvas");
let brush = screen.getContext("2d");

let ancho = screen.width;
let alto = screen.height;

//Creamos Variables
let tamanoPalabra;
let tamanoFuente;
let salvado;

//Iniciamos Dibujo
function iniciarDibujo(palabra){
    limpiarPantalla(0, 0, ancho, alto);
    dibujarBaseMastil(0.25, 0.55);
    tamanoPalabra = palabra.length;
    tamanoFuente = (ancho / tamanoPalabra);
    if(tamanoFuente > 60){
        tamanoFuente = 60;
    }
}

//Limpiamos la Pantalla
function limpiarPantalla(x, y, ancho,alto){
    brush.clearRect(x, y, ancho, alto);
}

//Calculamos cantidad de lineas para la palabra
function calcularLineas(){
    let lineas = "";
    for(let i = 0; i < tamanoPalabra; i++){
        lineas = lineas + "_";
        if(i != tamanoPalabra -1){
            lineas = lineas + " ";
        }
    }
    return lineas;
}

//Reemplazamos lineas por letras
function transcribirLetra(lineas, tecla){
    let lineasArray = lineas.split("");
    for(i = 0; i < tamanoPalabra; i++){
        if(tecla == palabra[i]){
            lineasArray.splice(i * 2, 1, tecla);
        }
    }
    return lineasArray.join("");
}

//Escribir linea y letras correctas
function escribirLetrasCorrectas(lineas){
    brush.fillStyle = "black";
    brush.strokeStyle = "black";
    brush.font = "bold" + tamanoFuente + "px Playfair Display";
    brush.textAlign = "center";
    brush.beginPath();
    brush.fillText(lineas, ancho * 0.5, alto * 0.85);
    brush.fill();
}

//Escribir letras incorrectas
function escribirLetrasIncorrectas(letrasIncorreectas){
    brush.fillStyle = "red";
    brush.strokeStyle = "red";
    brush.font = "bold" + (tamanoFuente * 2) + "px Playfair Display";
    brush.textAlign = "center";
    brush.beginPath();
    brush.fillText(letrasIncorreectas.join(""), ancho * 0.5, alto * 0.7);
    brush.fill();
}

//Escribir palabra correcta
function escribirPalabraCorrecta(){
    brush.fillStyle = "black";
    brush.strokeStyle = "black";
    brush.font = "bold 22px Playfair Display";
    brush.textAlign = "center";
    brush.beginPath();
    brush.fillText("La Palabra Correcta era " + palabra, ancho * 0.5, alto * 0.95);
    brush.fill();
}

//Dibujo los Errores
function dibujarErrores(errores) {
    if (errores <= 3) {
        dibujarMastil(0.36, 0.47, errores);
    } else {
        dibujarHombrecito(0.61, 0.24, errores);
    }
}

//Dibujo Base de la horca
function dibujarBaseMastil(x, y) {
    brush.strokeStyle = "black";
    brush.lineWidth = 3;
    brush.beginPath();
    brush.moveTo(ancho * x, alto * y);
    brush.lineTo(ancho * (x + 0.22), alto * y);
    brush.lineTo(ancho * (x + 0.11), alto * (y - 0.08));
    brush.lineTo(ancho * x, alto * y);
    brush.lineTo(ancho * (x + 0.1), alto * y);
    brush.stroke();
}

//Dibujo resto de la horca
function dibujarMastil(x, y, parte){
    brush.strokeStyle = "black";
    brush.lineWidth = 3;
    switch(parte){
        case 1://vertical
            brush.beginPath();
            brush.moveTo(ancho * x, alto * y);
            brush.lineTo(ancho * x, alto * (y - 0.3));
            brush.stroke();
            break;
        case 2: //horizontal
            brush.beginPath();
            brush.moveTo(ancho * x, alto * (y - 0.3));
            brush.lineTo(ancho * (x + 0.25), alto * (y - 0.3));
            brush.stroke();
            break;
        case 3: //soga
            brush.beginPath();
            brush.lineTo(ancho * (x + 0.25), alto * (y - 0.3));
            brush.lineTo(ancho * (x + 0.25), alto * (y - 0.265));
            brush.stroke();
            break;
    }
}

//Dibujo Hombrecito
function dibujarHombrecito(x, y, parte) {
    brush.strokeStyle = "black";
    brush.lineWidth = 3;
    switch (parte) {
        case 4: //cabeza
            brush.beginPath();
            brush.arc(ancho * x, alto * y, 18, 0, 2 * Math.PI);
            brush.stroke();
            break;
        case 5: //cuerpo
            brush.beginPath();
            brush.lineTo(ancho * x, alto * (y + 0.036));
            brush.lineTo(ancho * x, alto * (y + 0.15));
            brush.stroke();
            break;
        case 6: //brazo izquierdo
            if (salvado) {
                brush.beginPath();
                brush.lineTo(ancho * x, alto * (y + 0.065));
                brush.lineTo(ancho * (x - 0.08), alto * (y + 0.01));
                brush.stroke();
                break;
            } else {
                brush.beginPath();
                brush.lineTo(ancho * x, alto * (y + 0.06));
                brush.lineTo(ancho * (x - 0.05), alto * (y + 0.12));
                brush.stroke();
                break;
            }
        case 7: //brazo derecho
            if (salvado) {
                brush.beginPath();
                brush.lineTo(ancho * x, alto * (y + 0.065));
                brush.lineTo(ancho * (x + 0.08), alto * (y + 0.01));
                brush.stroke();
                break;
            } else {
                brush.beginPath();
                brush.lineTo(ancho * x, alto * (y + 0.06));
                brush.lineTo(ancho * (x + 0.05), alto * (y + 0.12));
                brush.stroke();
                break;
            }
        case 8: //pierna derecha
            brush.beginPath();
            brush.lineTo(ancho * x, alto * (y + 0.15));
            brush.lineTo(ancho * (x + 0.04), alto * (y + 0.25));
            brush.stroke();
            break;
        case 9: //piernza izquierda
            salvado = false;
            brush.beginPath();
            brush.lineTo(ancho * x, alto * (y + 0.15));
            brush.lineTo(ancho * (x - 0.04), alto * (y + 0.25));
            brush.stroke();
            break;
    }
}

//Escribo y animo palabra
function escribirP(palabra) {
    var color = "red";
    var time = setInterval(function () {
        if (!iniciarJuego) {
            brush.clearRect(0, 0, ancho, alto * 0.11);
            brush.fillStyle = color;
            brush.strokeStyle = color;
            brush.font = "bold 32px Playfair Display";
            brush.textAlign = "center";
            brush.beginPath();
            brush.fillText(palabra, ancho * 0.5, alto * 0.1);
            brush.fill();
            brush.stroke();
            if (color == "red") {
                color = "black";
            } else {
                color = "red";
            }
        } else {
            clearInterval(time);
        }
    }, 500);
}
