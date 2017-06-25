//platform class
function Platform() {
  this.x = random(6000);
  this.y = random(800);
  this.thickness = 40;
  this.len = random(100,400);
  
  this.color = [255,255,255];
  
  this.display = function() {
    if (this.x - translateX <= 1200 && this.x + 1200 - translateX >= 0) {
      noStroke();
      fill(this.color[0],this.color[1],this.color[2]);
      rect(this.x - translateX,this.y,this.len,this.thickness);
    } 
    
  };
  
  this.setDimensions = function(newX, newY, newThick, newLen) {
    this.x = newX;
    this.y = newY;
    this.thickness = newThick;
    this.len = newLen;
  };
  
  this.setColor = function(r,g,b) {
    this.color[0] = r;
    this.color[1] = g;
    this.color[2] = b;
  };
};