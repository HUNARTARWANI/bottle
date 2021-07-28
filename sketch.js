var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bottle1,bottle2,bottle3,bottle4,bottle5,bottle6;
var bot1Img,bot2Img,bot3Img,bot4Img,bot5Img,bot6Img;
var ball,ballImg;

var score=0;

var gameOver, restart;

localStorage["HighestScore"] = 0;

function preload(){
  bot1Img = loadImage("bot1.png");
  bot2Img = loadImage("bot2.png");
  bot3Img = loadImage("bot3.png");
  bot4Img = loadImage("bot4.png");
  bot5Img = loadImage("bot5.png");
  bot6Img = loadImage("bot1.png");
  ballImg = loadImage("ball.png.png");

  
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(600, 600);
  
  bottle1 = createSprite(80,250,20,50);
  bottle1.addImage(bot1Img);
  bottle1.scale = 0.3;
  
  bottle2 = createSprite(120,250,20,50);
  bottle2.addImage(bot2Img);
  bottle2.scale = 0.5;
  
  
  bottle3 = createSprite(160,250,20,50);
  bottle3.addImage(bot3Img);
  bottle3.scale = 0.2;
  
  
  bottle4 = createSprite(220,250,20,50);
  bottle4.addImage(bot4Img);
  bottle4.scale = 0.2;
  
  
  bottle5 = createSprite(270,250,20,50);
  bottle5.addImage(bot5Img);
  bottle5.scale = 0.04;
  
  
  bottle6 = createSprite(310,250,20,50);
  bottle6.addImage(bot1Img);
  bottle6.scale = 0.3;
  
  ball = createSprite(300,500,20,50);
  ball.addImage(ballImg);
  ball.scale = 0.3;
  
  
  
  //ground.x = ground.width /2;
  //ground.velocityX = -(6 + 3*score/100);
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  
  
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  //trex.debug = true;
  background("yellow");
  text("Score: "+ score, 500,50);
  
  
  
  drawSprites();
}

