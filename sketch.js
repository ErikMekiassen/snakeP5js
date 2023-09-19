const canvasXLength = 750;
const canvasYLength = 750;
let mySnake; // Declare a variable to hold the Snake instance
let pressedKeys = {};
const fr = 10
let gameStarted = false
function setup() {
  createCanvas(canvasXLength, canvasYLength);
  background(50, 190, 50);
  frameRate(fr);
  mySnake = new Snake(canvasXLength, canvasYLength, 25);
}

function draw() {
  // Call the Snake's draw method
  grass(canvasXLength, canvasYLength);
  mySnake.draw();
  wait(300)
}

function keyPressed() {
  pressedKeys[key] = true;
}
function keyReleased() {
  delete pressedKeys[key];
}
function wait(time)
{
  start = millis()
  do
  {
    current = millis();
  }
  while(current < start + time)
}