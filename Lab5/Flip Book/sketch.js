var imgs=[];
var frames=[];
var curFrame=0;

function preload(){
    frames[0]=loadImage("assets/title.gif");
    frames[1]=loadImage("assets/title2.gif");
}

function setup(){
    createCanvas(600,400);
    loadFrames(25);
}

function draw(){
    if(curFrame>=25){
        curFrame=0;
    }
    image(frames[floor(curFrame)],0,0);
    curFrame+=0.5;
}

function loadFrames(n){
    for(var i=1;i<n;i++){
        frames[i+1]=loadImage("assets/K"+(i+1)+".gif");
    }
}