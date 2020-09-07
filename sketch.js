var ground,bananaImage,obstacleImage,obstaclegroup,score,backgrd,running_monkey,monkey,banana,obstacle,invisibleground,bananaGroup,obstacleGroup;


function preload(){
  backgrd=loadImage("jungle.jpg");
  running_monkey= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
  
}  


function setup() {
  createCanvas(400, 400);
  ground = createSprite(300, 180, 600, 20);
  ground.addImage(backgrd);
  
  monkey = createSprite(50,380,20,20);
  monkey.scale=0.15;
  monkey.addAnimation("running",running_monkey);
  
  invisibleground=createSprite(200,398,400,10);
  invisibleground.visible=false;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;
}

function draw() {
  background("white");
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,340,100);
  ground.velocityX=-7;
  if (ground.x < 200){
    ground.x = ground.width/2;
  }
  if(keyDown("space") ){
      monkey.velocityY = -10 ;
  }  
  
  monkey.velocityY=monkey.velocityY+0.5;  
  bananas();
  obstacles();
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
  }
  
  
  
  
  console.log(monkey.y);
  monkey.collide(invisibleground); 
  drawSprites();

}
function bananas()
{
  if(World.frameCount % 80===0)
  {
    var banana=createSprite(400,100,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.08 ;
    banana.y=random(50,120);
    banana.velocityX=-7;
    banana.lifetime=60;
    bananaGroup.add(banana);
  }
}
function obstacles() {
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - 6 ;    
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}









