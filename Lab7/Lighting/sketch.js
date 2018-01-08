var cameraMove = false;
var temp,locY,locX;

function setup(){
  createCanvas(800, 800, WEBGL);
  background(0);
  temp = createVector(mouseX,mouseY);
  locY = (mouseY / height - 0.5) * 4;
  locX = (mouseX / width - 0.5) * 4;
}
function draw(){
    background(0);

    if (cameraMove == true){
     temp = createVector(mouseX,mouseY);
    }
    else
    {
        locY = (mouseY / height - 0.5) * 4;
        locX = (mouseX / width - 0.5) * 4;
    }

    camera(temp.x,temp.y, (height/2) / tan(PI/6), width/2, height/2, 0, 0, 1, 0);

    translate(width/2 , height/2, 0);

    ambientLight(255, 255, 255);

    directionalLightOn();
    pointLightOn();

    noStroke();

    push();
    translate(-300, 0, 0);
    ambientMaterial(100,100,100);
    specularMaterial(100,100,100);
    sphere(60);
    pop;

    push();
    translate(400, 0, 0);
    ambientMaterial(100,100,100);
    specularMaterial(100,100,100);
    sphere(120);
    pop();
}

function keyPressed(){
    if (key == " ")
     cameraMove = !cameraMove;
}


function pointLightOn(){
    pointLight(255, 0, 0, 100*locX, 100*locY,0);

    push();
    translate(100*locX, 100*locY,0  );
    fill(255, 0, 0);
    stroke(255, 0, 0);
    sphere(20);
    pop();
}

function directionalLightOn(){
    directionalLight(0, 0, 255, locX, locY, 1);

    strokeWeight(5);
    stroke(0, 0, 255);
    var v = createVector(locX, locY, 1);
    v.normalize();
    fill(0, 0, 255);
    line(v.x*100, v.y*100, v.z*100, 0, 0, 0);

}
