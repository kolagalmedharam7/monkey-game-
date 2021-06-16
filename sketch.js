var player,playerimg,banana,bananaimg;
var obstaclesGroup,bananaGroup;
var bg,backgroundimg;

function preload(){
  backgroundimg=loadImage("jungle.jpg");
  playerimg=loadAnimation("Monkey_1.png","Monkey_2.png","Monkey_3.png","Monkey_4.png","Monkey_5.png","Monkey_6.png","Monkey_7.png","Monkey_8.png","Monkey_9.png","Monkey_10.png");
}

function setup(){
  createCanvas(400,400);
  
  bg=createSprite(200,200);
  bg.addImage(backgroundimg);

  player=createSprite(50,320,10,10);
  player.assAnimation("running",playerimg);
  player.scale=0.2;
}

function draw(){
  background(220);
  
  drawSprites();
}

