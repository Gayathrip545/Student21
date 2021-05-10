var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1= createSprite(100,100,50,50);
  gameObject1.shapeColor="green";

  gameObject2= createSprite(200,100,50,50);
  gameObject2.shapeColor="green";

  gameObject3= createSprite(300,100,50,50);
  gameObject3.shapeColor="green";

  gameObject4= createSprite(400,100,50,50);
  gameObject4.shapeColor="green";

}

function draw() {
  background("lightblue");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching())
 {
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
 }
 else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
 }
  
  
  drawSprites();
}

function isTouching(object1, object2)
{

  if(object1.x-fixedRect.x < object1.width/2+fixedRect.width/2
    && fixedRect.x-object1.x<object1.width/2+fixedRect.width/2
    && object1.y-fixedRect.y < object1.height/2+fixedRect.height/2
    && fixedRect.y-object1.y <object1.height/2+fixedRect.height/2
    )
    {
      return true;
    }
    else{
       
      return false;
      
    }

}
