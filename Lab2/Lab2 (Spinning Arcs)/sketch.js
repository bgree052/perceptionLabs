rVal = 0;
inc = 0;

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(192,192,192);
    rVal+=inc;
    
    strokeWeight(0);
    fill(0);
    textSize(20);
    text("Spin Speed: "+inc, 20,20);
    
    translate(width/2, height/2);
    rotate(rVal);
    
    ellipseMode(CENTER);
    
    strokeWeight(1);
    noFill();
    stroke(0);
    ellipse(0,0,200,200);
    fill(0);
    arc(0,0,200,200,PI, PI+QUARTER_PI);
    arc(0,0,200,200,0, QUARTER_PI);
    arc(0,0,200,200,PI+HALF_PI, -QUARTER_PI);
    arc(0,0,200,200,HALF_PI, PI-QUARTER_PI);
    
    noFill();
    strokeCap(SQUARE);
    strokeWeight(8);
    arc(0,0,150,150,0.75*PI, PI-QUARTER_PI/2);
    arc(0,0,150,150,PI+0.75*PI, -QUARTER_PI/2);
    arc(0,0,150,150,QUARTER_PI, QUARTER_PI+QUARTER_PI/2);
    arc(0,0,150,150,PI+0.25*PI, PI+QUARTER_PI+QUARTER_PI/2);
    
    arc(0,0,80,80,0.9*PI, PI);
    arc(0,0,80,80,PI+0.9*PI, QUARTER_PI/4);
    arc(0,0,80,80,QUARTER_PI*1.6, HALF_PI);
    arc(0,0,80,80,PI+0.4*PI, PI+HALF_PI);
    
}

function keyPressed(){
    //console.log(keyCode);
    if(keyCode === 65 && rVal>0){
        inc-=1;
    }
    if(keyCode === 68){
        inc+=1;
    }
    //console.log(rVal);
}