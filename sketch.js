var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(600, 200, 50, 80);
  movingRect=createSprite(400, 400, 80, 30);

  movingRect.debug=true;
  fixedRect.debug=true;

  movingRect.shapeColor="blue"
  fixedRect.shapeColor="blue"


}

function draw() {
  background(255,255,255);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

console.log("movingRect.x"+ movingRect.x)
console.log("fixedRect.x"+ fixedRect.x)



  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    ){
    movingRect.shapeColor="red"
  fixedRect.shapeColor="red"
  }
  else
  {
    movingRect.shapeColor="blue"
  fixedRect.shapeColor="blue"
  }
  
  drawSprites();
}