let x,y;
let firstX = 0;
let secondX = 0;
let firstY = 0;
let secondY = 0;
let stepSize = 20;
let step = 1;
let turnCounter = 1;
let state = 0;
let num = 1;
let tSize = 64;
let numSteps = 0;
let mouseIsOn = false;

function setup() {
  createCanvas(500, 500);
  background(0);
  x = width / 2;
  y = height / 2;
  // circle(x,y,3);
  secondX = x;
  secondY = y;
  
  // noLoop();
}

function draw() {

    textAlign(CENTER,CENTER);
    textSize(stepSize / 2);
    noStroke();
    if (istPrime(num)){
      fill(255,0,0);
    }else{
      fill(255);
    }
    text(num, secondX, secondY);
    runForrest();
}

function mousePressed() {
  mouseIsOn = !mouseIsOn;
   
}// --- mousePressed Ende ---

function istPrime(Zahl){
  if (Zahl == 1) return false;
  for (let i = 2; i <= sqrt(Zahl); i++) {
    if (Zahl % i == 0) {
      return false;
    }
  }
  return true;
}

function runForrest(){
  if (mouseIsOn){
    firstX = secondX;
    firstY = secondY;
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
    
    stroke(255);
    line(firstX, firstY, secondX, secondY);  

    console.log("Num: " + num);
    console.log("State: " + state + " Step: " + step);
    // redraw(); 

  }
}