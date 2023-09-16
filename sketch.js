const canvasXLength = 750;
const canvasYLength = 750;
let mySnake; // Declare a variable to hold the Snake instance

function setup() {
  createCanvas(canvasXLength, canvasYLength);
  background(50, 190, 50);
  grass(canvasXLength, canvasYLength);

  // Initialize the Snake instance
  mySnake = new Snake(canvasXLength, canvasYLength, 25);
}

function draw() {
  // Call the Snake's draw method
  mySnake.update();
}

function keyPressed() {
  console.log("pressed!");
  if (keyCode === LEFT_ARROW) {
    mySnake.left();
  } else if (keyCode === RIGHT_ARROW) {
    mySnake.right();
  } else if (keyCode === UP_ARROW) {
    mySnake.up();
  } else if (keyCode === DOWN_ARROW) {
    mySnake.down();
  }
}
