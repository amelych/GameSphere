var ctx;
var canvas;
var width = 200;
var height = 150;
var color;
const colores = ["red",
  "yellow",
  "green",
  "blue",
  "magenta",
  "lightblue",
  "lightgreen",
  "purple",
  "brown",
  "orange"];

window.onload = function () {
  canvas = document.getElementById("canvas1");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      setInterval(dibujar, 1000);
    }
  } else {
    alert("Error en el código o en ctx");
  }
};

function dibujarAspa1(color) {
  color = cambiarColor();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineCap='butt';
  ctx.beginPath();
  ctx.moveTo(300,100);
  ctx.lineTo(400,100);
  ctx.lineTo(400,200);
  ctx.lineTo(300,100);
  ctx.fill();
}

function dibujarAspa2(color) {
  color = cambiarColor();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineCap='butt';
  ctx.beginPath();
  ctx.moveTo(400,200);
  ctx.lineTo(500,200);
  ctx.lineTo(500,100);
  ctx.fill();
}

function dibujarAspa3(color) {
  color = cambiarColor();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineCap='butt';
  ctx.beginPath();
  ctx.moveTo(400,200);
  ctx.lineTo(400,300);
  ctx.lineTo(500,300);
  ctx.fill();
}

function dibujarAspa4(color) {
  color = cambiarColor();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineCap='butt';
  ctx.beginPath();
  ctx.moveTo(400,200);
  ctx.lineTo(300,200);
  ctx.lineTo(300,300);
  ctx.fill();
}

function dibujarPalo() {
  ctx.lineWidth= 2;
  
  ctx.strokeStyle= "pink";
  ctx.beginPath();
  ctx.moveTo(400,200);
  ctx.lineTo(400,500);
  ctx.stroke();
}

function cambiarColor() {
  const indice = Math.floor(Math.random() * colores.length);
  return colores[indice];
}

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dibujarAspa1();
  dibujarAspa2();
  dibujarAspa3();
  dibujarAspa4();
  dibujarPalo();
}
 
