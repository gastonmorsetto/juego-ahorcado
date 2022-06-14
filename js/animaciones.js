//Animacion del boton
function activarAnimacion() {
    btoAgregarPalabra.classList.remove("desplazar-original");
    btoAgregarPalabra.classList.add("desplazar-izquierda");
    ingresarPalabra.style.backgroundColor = "white";
    ingresarPalabra.classList.remove("desplazar-original");
    ingresarPalabra.classList.add("desplazar-derecha");
    btoTexto.classList.remove("visible");
    btoTexto.classList.add("invisible");
    setTimeout(function () {
        btoTexto.innerHTML = "Almacenar palabra";
        btoTexto.classList.add("visible");
    }, 800);
    btoAgregarPalabra.blur();
}

function desactivarAnimacion() {
    btoAgregarPalabra.classList.remove("desplazar-izquierda");
    btoAgregarPalabra.classList.add("desplazar-original");
    ingresarPalabra.classList.remove("desplazar-derecha");
    ingresarPalabra.classList.add("desplazar-original");
    if (entrada.length > 0) {
        btoTexto.classList.remove("visible");
        btoTexto.classList.add("invisible");

        setTimeout(function () {
            btoTexto.innerHTML = "¡Se ha guardado correctamente!";
            btoTexto.classList.remove("invisible");
            btoTexto.classList.add("visible");
        }, 800);

        setTimeout(function () {
            btoTexto.classList.remove("visible");
            btoTexto.classList.add("invisible");
        }, 1600);

        setTimeout(function () {
            btoTexto.innerHTML = "Agregar palabras";
            btoTexto.classList.remove("invisible");
            btoTexto.classList.add("visible");
        }, 2400);
        btoAgregarPalabra.blur();
    } else {
        btoTexto.classList.remove("visible");
        btoTexto.classList.add("invisible");

        setTimeout(function () {
            btoTexto.innerHTML = "Agregar palabras";
            btoTexto.classList.remove("invisible");
            btoTexto.classList.add("visible");
        }, 800);
        btoAgregarPalabra.blur();
    }
}

function errorEntrada() {
    btoAgregarPalabra.classList.remove("desplazar-izquierda");
    btoTexto.classList.remove("visible");
    btoTexto.classList.add("invisible");
    btoAgregarPalabra.classList.add("erratico-derecha");

    setTimeout(function () {
        btoTexto.innerHTML = "Error. Entrada inválida";
        btoTexto.classList.remove("invisible");
        btoTexto.classList.add("visible");
        btoAgregarPalabra.classList.remove("erratico-derecha");
        btoAgregarPalabra.classList.add("erratico-izquierda");
    }, 100);

    setTimeout(function () {
        btoAgregarPalabra.classList.remove("erratico-izquierda");
        btoAgregarPalabra.classList.add("erratico-derecha");
    }, 200);

    setTimeout(function () {
        btoAgregarPalabra.classList.remove("erratico-derecha");
        btoAgregarPalabra.classList.add("erratico-izquierda");
    }, 300);

    setTimeout(function () {
        btoAgregarPalabra.classList.remove("erratico-izquierda");
        btoAgregarPalabra.classList.add("erratico-derecha");
    }, 400);

    setTimeout(function () {
        btoAgregarPalabra.classList.remove("erratico-derecha");
        btoAgregarPalabra.classList.add("erratico-izquierda");
    }, 500);

    setTimeout(function () {
        btoAgregarPalabra.classList.remove("erratico-izquierda");
        btoAgregarPalabra.classList.add("erratico-derecha");
    }, 600);

    setTimeout(function () {
        btoAgregarPalabra.classList.remove("erratico-derecha");
        btoAgregarPalabra.classList.add("erratico-izquierda");
    }, 700);

    setTimeout(function () {
        btoTexto.classList.remove("visible");
        btoTexto.classList.add("invisible");
    }, 1200);

    setTimeout(function () {
        btoTexto.innerHTML = "Almacenar palabra";
        btoTexto.classList.remove("invisible");
        btoTexto.classList.add("visible");
        btoAgregarPalabra.classList.remove("erratico-izquierda");
        btoAgregarPalabra.classList.add("desplazar-izquierda");
    }, 1600);
    btoAgregarPalabra.blur();
}