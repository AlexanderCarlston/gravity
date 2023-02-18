import { randomIntFromRange, randomColor } from './utils';

const canvas = document.querySelector('canvas');
const c = canvas?.getContext('2d');
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
const gravity = 1;
const friction = 0.9;

if(canvas) {
  canvas.width = innerWidth;
  canvas.height = innerHeight;  
}

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})

addEventListener('resize', () => {
  if(!canvas) {return}
  canvas.width = innerWidth;
  canvas.height = innerHeight;
})

addEventListener('click', (event) => {
  init();
});

class Ball {
  x: number;
  y: number;
  radius: number;
  color: string;
  dy: number;
  dx: number;

  constructor(x: number, y: number, radius: number, color: string, dy: number, dx: number) {
    this.x = x
    this.y = y
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.color = color
  }

  draw() {
    // TODO: Remove all these stupid null checks
    if(!c) {return}
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  }

  update() {
    if(!canvas) {return}
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
    };

    if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

// Implementation
let ballAray: Ball[] = [];

function init() {
  if(!canvas) {return};
  ballAray = [];

  for (let i = 0; i < 50; i++) {
    let radius = randomIntFromRange(8, 20);
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(0, canvas.height - radius);
    let dx = randomIntFromRange(-2, 2);
    let dy = randomIntFromRange(-2, 2);
    ballAray.push(new Ball(x, y, radius, randomColor(colors), dy, dx));
  }
}

// Animation Loop
function animate() {
  if(!c || !canvas) {return};
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  ballAray.forEach((ball: Ball) => ball.update());
};

init();
animate();