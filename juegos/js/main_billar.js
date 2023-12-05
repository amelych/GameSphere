var ctx;
var canvas;
var bola1 = new Image();
var bola2 = new Image();
var radio = 32;
var bola1x = 250;
var bola1y = 150;
var bola2x = 260;
var bola2y = 400;
var d1x = 6;
var d1y = 6;
var d2x = 6;
var d2y = 6;
var ancho, alto;
var limiteder, limiteizq, limitearb, limiteabj;

window.onload = function() {
    canvas = document.getElementById('canvas1');
    bola1.src = "./js/media/bola2.png";
    bola2.src = "./js/media/bola5.png";
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
    } if (ctx) {
        ancho = canvas.width;
        alto = canvas.height;
        limiteder = ancho - radio;
        limiteizq = 0;
        limitearb = 0;
        limiteabj = alto - radio;
        ctx.lineWidth = radio;
        ctx.fillStyle = 'red';
        mueve();
        setInterval(mueve, 30);
    } else {
        alert('no funca');
    }
}

function mueve() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "#064";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(bola1,bola1x,bola1y);
    ctx.drawImage(bola2,bola2x,bola2y);
    verifica();
    bola1x += d1x;
    bola1y += d1y;
    bola2x += d2x;
    bola2y += d2y;
    // ctx.beginPath();
    // ctx.arc(bolax, bolay, radio,0, 2*Math.PI,true);
    // ctx.fill();
}

function verifica() {
    var nbola1x = bola1x +d1x;
    var nbola1y = bola1y +d1y;
    var nbola2x = bola2x +d2x;
    var nbola2y = bola2y +d2y;
    var coincidex = false;
    var coincidey = false;
    var comparax = nbola1x - nbola2x;
    var comparay = nbola1y - nbola2y;
    if (nbola1x > limiteder || nbola1x < limiteizq) {
        d1x *= -0.995;
    }
    if (nbola1y > limiteabj || nbola1y < limitearb) {
        d1y *= -0.995;
    }
    if (nbola2x > limiteder || nbola2x < limiteizq) {
        d2x *= -0.995;
    }
    if (nbola2y > limiteabj || nbola2y < limitearb) {
        d2y *= -0.995;
    }

    if (comparax >= -(radio) && comparax <= (radio)) {
        coincidex = true;
    }
    if (comparay >= -(radio) && comparay <= (radio)) {
        coincidey = true;
    }

    if (coincidex && coincidey) {
        d1x *= -0.995;
        d2x *= -0.995;
        d1y *= -0.995;
        d2y *= -0.995;
    }
    
}