var line1 = {
  x1 : 100,
  y1 : 40,
  x2 : 100,
  y2 : 420
}

var button = {
  x : 0,
  y : 440,
  w : 80,
  h : 40
}

var middleY = line1.y1 + (line1.y2-line1.y1)/2;

function setup() {
  createCanvas(1000,480);
}

function draw() {
  background(129,129,129);

  stroke(0);
  strokeWeight(12);
  line(line1.x1,line1.y1,line1.x2,line1.y2);

  stroke(0);
  strokeWeight(0);
  fill(0,0,255);
  rectMode(CENTER);
  rect(line1.x1,middleY, 50, 50);

  fill(0);
  ellipseMode(CENTER);
  ellipse(850, middleY, 30, 30);

//  stroke(255,0,0);
//  strokeWeight(1);
//  line(0, middleY, 1000, middleY);
}
