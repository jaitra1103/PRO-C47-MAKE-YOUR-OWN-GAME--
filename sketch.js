var PLAY = 1;
var END = 0;
var gameState = PLAY;

var boy1,boyImg,huddles1,stone1
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;

var gameOver, restart;

localStorage["HighestScore"] = 0;

function preload(){
boy1Img =   loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png","boy9.png");
  stone1 = loadImage("stone1.png")
  huddles1 = loadImage("huddles1.png")
// trex_collided = loadAnimation("trex_collided.png");
  gameOverImg = loadImage("gameOver.png")
  groundImage = loadImage("junglebackground.jpg");

  
  
  
  
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
 
  
  
  
  
  ground = createSprite(900,300,width,height);
 ground.addImage("ground",groundImage);
  // ground.x = ground.width /2;
  //  ground.velocityX = -6;
 
  ground.scale=4.3
  boy1=createSprite(50,height-70,20,20)
  boy1.addAnimation("running",boy1Img)
  boy1.scale =.3

  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  
   invisibleGround = createSprite(200,height-20,400,10);
   invisibleGround.visible = false;

  
  

  obstaclesGroup=new Group()
  
  score = 0;
}

function draw() {
  //trex.debug = true;
  background(groundImage);
  if(gameState===PLAY){
ground.velocityX=-4;

  if(keyDown("space")&& boy1.y >= 150) {
    boy1.velocityY = -15;
  }
  boy1.velocityY=boy1.velocityY+.8
  if(ground.x<200){
    ground.x=ground.width 
  
  }
  sawnObstecles()
  if(obstaclesGroup.isTouching(boy1)){
    gameState=END
  }
}

  
  else if(gameState===END){
    ground.velocityX=0
    boy1.velocityY=0
restart.visible=true
gameOver.visible=true
  }
 

  

  boy1.collide(invisibleGround)
  
  
  
    drawSprites();}


function reset(){
  gameState=PLAY
  score=0
  gameOver.visible=false
  restart.visible=false
  obstaclesGroup.destroyEach()
  
  boy1.changeAnimation("running",boy1_running)
}


function sawnObstecles(){
if(frameCount%100===0){
  var obstecles=createSprite(600,height-60,10,40)
  obstecles.velocityX=-6
  obstecles.y=Math.round(random(540,600))
  var rand=Math.round(random(1,2))
  switch(rand){
    case 1:obstecles.addImage(stone1);
    break;
    case 2:obstecles.addImage(huddles1);
    default:break;

  }
  obstaclesGroup.add(obstecles)
  obstecles.scale=.5
}
}