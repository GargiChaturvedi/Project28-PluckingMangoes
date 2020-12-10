class Chain {
    constructor(bodyA, pointB) {
        this.bodyA = bodyA;
        this.pointB = pointB;
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly() {
        this.chain.bodyA = null;
    }
    attach() {
        this.chain.bodyA = this.bodyA;
    }
    display() {
        if(this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}