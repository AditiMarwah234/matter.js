
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone,ground;
var gear1,gear2,gear3,gear4,gear5,gear6,gear7,gear8,gear9,gear10,gear11,gear12;
var world, robot;
var bg;

var launcher;

function preload(){
	robot =loadImage("images/robot.png");
  bg = loadImage("images/treebg.jpeg")
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235,420,30); 

	gear1 = new Gear(1100,100,30);
  gear2 = new Gear(1170,130,30);
	gear3 = new Gear(1010,140,30);
	gear4 = new Gear(1000,70,30);
	gear5 = new Gear(1100,70,30);
	gear6 = new Gear(1000,230,30);
	gear7 = new Gear(900,230,40);
	gear8 = new Gear(1140,150,40);
	gear9 = new Gear(1100,230,40);
	gear10 = new Gear(1200,200,40);
	gear11 = new Gear(1120,50,40);
	gear12 = new Gear(900,160,40);

	tree = new Tree(1050,580);
	ground = new Ground(width/2,600,width,20);

  //create launcher with stone as bodyA
  launcher = new Launcher(stone.body,{x:235,y:420})

	Engine.run(engine);
}

function draw() {

  background(230);
  push()
  imageMode(CENTER)
  image(bg, width/2, height/2, width, height)

  pop()

  Engine.update(engine);
  textSize(30);
  fill("white")
  text("Hit the gears with the stone!!",50 ,50);
 
  image(robot,85,230,200,300);
  

  tree.display();
  stone.display();


  gear1.display();
  gear2.display();
  gear3.display();
  gear4.display();
  gear6.display();
  gear7.display();
  gear8.display();
  gear9.display();
  gear10.display();
  gear11.display();
  gear12.display();

  stone.display();
  ground.display();
  launcher.display();


  detectollision(stone,gear1);
  detectollision(stone,gear2);
  detectollision(stone,gear3);
  detectollision(stone,gear4);
  detectollision(stone,gear5);
  detectollision(stone,gear6);
  detectollision(stone,gear7);
  detectollision(stone,gear8);
  detectollision(stone,gear9);
  detectollision(stone,gear10);
  detectollision(stone,gear11);
  detectollision(stone,gear12);
}

function mouseDragged()
{
  // Set position of stone when mouse is dragged
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
}


function detectollision(lstone,lgear){

  gearBodyPosition=lgear.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, gearBodyPosition.x, gearBodyPosition.y)
  	if(distance<=lgear.r+lstone.r)
    {
  	  Matter.Body.setStatic(lgear.body,false);
    }

  }