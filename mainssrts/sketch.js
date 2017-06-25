var platforms = [];
var movableObjs = [];
var platformCount = 20;
var movableObjsCount = 20;

var ground;

var translateX = 0;

function setup() {
  createCanvas(1200,800);
  
  for (var i = 0; i < platformCount; i++) {
    platforms[i] = new Platform();
    movableObjs[i] = new MovableObj();
  }
  ground = new Platform();
  ground.setDimensions(0,760,40,6000);
  ground.setColor(100,100,200);
}

function draw() {
  background(0);
  
  if (mouseX > 1100 && translateX <= 6000 - 1200) {
    translateX += 5;
  } else if (mouseX < 100 && translateX >= 0) {
    translateX -= 5;
  }
  
  for (var i = 0; i < platformCount; i++) {
    platforms[i].display();
    movableObjs[i].display();
  }

  ground.display();

}