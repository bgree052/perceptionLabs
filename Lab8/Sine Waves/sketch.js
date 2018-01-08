function setup() {
  createCanvas(500,500);
  background(255);
  translate(0, 250);

  //Draw the centre line at y=0:
  for (var t = 0; t < 500; t++) {
     point(t, 0);
  }

  //Now draw the three sine curves:
  strokeWeight(4);

  //Draw the first sine in red:
  stroke(255, 0, 0);
  for (var t = 0; t < 500; t++) {
     var sin1_t = 100* sin(2*PI*(1/500)*t); //Replace the "0" with the correct sine equation
     point(t, -1 * sin1_t); //We plot 500 - sin1_t because in p5, y gets bigger as you go downwards
  }

  //Draw the second sine in blue:
  stroke(0, 0, 255);
  for (var t = 0; t < 500; t++) {
     var sin2_t = 50 * sin(2*PI*(5/500)*t);//Replace the "0" with the correct sine equation
     point(t, -1 * sin2_t); //We plot 500 - sin1_t because in Processing, y gets bigger as you go DOWN
  }

  //Draw the third sine in green:
  stroke(0, 255, 0);
  for (var t = 0; t < 500; t++) {
     var sin3_t = 200 * -sin(2*PI*(3/500)*t);  //Replace the "0" with the correct sine equation
     point(t, -1 * sin3_t); //We plot 500 - sin1_t because in Processing, y gets bigger as you go DOWN
  }

}
