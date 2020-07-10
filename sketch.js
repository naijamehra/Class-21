var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,50);
  movingRect = createSprite(400,800,80,30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.velocityY = 5;
  movingRect.velocityY = -5; 
}

function draw() {
  background(255,255,255);  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  //BounceOff(movingRect,fixedRect);
   if(isTouching(movingRect,fixedRect)) {
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
   }
   else {
     movingRect.shapeColor = "green";
     fixedRect.shapeColor = "green";
   }
  drawSprites();
}

function isTouching(object1,object2) {
  if (object1.x - object2.x<object1.width/2+object2.width/2 && 
    object2.x-object1.x<object1.width/2+object2.width/2 && 
    object2.y-object1.y<object1.height/2+object2.height/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2)  {
    return true;
  }
  else {
    return false;
  }
}
