var sprite, sprite2
function setup() {
  createCanvas(800,400);
  sprite = createSprite(400, 200, 50, 50);
  sprite2 = createSprite(200, 200, 50, 50);
  
}

function draw() {
  background("red");  
  sprite2.x=World.mouseX
  sprite2.y=World.mouseY
  sprite.shapeColor = "red"
  // if(sprite2.isTouching(sprite)){
  //   sprite.shapeColor = "blue"
  //   sprite2.shapeColor = "green"
  // }
  if (Math.abs(sprite.y-sprite2.y)<sprite.height/2+sprite2.height/2 && Math.abs(sprite.x-sprite2.x)<sprite.width/2+sprite2.width/2){
    sprite.shapeColor = "blue"
    sprite2.shapeColor = "green"
  }
  drawSprites();

}