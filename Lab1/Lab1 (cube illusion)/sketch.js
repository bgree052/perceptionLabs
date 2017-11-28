var square1 = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
}

var square2 = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
}

var shift = 30;

var change = 0;

//var points;

function setup(){
    createCanvas(500,400);
    square1.x= canvas.width/4;
    square1.y= canvas.height/3;
    square1.w= canvas.width/3;
    square1.h= canvas.height/3;
    
    square2.x= square1.x + shift;
    square2.y= square1.y - shift;
    square2.w= square1.w;
    square2.h= square1.h;
    
}

function draw(){
    background(192,192,192);
    textSize(25);
    fill(0);
    text("Cube " + change, 10, 30)
    textSize(15)
    text("Press a & d to cycle through the 2 possibilies",12, 55);
    noFill();
    //square1
    rect(square1.x,square1.y,square1.w,square1.h);
    //square2
    rect(square2.x,square2.y,square2.w,square2.h);
    //top left line
    line(square1.x,square1.y,square2.x,square2.y);
    //bottom left line
    line(square1.x,square1.y+square1.h,square2.x,square2.y+square2.h);
    //top right line
    line(square1.x+square1.w,square1.y,square2.x+square2.w,square2.y);
    //bottom right line
    line(square1.x+square1.w,square1.y+square1.y,square2.x+square2.w,square2.y+square2.h);
    
    //2 Possible Cubes
    
    //Cube 1
    if(change==1){
        fill("red");
        rect(square1.x,square1.y,square1.w,square1.h);
        fill("yellow");
        beginShape();
        vertex(square1.x+square1.w,square1.y);
        vertex(square2.x+square2.w,square2.y);
        vertex(square2.x+square2.w,square2.y+square2.h);
        vertex(square1.x+square1.w,square1.y+square1.h);
        endShape(CLOSE);
        fill(0,255,0);
        beginShape();
        vertex(square1.x,square1.y);
        vertex(square2.x,square2.y);
        vertex(square2.x+square2.w,square2.y);
        vertex(square1.x+square1.w,square1.y);
        endShape(CLOSE);
    }
    
    //Cube 2
    if(change==2){
        fill("red");
        rect(square2.x,square2.y,square2.w,square2.h);
        fill("yellow");
        beginShape();
        vertex(square2.x,square2.y);
        vertex(square1.x,square1.y);
        vertex(square1.x,square1.y+square1.h);
        vertex(square2.x,square2.y+square2.h);
        endShape(CLOSE);
        fill(0,255,0);
        beginShape();
        vertex(square1.x,square1.y+square1.h);
        vertex(square1.x+square1.w,square1.y+square1.h);
        vertex(square2.x+square2.w,square2.y+square2.h);
        vertex(square2.x,square2.y+square2.h);
        endShape(CLOSE);
    }
}

function keyPressed(){
    //console.log(keyCode);
    if(keyCode === 65){
        change=change -1;
    }
    if(keyCode === 65 && change<0){
        change=2;
    };
    if(keyCode === 68){
        change=change+1;
    }
    if(keyCode === 68 && change>2){
        change=0;
    }
    //console.log(change);
}
