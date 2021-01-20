class Tree {
    constructor(x, y, width , height  ) {
        var options = {
            'restitution':1,
            'friction':1,
            'density':1.2,
            isStatic : true 
        }
        this.x = x;
        this.y  = y ;

        this.width = width;
        this.height = height;

        this.image = loadImage("sprites/tree.png") 
        this.body = Bodies.rectangle(this.x,this.y);
        World.add(world,this.body);

}
display (){

        imageMode(CENTER);
        image(this.image,this.x, this.y,this.width, this.height);

}
}