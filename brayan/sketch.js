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

  textSize(20);
  text("OpenProcessing", width / 4, height - 2 * (height / 11));

  fill(255, 100, 100, 30);
  rect(width / 4 - 100, height - 2 * (height / 11) - 30, 200, 50);
  fill(255, 141, 131);

  if ((mouseX > (width / 1.5 - 100) && mouseX < (width / 1.5 + 200)) && (mouseY > (height - 2 * (height / 11) - 30) && mouseY < (height - 2 * (height / 11) + 20))) {
    fill(255, 170, 0, 170);
  } else {
    fill(254, 247, 229, 190);
  }

  text("Github Repository", width / 1.32, height - 2 * (height / 11));
  fill(255, 170, 0, 30);
  rect(width / 1.45 - 1, height - 2 * (height / 11) - 30, 200, 50);
  fill(255, 230, 0, 0);
}

function mousePressed() {
  if ((mouseX > (width / 4 - 100) && mouseX < (width / 4 + 100)) && (mouseY > (height - 2 * (height / 11) - 30) && mouseY < (height - 2 * (height / 11) + 20))) {
    window.open('https://www.openprocessing.org/user/98936/');

  }
  if ((mouseX > (width / 1.5 - 100) && mouseX < (width / 1.5 + 100)) && (mouseY > (height - 2 * (height / 11) - 30) && mouseY < (height - 2 * (height / 11) + 20))) {
    window.open('https://github.com/BrayanMora1996');

  }
}