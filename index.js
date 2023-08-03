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
const map = [
    ['-','-','-','-','-','-',],
    ['-',' ',' ',' ',' ','-',],
    ['-',' ',' ',' ',' ','-',],
    ['-','-','-','-','-','-',]
]
const boundaries = []

map.forEach(row => {
    row.forEach(symbol => {
        switch (symbol) {
        case '-':
        boundaries.push (
            new Boundary ({
                position: {
                   x:0,
                   y:0 
                }
            })
        )
        break
        }  
     })
})

boundaries.forEach((boundary) => {
    boundary.draw()
})
