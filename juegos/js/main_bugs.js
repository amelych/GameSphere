var ctx;
var bicho = new Image();
var bicho1 = new Image();
var canvas;
var tamañoBicho = 32;
var ancho, alto;
var cero = 0;
var x, y;
var puntos = 0;
var tiempo = 60;
bicho.src = './js/media/bicho.png';
bicho1.src = './js/media/bichoAgua.png';

window.onload = function () {
    canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            x = getRandomNumber(0, canvas.width - tamañoBicho);
            y = getRandomNumber(0, canvas.height - tamañoBicho);
            dibujarPuntos();
            dibujarBicho(x, y);

            canvas.addEventListener('click', function (e) {
                var rx = e.offsetX;
                var ry = e.offsetY;
                if ((rx >= x && rx <= x + tamañoBicho) && (ry >= y && ry <= y + tamañoBicho)) {
                    ctx.clearRect(x, y, bicho.width, bicho.height);
                    x = getRandomNumber(0, canvas.width - tamañoBicho);
                    y = getRandomNumber(0, canvas.height - tamañoBicho);
                    puntos++;
                    dibujarPuntos();
                    dibujarBicho(x, y);
                }
            });
            iniciarTemporizador();
        }
    } else {
        alert('Error en el código o en ctx');
    }
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function dibujarBicho(x, y) {
    ctx.drawImage(bicho, x, y);
}

function dibujarBicho1(x, y) {
    ctx.drawImage(bicho1, x, y);
}

function dibujarPuntos() {
    ctx.clearRect(0, 0, 200, 40);
    ctx.font = "bold 20px serif";
    ctx.fillText("Puntuación: " + puntos, 20, 20);
}


function dibujarTimer() {
    ctx.clearRect(700, 0, 100, 20);
    ctx.font = "bold 20px serif";
    ctx.fillText("Tiempo: " + tiempo, 700, 20);
}


function iniciarTemporizador() {
    dibujarTimer();
    tiempo--;
    if (tiempo >= 0) {
        setTimeout(iniciarTemporizador, 1000);
    } else {
        fin();
    }
}

function fin() {
    let eleccion = window.confirm("Juego acabado, su puntuación es " + puntos);
    if(eleccion) {
        puntos = 0;
        tiempo = 60;
        dibujarPuntos();
        iniciarTemporizador();
    } else {
        alert("Gracias por jugar, su puntuación final es " + puntos);
    }
}