var newRGB;

function setup(){
    createCanvas(600,400);
    newRGB=HSBconvert(351,52,49);
    fill(0);
    strokeWeight(0);
    textSize(15);
    text("H:351 S:52 B:49", 10,100);
    fill(125,60,70);
    rect(10,10,70,70);
    //console.log(newRGB);
    fill(0);
    text("RGB: "+newRGB,10,120);
}

function draw(){
    
}

function HSBconvert(h_,s_,b_){
    h_=radians(h_);
    s_/=100;
    map(b_,0,100,0,255);
    console.log("h_: "+h_);
    console.log("s_: "+s_);
    console.log("b_: "+b_);
    if(h_ < 0) {
        h_ += 2*PI;
        console.log("h_: "+h_);
    }
    var newVals=[0,0,0];
    var i = floor((3*h_)/PI);
    var f = ((3*h_)/PI)-i;
    
    var p = b_*(1-s_);
    var q = b_*(1-s_*f);
    var t = b_*(1-s_*(1-f));
    
    console.log("P: "+p);
    console.log("Q: "+q);
    console.log("T: "+t);

    console.log("I: " +i);
    
    b_=round(b_);
    p=round(p);
    q=round(q)
    t=round(t);
    
    
    if(i==0){
        newVals=[b_,t,p];
    }
    if(i==1){
        newVals=[q,b_,p];
    }
    if(i==2){
        newVals=[p,b_,t];
    }
    if(i==3){
        newVals=[p,q,b_];
    }
    if(i==4){
        newVals=[t,p,b_];
    }
    if(i==5){
        newVals=[b_,p,q];
    }
    return(newVals);
}