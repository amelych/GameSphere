var ctx;
var canvas;
var ancho, alto;
var cero = 0;
var vuelta = false;

window.onload = function () {
    canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            dibujarCielo();
            dibujarSuelo();
            dibujarFaro();
            setInterval(dibujarLuz, 1500);
        }
    } else {
        alert('Error en el código o en ctx');
    }
}

function dibujarLuz() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarCielo();
    if(vuelta != true) {
        const grdR = ctx.createLinearGradient(435,60,750,300);
        grdR.addColorStop(0,"yellow");
        grdR.addColorStop(1,"rgba(0,0,0,0)");
        ctx.strokeStyle = grdR;
        ctx.fillStyle = grdR;
        ctx.beginPath();
        ctx.moveTo(435, 60);
        ctx.lineTo(750, 20);
        ctx.lineTo(750, 300);
        ctx.lineTo(435, 110);
        ctx.lineTo(435, 60);
        ctx.fill();
        vuelta = true;
    } else {
        const grdL = ctx.createLinearGradient(365,60,100,300);
        grdL.addColorStop(0,"yellow");
        grdL.addColorStop(1,"rgba(0,0,0,0)");
        ctx.strokeStyle = grdL;
        ctx.fillStyle = grdL;
        ctx.beginPath();
        ctx.moveTo(365, 60);
        ctx.lineTo(100, 20);
        ctx.lineTo(100, 300);
        ctx.lineTo(365, 110);
        ctx.lineTo(365, 60);
        ctx.fill();
        vuelta = false;
    }
    dibujarSuelo();
    dibujarFaro();
}

function dibujarFaro() {
    // triangulo
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#5f8ed4';
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(400, 20);
    ctx.lineTo(350, 59);
    ctx.lineTo(450, 59);
    ctx.lineTo(400, 20);
    ctx.fill();
    ctx.stroke();


    // cuadrado
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.fillRect(365, 60, 70, 50);
    ctx.strokeRect(365, 60, 70, 50);

    // rectangulo
    ctx.fillStyle = '#5f8ed4';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(400, 110);
    ctx.fillRect(350, 110, 100, 10);
    ctx.strokeRect(350, 110, 100, 10);

    // cuerpo 1
    ctx.lineWidth = 4;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(360, 122);
    ctx.lineTo(350, 210);
    ctx.lineTo(450, 210);
    ctx.lineTo(440, 122);
    ctx.fill();
    ctx.stroke();

    // cuerpo 2
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(350, 210);
    ctx.lineTo(450, 210);
    ctx.lineTo(460, 310);
    ctx.lineTo(340, 310);
    ctx.lineTo(350, 210);
    ctx.lineTo(450, 210);
    ctx.fill();
    ctx.stroke();

    // cuerpo 4
    ctx.beginPath();
    ctx.moveTo(350, 410);
    ctx.lineTo(470, 410);
    ctx.lineTo(480, 510);
    ctx.lineTo(320, 510);
    ctx.lineTo(330, 410);
    ctx.fill();
    ctx.stroke();


    // cuerpo 3
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(340, 310);
    ctx.lineTo(460, 310);
    ctx.lineTo(470, 410);
    ctx.lineTo(330, 410);
    ctx.lineTo(340, 310);
    ctx.fill();
    ctx.stroke();


    // base
    ctx.fillStyle = '#5f8ed4';
    ctx.beginPath();
    ctx.fillRect(310, 500, 180, 30);
    ctx.strokeRect(310, 500, 180, 30);
    ctx.stroke();
}

function dibujarSuelo() {
    ctx.fillStyle = '#7c7e80';
    ctx.beginPath();
    ctx.fillRect(0,530,800,270);
}

function dibujarCielo() {
    ctx.fillStyle = '#394b67';
    ctx.beginPath();
    ctx.fillRect(0,0,800,530);
}
