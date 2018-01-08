var audio = new maximJs.maxiAudio();
var oscillator = new maximJs.maxiOsc();

var drawValues = [];
var counter = 0;
var freq = 100;
var amp = 0;

var isPlaying = true;

function setup()
{

  audio.play = playLoop;
  audio.init();

  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i<512; i++){
      drawValues.push(0);
  }
}


function draw()
{
    background(0); 
    if (!isPlaying)
    amp = 0;
    drawWave();

    text("Amp: " + nf(amp,1,2), 100, 100);
    text("Freq: " + nf(freq,4,0), 100, 150);
  
}

function drawWave(){
    stroke(255);
    noFill();
    beginShape();
    for(var i = 0; i<512; i++){
        vertex(i*width/512,drawValues[i] *200 + height/2)
    }
    endShape();
}


function playLoop()
{
  this.output = oscillator.sinewave(freq) * amp;
  drawValues.push(this.output);
  drawValues.shift();
}

function mouseMoved(){
    if (isPlaying)
    {
        freq = map(mouseX,0,width,20, 20000);
        amp = map(mouseY,0,height, 0, 1.0);
    } 
}

function keyPressed() 
{
  if (key == ' ') {
    isPlaying = !isPlaying;
  }
}