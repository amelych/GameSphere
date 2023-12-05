var ctx;
var canvas;
var width = 200;
var height = 150;
var color;
const colores = ["rgba(255, 0, 0, 0.5)",
  "rgba(0, 255, 0, 0.5)",
  "rgba(0, 0, 255, 0.5)",
  "rgba(255, 255, 0, 0.5)",
  "rgba(255, 0, 255, 0.5)",
  "rgba(0, 255, 255, 0.5)",
  "rgba(128, 0, 0, 0.5)",
  "rgba(0, 128, 0, 0.5)",
  "rgba(0, 0, 128, 0.5)",
  "rgba(128, 128, 0, 0.5)",
  "rgba(128, 0, 128, 0.5)",
  "rgba(0, 128, 128, 0.5)",
  "rgba(255, 165, 0, 0.5)",
  "rgba(255, 192, 203, 0.5)",
  "rgba(255, 215, 0, 0.5)",
  "rgba(255, 69, 0, 0.5)",
  "rgba(0, 250, 154, 0.5)",
  "rgba(255, 140, 0, 0.5)",
  "rgba(0, 128, 128, 0.5)",
  "rgba(255, 99, 71, 0.5)"];

window.onload = function () {
  canvas = document.getElementById("canvas1");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      dibujar();
      setInterval(dibujar, 2000);
    }
  } else {
    alert("Error en el código o en ctx");
  }
};

function dibujarRect(color , x, y) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.fillRect(x,y,width,height);
}

function cambiarColor() {
  const indice = Math.floor(Math.random() * colores.length);
  return colores[indice];
}

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  let x = 0;
  let y = 0;
  for (let index = 0; index < 7; index++) {
    color = cambiarColor();
    dibujarRect(color, x, y);
    x += 100;
    y += 75;
  }
}
