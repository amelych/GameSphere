var ctx;
var canvas;
var angulo = 0;
var disparar;
var balax;
var balay;
var anguloBala;
var longitudC = 90;

window.onload = function () {
    canvas = document.getElementById('canvas1');
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        if (ctx) {
            dibujarTanque();
            
            disparar = true;
            document.addEventListener('keydown', function (e) {
                if (e.key == 'ArrowRight') {
                    angulo += 0.05;
                    dibujarTanque();
                }
                if (e.key == 'ArrowLeft') {
                    console.log('pulsa down');
                    angulo -= 0.05;
                    dibujarTanque();
                }
            });
            document.addEventListener('keypress', function (e) {
                e.preventDefault();
                if (e.code == 'Space' && disparar) {
                    console.log("space");
                    balax = 350 + (Math.cos(angulo) * longitudC);
                    balay = 380 + (Math.sin(angulo) * longitudC);
                    anguloBala = angulo;
                    disparar = false;
                    dibujarBala();
                }
            })
        }
    } else {
        alert('Error en el código o en ctx');
    }
}

function dibujarTanque() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'darkgreen';
    // ruedas de arriba
    ctx.beginPath();
    ctx.fillRect(300, 330, 100, 20);
    ctx.strokeRect(300, 330, 100, 20);
    // ruedas de abajo
    ctx.beginPath();
    ctx.fillRect(300, 410, 100, 20);
    ctx.strokeRect(300, 410, 100, 20);
    // cuerpo tanque
    ctx.beginPath();
    ctx.fillRect(315, 350, 70, 60);
    ctx.strokeRect(315, 350, 70, 60);

    // dibujar cannon 
    dibujarLinea(350, 380, angulo);

    // circulo
    ctx.lineWidth = 2;
    ctx.fillStyle = "darkgreen";
    ctx.beginPath();
    ctx.arc(350, 380, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function dibujarLinea(x, y, angulo) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + (Math.cos(angulo) * longitudC), y + (Math.sin(angulo) * longitudC));
    ctx.stroke();
    ctx.closePath();
}

function dibujarBala() {
    dibujarTanque();
    balax += Math.cos(anguloBala) * 5;
    balay += Math.sin(anguloBala) * 5;
    if (balax <= canvas.width && balax >= 0 && balay <= canvas.height && balay >= 0) {
        ctx.beginPath();
        ctx.arc(balax, balay, 5, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        requestAnimationFrame(dibujarBala);
    } else {
        disparar = true;
    }
}
