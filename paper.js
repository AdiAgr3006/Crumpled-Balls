class Paper {
    constructor(x,y) {
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1.75
        }

        this.body = Bodies.circle(x,y,20, options);
        World.add(world, this.body);
    }

    display(){
        circle(this.body.position.x, this.body.position.y,20);
    }
}