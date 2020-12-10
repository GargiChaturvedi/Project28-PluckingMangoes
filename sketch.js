const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, ground, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, stone, chain;
var boyImage, boySprite, treeSprite, treeImage;

function preload() {
  boyImage = loadImage("boy.png");
  treeImage = loadImage("tree.png");
}

function setup() {
  createCanvas(1280,610);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(640, 600, 1280, 30);
  mango1 = new Mango(1000, 100);
  mango2 = new Mango(900, 50);
  mango3 = new Mango(800, 150);
  mango4 = new Mango(950, 200);
  mango5 = new Mango(1100, 50);
  mango6 = new Mango(1250, 150);
  mango7 = new Mango(1150, 200);
  mango8 = new Mango(1100, 150);
  stone = new Stone(250, 430);
  chain = new Chain(stone.body, {x: 220, y: 370});

  boySprite = createSprite(300, 450);
  boySprite.addImage("boy", boyImage);
  boySprite.scale = 0.15;

  treeSprite = createSprite(1000, 300);
  treeSprite.addImage("tree", treeImage);
  treeSprite.scale = 0.6;
}

function draw() {
  Engine.update(engine);
  background(255,255,255);
  drawSprites();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  chain.display();

  textSize(20);
  fill("black");
  text("Press space for another turn", 50, 50);

  collision(stone, mango1);
  collision(stone, mango2);
  collision(stone, mango3);
  collision(stone, mango4);
  collision(stone, mango5);
  collision(stone, mango6);
  collision(stone, mango7);
  collision(stone, mango8);
}

function mouseDragged() {
  Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  chain.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    chain.attach();
  }
}

function collision(obj1, obj2) {
  var stoneBodyPosition = obj1.body.position;
  var mangoBodyPosition = obj2.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  if(distance <= obj2.radius+obj1.radius) {
    Matter.Body.setStatic(obj2.body,false);
  }

  /*
  if(obj1.body.position.x - obj2.body.position.x <= obj1.radius + obj2.radius
    && obj2.body.position.x - obj1.body.position.x <= obj1.radius + obj2.radius
    && obj1.body.position.y - obj2.body.position.y <= obj1.radius + obj2.radius
    && obj2.body.position.y - obj1.body.position.y <= obj1.radius + obj2.radius) {
      Body.setStatic(obj2.body, false);
      console.log("hello");
    }
  else {
      Body.setStatic(obj2.body, true);
  }
  */
}