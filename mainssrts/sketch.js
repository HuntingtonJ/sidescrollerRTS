var platforms = [];
var movableObjs = [];
var platformCount = 20;
var movableObjsCount = 20;

function setup() {
  createCanvas(1200,800);
  
  for (var i = 0; i < platformCount; i++) {
    platforms[i] = new Platform();
    movableObjs[i] = new movableObj();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < platformCount; i++) {
    platforms[i].display();
    movableObjs[i].display();
  }
    
    
}