var keyframe1=new p5.Vector(50,150);
var keyframe2=new p5.Vector(150,50);
var keyframe3=new p5.Vector(250,150);
var points=[];
var counter=0;
var loops=0;

function setup(){
    createCanvas(600,400);
    inBetweenFrames(keyframe1,keyframe2);
    //console.log(inBetweenFrames(keyframe1,keyframe2));
}

function draw(){
    background(255);
    fill("white");
    ellipse(keyframe1.x,keyframe1.y,20,20);
    ellipse(keyframe2.x,keyframe2.y,20,20);
    ellipse(keyframe3.x,keyframe3.y,20,20);
    fill("red");
    
    ellipse(points[counter].x,points[counter].y,20,20);
    counter++;
    if(counter>=points.length){
        counter=0;
        points=[];
        if(loops==0){
           inBetweenFrames(keyframe2,keyframe3)
                loops++;
                console.log(loops);
           }
        else if(loops==1){
            inBetweenFrames(keyframe3,keyframe1);
                loops++;
                console.log(loops);
        }
        else if(loops==2){
            inBetweenFrames(keyframe1,keyframe2);
                loops++;
                console.log(loops);
        }
    }
    if(loops>2){
        loops=0;
    }
    
    //console.log(counter);
}

function inBetweenFrames(v1,v2){
    
    for(var i=0;i<1;i+=0.015){
        points.push(p5.Vector.lerp(v1,v2,i));
    }
    //console.log(points);
}