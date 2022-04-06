// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storleken på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function paintSquare() {
  // Blå kvadrat
  const s = 60; // Kvadratens sidlängd
  c.fillStyle = "brown";
  c.fillRect(midX - 30, midY + 125, s, 7*s);
}

function paintRectangle() {
  c.beginPath();
  c.rect(midX + 300, midY + 150, 150, 350);
  c.stroke();

}

function paintRectangle2() {
  c.beginPath();
  c.rect(midX - 425, midY + 150, 150, 350);
  c.stroke();
}
function tak() {
c.beginPath();
c.moveTo(midX-425, midY+150)
c.lineTo(midX-350, midY+80)
c.lineTo(midX-275, midY+150)
c.stroke()
}

function tak2() {
  c.beginPath();
  c.moveTo(midX+450, midY+150)
  c.lineTo(midX+375, midY+80)
  c.lineTo(midX+300, midY+150)
  c.stroke()
  }

function paintEllipse() {
  c.beginPath();
  c.ellipse(midX, midY, 50, 150, Math.PI, -1, Math.PI+1);
  c.stroke();
  c.fillStyle = "green"
  c.fill()
}

paintSquare();
paintEllipse();
paintRectangle();
paintRectangle2();
tak();
tak2();