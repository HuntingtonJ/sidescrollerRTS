//platform class
function Platform() {
  this.x = random(6000);
  this.y = random(800);
  this.wid = 40;
  this.len = random(40,200);
  
  this.display = function() {
    if (this.x <= 1200) {
      noStroke();
      fill(255);
      rect(this.x,this.y,this.len,this.wid);
    } 
    
  }
};