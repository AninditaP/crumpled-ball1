
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
var engine,world;
var bin1,bin2,bin3;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	bin1= new BIN(1100,660,200,20);
	bin2= new BIN(1200,610,20,120);
	bin3= new BIN(1000,610,20,120);
	//groundObject=new ground(width/2,670,width,20);
	
	
	var options={
		isStatic:true
	}
	ground= Bodies.rectangle(width/2,680,width,20,options);
	World.add(world,ground);
	//console.log(bin1);
	

	var render = Render.create({
	   element:document.body,
	   engine:engine,
	   options:{

		width :1200,
		height:700,
		wireframes:false
	   }

	   });

	ball= new Ball(200,620,40);

	Engine.run(engine);
	
  
}


function draw() {
  background(0);
  rectMode(CENTER);

	bin1.display();
    bin2.display();
	bin3.display();
	
	ball.display();
	fill("grey")
	rect(ground.position.x,ground.position.y,1600,20);


  
  
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

	}



}



