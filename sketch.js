var fixedrect, movingrect

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400,200,40,50);
  fixedrect.shapeColor="yellow";

  movingrect = createSprite(100,100,30,40);
  movingrect.shapeColor="yellow";
}

function draw() {
  background("orange");  

  movingrect.x=mouseX;
  movingrect.y=mouseY;

if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
  && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
  && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
  && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){

  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";

  } else
{

fixedrect.shapeColor="yellow";
movingrect.shapeColor="yellow";

}




  drawSprites();
}