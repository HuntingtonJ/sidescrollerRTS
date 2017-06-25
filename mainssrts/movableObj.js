function MovableObj() {
  this.x = random(6000);
  this.y = random(800);
  this.wid = 40;
  this.len = random(40,200);
  
  this.frame_x = this.x;
  this.frame_y = this.y;
  
  this.display = function() {
    this.update();
      noStroke();
      fill(255);
      ellipse(this.frame_x, this.frame_y, 20);
    
  };
  
  this.update = function() {
    this.frame_x = this.x - translateX;
    this.frame_y = this.y - translateY;
  };
}