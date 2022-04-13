
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var pedra;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution : 1
	  }

	var pedra_options = {
		restitution : 0.4,
		frictionair: 0.5
	  }

	var plane_options = {
		isStatic:true
	}

	//Crie os Corpos Aqui.
	ball = Bodies.circle(200,100,30,ball_options);
	World.add(world,ball);

	pedra = Bodies.rectangle(random(200,400),random(100,120), 100,10, pedra_options);
	World.add(world,pedra);

	ground = Bodies.rectangle(random(200,400),699,250,10,plane_options);
	World.add(world,ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(255);

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,250,10);
  rect(pedra.position.x,pedra.position.y,100,10)
  
  drawSprites();
 
}



