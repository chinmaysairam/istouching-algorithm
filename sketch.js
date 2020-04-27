var movingRect,fixRect;
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 30, 20);
  fixRect=createSprite(350,150,40,30);
 
  
}

function draw() {
  background("pink"); 
  movingRect.x=mouseX
  movingRect.y=mouseY
  var width_sum=movingRect.width/2+fixRect.width/2
  var _sum=movingRect.
if(movingRect.x-fixRect.x<width_sum
  &&fixRect.x-movingRect.x<width_sum){ 
  movingRect.shapeColor="red";
  fixRect.shapeColor="red";

}

else{
  movingRect.shapeColor="black";
  fixRect.shapeColor="black";

}




  drawSprites();
}