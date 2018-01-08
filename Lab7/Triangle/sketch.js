
var position,dir,velocity,newVec;
var v1,v2;

function setup() {
  createCanvas(600, 600);
  fill(0);
  position = createVector(0,0);
  dir = createVector(0,-1);

  velocity = createVector(-0.3,-0.4);

}

function draw() {
  background(255);
  translate(width/2, height/2);

  translate(position.x,position.y);
  position = p5.Vector.add(position, velocity);

  //your code here
  if (velocity.cross(dir) < 0)
  {
          rotate(velocity.angleBetween(dir));
  } else
  {
          rotate(-velocity.angleBetween(dir));
  }

  // Display the shape
  triangle(0,0,-5,15,5,15);
}
