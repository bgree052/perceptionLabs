var spring1;
var spring2;

function setup() {
  createCanvas(710, 400);
    
    spring1 = new Spring(32,width/2-100,width/2+100,200,100,false,false,0.8,0.8,0.92,150,0.0,0,0,-110);
    
    spring2 = new Spring(32,width/2-100,width/2+100,200,100,false,false,0.9,0.7,0.62,110,0.0,0,0,110);
    
  rectMode(CORNERS);
  noStroke();
}

function draw() {
  background(102);
    spring1.update();
    spring1.draw();
    
    spring2.update();
    spring2.draw();
}

class Spring {
    constructor(springHeight,left,right,maxHeight,minHeight,
    over,move,M,K,D,R,vs,as,f,pos){
        
        this.springHeight=springHeight;
        this.left=left;
        this.right=right;
        this.maxHeight=maxHeight;
        this.minHeight=minHeight;
        this.over=over;
        this.move=move;
        this.pos=pos;
        this.M=M;
        this.K=K;
        this.D=D;
        this.R=R;
        this.ps = this.R;
        this.vs=vs;
        this.as=as;
        this.f=f;
        this.baseWidth;
    }

    draw(){
    // Draw base
    fill(0.2);
    this.baseWidth = 0.5 * this.ps + -8;
    rect(width/2 - this.baseWidth+this.pos, this.ps + this.springHeight, width/2 + this.baseWidth+this.pos, height);

    // Set color and draw top bar
    if (this.over || this.move) {
      fill(255);
      } else {
      fill(204);
      }

      rect(this.left+this.pos, this.ps, this.right+this.pos, this.ps + this.springHeight);
    }

    update(){
    // Update the spring position
      if ( !this.move ) {
        this.f = -this.K * ( this.ps - this.R ); // f=-ky
        this.as = this.f / this.M;          // Set the acceleration, f=ma == a=f/m
        this.vs = this.D * (this.vs + this.as);  // Set the velocity
        this.ps = this.ps + this.vs;        // Updated position
      }

      if (abs(this.vs) < 0.1) {
        this.vs = 0.0;
      }

      // Test if mouse if over the top bar
      if (mouseX > this.left+this.pos && mouseX < this.right+this.pos && mouseY > this.ps && mouseY < this.ps + this.springHeight) {
        this.over = true;
      } else {
        this.over = false;
      }

      // Set and constrain the position of top bar
      if (this.move) {
        this.ps = mouseY - this.springHeight/2;
        this.ps = constrain(this.ps, this.minHeight, this.maxHeight);
      }
    }
    
}



function mousePressed() {
  if (spring1.over) {
    spring1.move = true;
  }
  if (spring2.over) {
    spring2.move = true;
  }
}

function mouseReleased() {
  spring1.move = false;
  spring2.move = false;
}