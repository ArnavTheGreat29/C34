const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var chain;
function setup() {
  createCanvas(800,400);

  
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(500,100)
  box2 = new Box(450,100)
  box3 = new Box(470,50)
  ball = new Ball(50,350)
  chain = new SlingShot(ball.body,{x:50,y:350})
  ground = new Ground(400,375,800,10)
}

function draw() {
  background(0); 
  Engine.update(engine);
 
  box1.display()
  box2.display()
  box3.display()
  ball.display()
  chain.display()

  ground.display()

  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


