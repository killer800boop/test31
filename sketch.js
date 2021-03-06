const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundimg;

function preload() {
backgroundimg = loadImage("Background.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create()
  world = engine.world
  ground1 = new ground(450,400,1100,10)
  hero1 = new hero(200,300,220,120)
  block1 = new block(400,300,70,70)
  block2 = new block(470,300,70,70)
  block3 = new block(540,300,70,70)
  block4 = new block(610,300,70,70)
  block5 = new block(680,300,70,70)
  block6 = new block(750,300,70,70)
  block7 = new block(820,300,70,70)
  block8 = new block(400,200,70,70)
  block9 = new block(470,200,70,70)
  block10 = new block(540,200,70,70)
  block11 = new block(610,200,70,70)
  block12 = new block(680,200,70,70)
  block13 = new block(750,200,70,70)
  block14 = new block(400,100,70,70)
  block15 = new block(470,100,70,70)
  block16 = new block(540,100,70,70)
  block17 = new block(610,100,70,70)
  block18 = new block(680,100,70,70) 
  block19 = new block(750,100,70,70) 
  rope1 = new rope(hero1.body,{x:200,y:200})
  monster1 = new monster(900,300,100,100)
}

function draw() {
  background(backgroundimg);
  Engine.update(engine)
  ground1.display();
  hero1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  rope1.display();
  monster1.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY})  
}

