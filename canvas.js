
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function circulo(tiempo) {
  for (let i = 0; i < 2; i = i + 0.2) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(200 * i - 10, 100, 10, Math.PI * i, false);
    ctx.stroke();
  }
}

circulo();

ctx.fillStyle = "yellow";
ctx.strokeStyle = "blue";

for (var i = 0; i <= 2; i = i + 0.2) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.arc(190 * i - 10, 150, 15, 0, Math.PI * i, false);
  ctx.stroke();
  ctx.fill();
}

ctx.fillStyle = "yellow";
ctx.strokeStyle = "blue";

for (var i = 0; i <= 2; i = i + 0.2) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.arc(190 * i - 10, 150, 15, 0, Math.PI * i, false);
  ctx.stroke();
  ctx.fill();

  document.writeln(i + "</br>");
}