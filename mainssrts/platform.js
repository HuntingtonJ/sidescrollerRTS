//platform class
function Platform() {
  this.x = random(6000);
  this.y = random(800);
  
  this.frame_x = this.x;
  this.frame_y = this.y;
  
  this.thickness = 40;
  this.len = random(100,400);
  
  this.color = [255,255,255];
  
  this.display = function() {
    this.update();
    if (this.frame_x <= 1200 && this.frame_x + viewWidth >= 0) {
      noStroke();
      fill(this.color[0],this.color[1],this.color[2]);
      rect(this.frame_x, this.frame_y, this.len, this.thickness);
    } 
    
  };
  
  this.update = function() {
    this.frame_x = this.x - translateX;
    this.frame_y = this.y - translateY;
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
}