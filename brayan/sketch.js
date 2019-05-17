var ww, wh;

function setup() {

  background(50);
  createCanvas(windowWidth, windowHeight);
  background(50);
  ww = windowWidth;
  wh = windowHeight;
}

function draw() {
  //println("MouseX: " + mouseX + " MouseY: " + mouseY);
  background(50);

  fill(55, 194, 188);
  triangle(ww / 3, wh - 100, ww / 3 * 2, wh - 100, mouseX, mouseY);
  fill(65, 229, 222);
  triangle(ww / 3, 100, ww / 3 * 2, 100, mouseX, mouseY);
  fill(65, 229, 143);
  triangle(ww / 3 * 2, 100, ww / 3 * 2, wh - 100, mouseX, mouseY);
  fill(65, 148, 158);
  triangle(ww / 3, 100, ww / 3, wh - 100, mouseX, mouseY);

  texto();
}

function texto() {
  noStroke();

  fill(240, 220, 229, 180);
  textFont('Georgia');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(22);
  text("BRAYAN MORA", width / 2, height - 6 * (height / 11));


  if ((mouseX > (width / 4 - 100) && mouseX < (width / 4 + 200)) && (mouseY > (height - 2 * (height / 11) - 30) && mouseY < (height - 2 * (height / 11) + 20))) {
    fill(255, 70, 70);
  } else {
    fill(255, 200, 200);
  }
 button = createButton('OpenProcessing');
  
  button. size(windowWidth/2.90, windowHeight/8);
  button. position(windowWidth/13, windowHeight/1.3);
  
  button = createButton('Github');
  button. size(windowWidth/2.90, windowHeight/8);
  button. position(windowWidth/1.6, windowHeight/1.3);
  
}
function mousePressed() {
  if ((mouseX > (width / 4 - 100) && mouseX < (width / 4 + 100)) && (mouseY > (height - 2 * (height / 11) - 30) && mouseY < (height - 2 * (height / 11) + 20))) {
    window.open('https://www.openprocessing.org/user/98936/');

  }
  if ((mouseX > (width / 1.5 - 100) && mouseX < (width / 1.5 + 100)) && (mouseY > (height - 2 * (height / 11) - 30) && mouseY < (height - 2 * (height / 11) + 20))) {
    window.open('https://github.com/BrayanMora1996');

  }
}
