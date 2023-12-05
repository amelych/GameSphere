const botonRetroceder = document.getElementById("retroceder");
const botonAvanzar = document.getElementById("avanzar");

window.onload = function () {
    const Imagenes = [
        './media/carrousel/tanque_carrousel.jpg',
        './media/carrousel/bichos_carrousel.jpg',
        './media/carrousel/billar_carrousel.jpg',
        './media/carrousel/bolas_carrousel.jpg',
        './media/carrousel/colores_carrousel.jpg',
        './media/carrousel/faro_carrousel.jpg',
        './media/carrousel/pong_carrousel.jpg',
        './media/carrousel/semaforo_carrousel.jpg'
    ];

    let posicionActual = 0;
    let imagen = document.getElementById("carrousel_imagen");

    function pasarFoto() {
        if (posicionActual >= Imagenes.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = Imagenes.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    function renderizarImagen() {
        imagen.innerHTML = "";
        const elementoImg = document.createElement("img");
        elementoImg.src = Imagenes[posicionActual];
        imagen.appendChild(elementoImg);
    }

    botonAvanzar.addEventListener("click", pasarFoto);
    botonRetroceder.addEventListener("click", retrocederFoto);
    renderizarImagen();
};
