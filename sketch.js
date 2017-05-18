var x = 0;
var swimmer;
var swimmer2;
var swimmer3;
var a = 0;
var y = 0;
//function preload() {
  //Swimmer = loadImage ("assets/Person.png");
  //Swimmer2 = loadImage ("assets/Person.png");
  //Swimmer3 = loadImage ("assets/Person.png");
//}
function setup() {
  swimmer = loadImage ("assets/Person.png");
  swimmer2 = loadImage ("assets/Person.png");
  swimmer3 = loadImage ("assets/Person.png");
  createCanvas(windowWidth, windowHeight);
  background (300)
  
}

function draw() {
  image (swimmer2, a, 0)
  image (swimmer, x, 200)
  image (swimmer3, y, 400)
  
  if(keyIsDown(RIGHT_ARROW))
    x = x + 2;
  
  if(keyIsDown(DOWN_ARROW))
  y = y +2
  
 if (keyIsDown(LEFT_ARROW))
   a = a + 2;
}

function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}