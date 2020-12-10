class Mango {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 50
        }
        this.x = x;
        this.y = y;
        this.radius = 40;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
        this.image = loadImage("mango.png");
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 2 * this.radius, 2 * this.radius);
        pop();
    }
}