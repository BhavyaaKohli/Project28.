class Mango  {
    constructor(x, y, r) {
        var options = {
       
            'restitution':0.4,
             isStatic : true 
        }
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("sprites/mango.png") 
        this.body = Bodies.circle(this.x,this.y, this.r,options);
       
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position
        

        push()
        translate(pos.x,pos.y)
        strokeWeight(3)
        fill("255,0,255")
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop()



    }
}