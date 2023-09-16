const canvasXLength = 400;
const canvasYLength = 400;

function setup() {
  createCanvas(canvasXLength, canvasYLength);
  background(50, 190, 50);
  row(canvasXLength, canvasYLength)

}

function draw() {

}

function row(XLength, YLength) {
  var gridLength = XLength / 10
  fill(50, 180, 50)
  for (var i = 0; i < XLength + 25; i+=25) {
    console.log("X loop: ", i)
    strokeWeight(2)
    rect(i - 25, 0, 25, 25)
    for (var j = 0; j < YLength + 25; j+=25) {
      rect(i - 25, j - 25, 25, 25)
      console.log("y loop: ", j)  
    }
  }
}