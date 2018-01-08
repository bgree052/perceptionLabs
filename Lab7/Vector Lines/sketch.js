var v1;
var v2;

function setup(){
  createCanvas(600,400,WEBGL);
  v1 = createVector(100,100,60);
  v2 = createVector(100,100,20);
}

function draw(){
  background("gray");
  camera(0, 0, (height/2) / tan(PI/6), width/2, height/2, 0, 0, 1, 0);

  console.log("v1 " +v1);
  stroke(0);
  strokeWeight(2);
  line(100,100,60,20);
  line(v1.x, v1.y, v1.z, 0, 0, 0);
  // line(a.x, a.y, a.z, 0, 0, 0);
  // line(a.x, a.y, a.z, 0, 0, 0);
}
