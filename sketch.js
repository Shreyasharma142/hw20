

var car,wall
var speed,width;



function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  width=random(400,1500);
  car=createSprite(50,200,50,50);
  car.shapeColor=color(255);

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0);  

  if(wall.X.car.x<(car.width+wall.width/2))
  {
         car.velocityY=0;
         var deformation=0.5 * width * speed * speed/22500;
         if(deformation>180)
         {
           car.shapeColor=color(255,0,0)
           }
           if(deformation<180 && deformation>100)
           {
               car.shapeColor=color(230,230,0);
           }
           if(deformation<100)
           {
              car.shapeColor=color(0,255,0);
           }
  }
  
  drawSprites();
}