var ship
var sea, seaImage
function preload(){
seaImage = loadAnimation("sea.png");
ship = loadAnimation("ship-1");
}
function setup(){
  createCanvas(400,400);
  sea = createSprite(200,180,400,20);
  sea.addImage("sea.png",seaImage);
  sea.x = sea.width /2;
  sea.velocityX = -4;

  ship = createSprite(50,180)
  ship.addImage("ship-1.png", ship)
  ship.scale = 0.5;
}

function draw() {
  background("blue");
 
}