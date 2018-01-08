function setup(){
  createCanvas(600,600,WEBGL);
}

function draw(){
  background("gray");
  //fill(0);

  camera(0, 0, (height/2) / tan(PI/6), width/2, height/2, 0, 0, 1, 0);

  // rotateX(-50);
  // rotateY(-25);

  noFill();

  //Left Arm
  push();
  translate(-95,-50,0);
  box(80,25,0);
  pop();

  //Right Arm
  push();
  translate(95,-50,0);
  box(80,25,0);
  pop();

  //Body
  push();
  translate(0,10,0);
  box(100,150,0);
  pop();

  //Head
  push();
  translate(0,-120,0);
  sphere(45);
  pop();

  //Left Leg
  push();
  translate(-35,160,0);
  box(35,130,0);
  pop();

  //Right Leg
  push();
  translate(35,160,0);
  box(35,130,0);
  pop();

  //shield
  push();
  translate(130,-10,10);
  box(80,200,0.5);
  pop();

  //spear
  push();
  translate(-130,-10,10);
  box(20,300,1);
  translate(0,-150,0);
  cone(30,-50);
  pop();
}
