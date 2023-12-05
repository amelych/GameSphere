var ctx;
var surprise = false;
var bucle = true;
var intervalo;

function estado(){
    if (surprise) {
        surprise = false;
    } else {
        surprise = true;
    }
    dibujar();
}

function dibujar() {
    ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.lineWidth = 3;
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        // cabeza
        ctx.beginPath();
        ctx.arc(400, 200, 30, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.stroke();

       
        // sonrisa
        if(surprise == true) {
            ctx.strokeStyle = "#c00";
            ctx.fillStyle = "#c00";
            ctx.beginPath();
            ctx.arc(400, 215, 10, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.stroke();
        } else {
             
        ctx.strokeStyle = "#c00";
        ctx.beginPath();
        ctx.arc(400, 200, 20, Math.PI, -0.01, true);
        ctx.stroke();
        }

        // ojos
        ctx.fillStyle = "#c00";
        ctx.beginPath();
        ctx.arc(390, 195, 3, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(410, 195, 3, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        // cuerpo
        ctx.lineWidth = 4;
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(400, 325);
        ctx.lineTo(400, 230);
        ctx.stroke();


        if (surprise == true) {
            // brazo izquierdo
            ctx.beginPath();
            ctx.moveTo(400, 275);
            ctx.lineTo(375, 225);
            ctx.stroke();

            // brazo derecho
            ctx.beginPath();
            ctx.moveTo(400, 275);
            ctx.lineTo(425, 225);
            ctx.stroke();

        } else {
            // brazo izquierdo
            ctx.beginPath();
            ctx.moveTo(400, 235);
            ctx.lineTo(375, 300);
            ctx.stroke();

            // brazo derecho
            ctx.beginPath();
            ctx.moveTo(400, 235);
            ctx.lineTo(425, 300);
            ctx.stroke();
        }
        // pierna izquierda
        ctx.beginPath();
        ctx.moveTo(400, 325);
        ctx.lineTo(375, 400);
        ctx.stroke();

        // pierna derecha
        ctx.beginPath();
        ctx.moveTo(400, 325);
        ctx.lineTo(425, 400);
        ctx.stroke();
    }
    else {
        alert('error en el codigo o en ctx');
    }
}

window.onload = function () {
    canvas = document.getElementById('canvas2');
    if (canvas && canvas.getContext) {
        dibujar();
    }
}
    document.addEventListener('keypress', function (e) {
        e.preventDefault();
        if (e.key == 32 || e.code == "Space") {
            console.log("espacio");
            clearInterval(intervalo);
            intervalo = setInterval(estado, 500);
        }
    });

    document.addEventListener('keydown', (event)=>{
        if(event.ctrlKey){
            if(event.ctrlKey &&( event.key == 'c')) {
                clearInterval(intervalo);
                console.log("ctrl + c");
            }
        }
    }, false);
