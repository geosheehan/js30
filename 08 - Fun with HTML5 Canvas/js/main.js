const canvas = document.getElementById('draw');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 15;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function updatePosition(x, y) {
   [lastX, lastY] = [x, y];
}

function draw(e) {
   if (!isDrawing) return;
   console.log(e);
   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
   ctx.beginPath();
   ctx.moveTo(lastX, lastY);
   ctx.lineTo(e.offsetX, e.offsetY);
   ctx.stroke();

   updatePosition(e.offsetX, e.offsetY);
   hue = ++hue % 360;

   if (100 <= ctx.lineWidth || ctx.lineWidth <= 1) {
      direction = !direction;
   }

   direction ? ctx.lineWidth++ : ctx.lineWidth--;

}

function drawOn(e) {
   isDrawing = true;
   updatePosition(e.offsetX, e.offsetY);
}
function drawOff() {
   isDrawing = false;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', drawOn);
canvas.addEventListener('mouseup', drawOff);
canvas.addEventListener('mouseout', drawOff);