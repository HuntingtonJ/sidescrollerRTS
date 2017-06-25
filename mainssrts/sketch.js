var platforms = [];
var movableObjs = [];
var platformCount = 20;
var movableObjsCount = 20;

var ground;

function setup() {
  createCanvas(1200,800);
  
  for (var i = 0; i < platformCount; i++) {
    platforms[i] = new Platform();
    movableObjs[i] = new movableObj();
  }
  ground = new Platform();
  ground.setDimensions(0,760,40,6000);
  ground.setColor(100,100,200);
}

function draw() {
  background(0);
  for (var i = 0; i < platformCount; i++) {
    platforms[i].display();
    movableObjs[i].display();
  }
<<<<<<< HEAD
    
    
=======
  ground.display();
>>>>>>> 171ae23aab570461bf174e303c89e86e98d355a8
}