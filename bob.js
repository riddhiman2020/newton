class bob{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x,y,options);
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        fill("white");
        ellipse(0,0,40,40);
        pop();
    }
}