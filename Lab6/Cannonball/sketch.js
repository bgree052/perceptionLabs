var dot;
var dots=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
    //dot = new Dot();
  dots.push(new Dot());
    console.log(dots);
}

function draw() {
  background(0);
    for(var i = 0; i<dots.length;i++){
        dots[i].run();
    }
    //console.log((mouseX-canvas.width)/100,(mouseY-canvas.height)/100;
}

function keyPressed(){
    console.log("Key: "+key);
    if(keyCode == 32){
        dots.push(new Dot());
    }
}

function Dot() {
  this.velocity = createVector((mouseX-canvas.width/2)/100,(-mouseY-canvas.height/2)/100);
  this.loc = createVector(canvas.width/2,canvas.height/2);
  this.acceleration = createVector(0, 0.02);
  this.diam = 40;

  this.run = function() {
    this.draw();
    this.move();
  }

  this.draw = function() {
    fill(125);
    ellipse(this.loc.x, this.loc.y, this.diam, this.diam);
  }

  this.move = function() {
    this.velocity.add(this.acceleration);
    this.loc.add(this.velocity);
  }
}