var platforms = [];
var platformCount = 20;

var ground;

function setup() {
  createCanvas(1200,800);
  
  for (var i = 0; i < platformCount; i++) {
    platforms[i] = new Platform();
  }
  ground = new Platform();
  ground.setDimensions(0,760,40,6000);
  ground.setColor(100,100,200);
}

function draw() {
  background(0);
  for (var i = 0; i < platformCount; i++) {
    platforms[i].display();
  }
  ground.display();
}