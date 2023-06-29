const canvas = document.querySelector('canvas')

const ctx = canvas.getContext("2d");

canvas.width = innerWidth
canvas.height = innerHeight

class Boundary {
constructor ({position}){
    this.position = position
    this.width = 40
    this.height = 40
};
draw() {
    ctx.fillStyle = "blue" //what is the main difference between ' and "?
    ctx.fillRect(this.position.x,this.position.y,// a.b.c why do these statements make sense logically?
        this.width, this.height
    )
    };
};

const boundary = new Boundary ({
position: {
    x: 0,
    y: 0
}
});

boundary.draw()
