var words = ["BLUE","GREEN","RED","BLACK"];
var values

function setup(){
    createCanvas(600,400);
    textSize(20);
        for(var j=0;j<4;j++){
        for(var i=0;i<4;i++){
            fill(words[floor(random(4))]);
            text(words[floor(random(4))],10+(i*90),42+(j*40))
        }
    }
}

function draw(){
    
}