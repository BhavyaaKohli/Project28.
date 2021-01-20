
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var stone1
 var boy
 var ground
 var tree
var mango1 , mango2, mango3, mango4, mango5
var mango6 , mango7 , mango8 , mango9 , mango10
var launcherObject
function preload(){

boyImage = loadImage("sprites/boy.png")	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new Stone(195,410,70)
	stoneImage = loadImage("sprites/stone.png")

	
	ground = createSprite(100,520,2400,50)
    ground.shapeColor =  "green"
	
	boy = new Boy (290,430,250,250)
	tree = new Tree (1000,250 ,500,500)

	mango1 = new Mango(1000,150 ,50,50)
	mango2 = new Mango(900,250 ,50,50)
	mango3= new Mango(1080, 80 , 50,50)
	mango4 = new Mango(1200,160 ,50,50)
	mango5 = new Mango(800,170 ,50,50)

	mango6 = new Mango(900,70 ,50,50)
	mango7 = new Mango(1150,120 ,50,50)
	mango8 = new Mango(1010,50 ,50,50)
	mango9 = new Mango(1100,200 ,50,50)
	mango10= new Mango(900,170 ,50,50)

	launcherObject = new Launcher(stone1.body, {x:210,y:380});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
   tree.display();
  
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()

   ground.display()
   stone1.display()
   boy.display();
	launcherObject.display()
	

	detectcollision(stone1 , mango1)
	detectcollision(stone1 , mango2)
	detectcollision(stone1 , mango3)
	detectcollision(stone1 , mango4)
	detectcollision(stone1 , mango5)
	detectcollision(stone1 , mango6)
	detectcollision(stone1 , mango7)
	detectcollision(stone1 , mango8)
	detectcollision(stone1 , mango9)
	detectcollision(stone1 , mango10)

}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  launcherObject.fly();
}

function keyPressed(){
	if (keyCode === 32){
	launcherObject.attach(stone1.body);	
	}
}

function detectcollision (lstone , lmango ){
	 mangoBodyPosition = lmango.body.position
	 stoneBodyPosition = lstone.body.position

	 var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y )
	 if(distance<= lmango.r+lstone.r)
	 {
		 Matter.Body.setStatic(lmango.body , false)
	 }
}
