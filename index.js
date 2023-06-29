const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
  constructor({ position }) {
    this.position = position;
    this.width = 40;
    this.height = 40;
  }

  draw() {
    ctx.fillStyle = "blue";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

const boundaries = [
    new Boundary({
        position: {
          x: 0,
          y: 0
        }
      }),
      new Boundary({
        position: {
          x: 41,
          y: 0
        }
      })
      
]
boundaries.forEach((boundary) => {
    boundary.draw()
})
