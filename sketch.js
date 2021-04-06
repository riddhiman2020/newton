var paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render
function preload()
{
	  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1=new bob(320,450)
	bob2=new bob(360,450)
	bob3=new bob(400,450)
	bob4=new bob(440,450)
	bob5=new bob(480,450)
	roof1=new roof(400,250,230,20);
  rope1=new rope(bob1.body,roof1.body,-80,0);
	rope2=new rope(bob2.body,roof1.body,-40,0);
	rope3=new rope(bob3.body,roof1.body,-0,0);
	rope4=new rope(bob4.body,roof1.body,40,0);
	rope5=new rope(bob5.body,roof1.body,80,0);
	Engine.run(engine);
  
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:-45});
  }
  }

function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}


