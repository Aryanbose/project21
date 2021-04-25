var bullet;
var wall,thickness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1300,200,thickness,height/2);
  thickness = random(22,83);
  speed=random (59,221);
  weight=random (222,103);
  
  bullet.velocityX = speed;

 }  

function draw() {
  background("black"); 
  if(wall.x-bullet.x <(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
      wall.shapeColor=color(223,12,0);
      if(hasCollided(bullet,wall))
      {
        bullet.velocityX=0;
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
        if (damage>10)
        {
          wall.shapeColor="red";
      }
      if (damage<10)
      {
        wall.shapeColor="green";
      }
      }
    }
  }
  drawSprites();
}
function hasCollided (lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}