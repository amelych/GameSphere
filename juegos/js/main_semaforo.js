var ctx;
var canvas;
var temp = 0;
var enVerde = false;
var enRojo = true;
var enAmbar = false;

window.onload = function () {
  canvas = document.getElementById("canvas1");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      dibujarSemaforo();
      dibujarluces();
      cambiar = false;
      cambiarSemaforo();
    }
  } else {
    alert("Error en el código o en ctx");
  }
};

function dibujarSemaforo() {
  ctx.fillStyle = "black";
  ctx.lineCap = "butt";
  ctx.beginPath();
  ctx.fillRect(340, 110, 70, 200);
  ctx.strokeRect(340, 110, 70, 200);

  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.strokeRect(365, 310, 20, 290);
  ctx.fillRect(365, 310, 20, 290);
}

function dibujarluces() {
  cambiarRojo();
  cambiarAmbar();
  cambiarVerde();
}

function cambiarRojo() {
  if (enRojo) {
    ctx.fillStyle = "red";
  } else {
    ctx.fillStyle = "#a10000";
  }
  ctx.beginPath();
  ctx.arc(375, 145, 30, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function cambiarAmbar() {
  if (enAmbar) {
    ctx.fillStyle = "yellow";
  } else {
    ctx.fillStyle = "#b2b502";
  }
  ctx.beginPath();
  ctx.arc(375, 210, 30, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function cambiarVerde() {
  if (enVerde) {
    ctx.fillStyle = "#2afa1b";
  } else {
    ctx.fillStyle = "#0a8a01";
  }
  ctx.beginPath();
  ctx.arc(375, 275, 30, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function cambiarSemaforo(){
  setInterval(ciclosemaforo,1000);
}

function ciclosemaforo() {
  temp++;
  if(enRojo && temp == 5) {
    enRojo = false;
    enVerde = true;
    dibujarluces();
    temp = 0;
  }
  if(enVerde && temp == 5) {
    enVerde = false;
    enAmbar = true;
    dibujarluces();
    temp = 0;
  }
  if(enAmbar && temp == 2){
    enAmbar = false;
    enRojo = true;
    dibujarluces();
    temp = 0;
  }
}

