var platforms = [];
var platformCount = 20;

function setup() {
  createCanvas(1200,800);
  
  for (var i = 0; i < platformCount; i++) {
    platforms[i] = new Platform();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < platformCount; i++) {
    platforms[i].display();
  }
}