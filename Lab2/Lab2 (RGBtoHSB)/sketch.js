var newHSB;

function setup(){
    createCanvas(600,400);
    newHSB=RGBconvert(125,60,70);
    fill(0);
    strokeWeight(0);
    textSize(15);
    text("R:125 G:60 B:70", 10,100);
    fill(125,60,70);
    rect(10,10,70,70);
    console.log(newHSB);
    fill(0);
    text("HSB: "+newHSB,10,120);
}

function draw(){

}

function RGBconvert(r_,g_,b_){
    var vals = [r_,g_,b_];
    var maxN = max(vals);
    var minN = min(vals);
//   console.log(maxN);
    var h;

    if(maxN == minN){
        h = 0;
    }

    if(maxN == r_){
        h = ((g_-b_)/(maxN-minN))*60;
        if(h<0){
            h = h + 360;
        }
    }
    else if(maxN == g_){
        h = 2+(b_-r_)/(maxN-minN);
    }
    else if(maxnN == b_){
        h=4+(r_-g_)/(maxN-minN);
    }
    //console.log("H: "+h);

    var s;
    if(maxN==0){
        s=0;
    }
    else{
        s=1-minN/maxN;
    }
    s=s*100;
    //console.log("S: "+s);

    var b;

    b = (maxN/255)*100;

    h=round(h);
    s=round(s);
    b=round(b);

    return([h,s+"%",b+"%"]);
}
