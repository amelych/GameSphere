var ctx;
var bola = new Image();
var canvas;
var radio = 32;
var bolax = 100;
var bolay = 150;
var raquetax = 400;
var ancho, alto;
var limiteder, limiteizq, limiteup, limitedown;
var dx = 3;
var dy = 3;
var velo = 25;
var puntos = 0;
var id;

window.onload = function () {
    canvas = document.getElementById('canvas1');
    bola.src = './js/media/pong.png';
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            ancho = canvas.width;
            alto = canvas.height;
            limiteder = ancho - radio + 2
            limiteizq = -3
            limiteup = -3
            limitedown = alto - radio
            ctx.lineWidth = radio;
            ctx.fillStyle = 'red';

            // Agregamos un solo event listener para manejar las teclas
            document.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowLeft' && raquetax > 0) {
                    raquetax -= 20;
                } else if (e.key === 'ArrowRight' && raquetax < 720) {
                    raquetax += 20;
                }
            });

            empezar_juego();
        }
    } else {
        alert('Error en el código o en ctx');
    }
}

function empezar_juego() {
    puntos = 0;
    bolax = 100;
    bolay = 150;
    velo = 25;
    id = setInterval(mueve, velo);
}

function parar_juego() {
    clearInterval(id);
}

function verifica() {
    var nbolax = bolax + dx;
    var nbolay = bolay + dy;
    if (nbolax >= limiteder) {
        dx *= -1;
        nbolax = limiteder;
    }
    if (nbolax <= limiteizq) {
        dx *= -1;
        nbolax = limiteizq;
    }
    if (nbolay <= limiteup) {
        dy *= -1;
        nbolay = limiteup;
    }
    if (nbolay >= 515 && nbolax >= raquetax && nbolax <= raquetax + 80) {
        dy *= -1.1;
        nbolay = 515;
        puntos++;
    }
    if (nbolay >= 600) {
        parar_juego();
        continuar();
    }

    bolax = nbolax;
    bolay = nbolay;
}

function raqueta() {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(raquetax, 550);
    ctx.lineTo(raquetax + 80, 550);
    ctx.stroke();
}

function mueve() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bola, bolax, bolay);
    verifica();
    bolax += dx;
    bolay += dy;
    raqueta();
    dibujarPuntos();
}

function dibujarPuntos() {
    ctx.font = "bold 20px serif";
    ctx.fillText("Puntuación: " + puntos, 30, 20);
}

function continuar() {
    setTimeout(function () {
        var result = window.confirm("¿Quieres volver a jugar?");
        if (result) {
            empezar_juego();
        } else {
            window.alert("Juego acabado, puntuación " + puntos);
        }
    }, 100);
}
