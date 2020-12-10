class Stone {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = 30;
        this.body = Bodies.circle(this.x, this.y, this.radius);
        World.add(world, this.body);
        this.image = loadImage("stone.png");
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius+20, this.radius+20);
        pop();
    }
}