var colourImg;
var monoImg;
var invertImg;
var inc=0;
var cout = true;

function preload(){
  colourImg = loadImage("assets/colour3.jpg");
  monoImg = loadImage("assets/colour3.jpg");
  invertImg = loadImage("assets/colour3.jpg");
}

function setup(){
  createCanvas(600,400);
  colourImg.loadPixels();
  monoImg.loadPixels();
  invertImg.loadPixels();
}

function draw(){
  if(inc==0){
    image(colourImg, 0 , 0, 600,400);
  }
  if(inc==1){
    image(invertImg,0,0,600,400);
    if(cout==true){
      invertImg.filter(INVERT);
    }
    cout=false;
  }
  if(inc==2){
    image(monoImg,0,0,600,400);
    monoImg.filter("gray");
  }
  noStroke();
  fill(0);
  ellipse(300,200,10,10);
}

function keyPressed(){
  console.log(key);
  if(key == 'D'){
    if(inc == 2){
      inc=0
    }
    else{
      inc +=1;
    }
    console.log(inc);
  }
  if(key == 'A'){
    if(inc == 0){
      inc=2
    }
    else{
      inc -=1;
    }
    console.log(inc);
  }
}
