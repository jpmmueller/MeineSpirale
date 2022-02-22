let x,y;
let firstX = 0;
let secondX = 0;
let firstY = 0;
let secondY = 0;
let stepSize = 100;
let step = 1;
let turnCounter = 1;
let state = 0;
let num = 1;
let tSize = 64;
let numSteps = 0;

function setup() {
  createCanvas(500, 500);
  background(0);
  x = width / 2;
  y = height / 2;
  // circle(x,y,3);
  firstX = x;
  firstY = y;
  secondX = x;
  secondY = y;
  
  // noLoop();
}

function draw() {
    textAlign(CENTER,CENTER);
    textSize(tSize);
    fill(255);
    strokeWeight(1)
    text(num, secondX, secondY);
}

function mousePressed() {

  switch (state){    
    case 0:
      secondX += stepSize;
      break;
    case 1:
      secondY -= stepSize;
      break;
    case 2:
      secondX -= stepSize;
      break;
    case 3:
      secondY += stepSize;
      break;
  }

  if (num % step == 0){
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 == 0){
      step++;
    }
  }

  num++;  

  console.log("Num: " + num);
  console.log("State: " + state + " Step: " + step);
  // redraw();  
}// --- mousePressed Ende ---