var ctx;
var canvas;
var radioP = 80;
var radioG = 200;
var centerX = 400;
var centerY = 400;
var angulo = 0;
var speed = 5;
window.onload = function () {
    canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            moverCirculo();
            var speedRange = document.getElementById("speedRange");
            var speedValue = document.getElementById("speedValue");
            speedRange.addEventListener('input', function(){
                speed = parseInt(this.value);
                speedValue.textContent = speed;
            })
        }
    } else {
        alert('Error en el código o en ctx');
    }
}

function moverCirculo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var circuloPX = centerX + (radioG - radioP) * Math.cos(angulo);
    var circuloPY = centerY + (radioG - radioP) * Math.sin(angulo);
    dibujarCirculo(centerX, centerY, radioG, "black");
    dibujarCirculo(circuloPX, circuloPY, radioP, "red");
    angulo += 0.01 * speed;
    requestAnimationFrame(moverCirculo);
}

function dibujarCirculo(x, y, radio, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}


