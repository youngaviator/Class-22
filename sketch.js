const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var ball;
var ground;

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world
  var options={
    restitution:2.0,
    'density':20.0
  }

  var goptions={
     isStatic:true
  }
  ball=Bodies.circle(400,200,20,options);
  World.add(world,ball);

  ground=Bodies.rectangle(200,380,750,10,goptions)
  World.add(world,ground)
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,750,10)
}