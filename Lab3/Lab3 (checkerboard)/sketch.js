var colourChanger = true;
var colourVal;

function setup(){
  createCanvas(600,400);
  for(var i = 0; i<100; i++){
    for(var j = 0; j<100; j++){
      if(colourChanger==true){
        stroke(255,255,0);
      }
      if(colourChanger==false){
        stroke(255,0,0);
      }
      point(i,j,1,1);
      colourChanger = !colourChanger;
      console.log(colourChanger);
    }
    colourChanger = !colourChanger;
  }
}

function draw(){

}
