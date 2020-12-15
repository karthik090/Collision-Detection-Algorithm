var fixed,moving;


function setup() {
  createCanvas(1200,800);
  fixed = createSprite(400, 200, 80, 50);
  moving = createSprite(200,200,50,80);
  fixed.shapeColor="red"
  moving.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  moving.x=mouseX;
  moving.y=mouseY;
  if(moving.x-fixed.x<fixed.width/2+moving.width/2&&
    fixed.x-moving.x<fixed.width/2+moving.width/2&&
    moving.y-fixed.y<fixed.height/2+moving.height/2&&
    fixed.y-moving.y<fixed.height/2+moving.height/2){
    fixed.shapeColor="green"
    moving.shapeColor="yellow"
  }
  else{
    fixed.shapeColor="red"
    moving.shapeColor="blue" 
  }
  drawSprites();
}