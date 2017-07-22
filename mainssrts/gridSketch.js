function setup() {
  createCanvas(600, 600);
}



function mygrid(xpos, ypos, height, width){ 
    this.x = xpos; 
    this.y = ypos;
    this.height = height;
    this.width = width;
    var gridCells = [];
}

mygrid.prototype.show = function() {
    //draw background rect
    fill(230,230,230);
    rect(this.x,this.y,this.height,this.width);
    //create and draw grids
    var col;
    var row;
    var MAXCOL = 10;
    var MAXROW = 10;
    var width = this.width/10;

    
    for (col = 0; col < MAXCOL; col++) {
        for (row = 0; row < MAXROW; row++){
            var centreX = row*width+width/2;
            var centreY = col*width+width/2;
            var small = width/5;
            text("("+ col + "," + (row+1) + ")",row*width,col*width);
            fill(255,20,60);
            rect(row*width,col*width,width,width);
            fill(255,255,255);
            rect(centreX-small/2, centreY-small/2, small,small);
            
        }
    }
}










function draw() {
    background(0);
    var grid = new mygrid(0,0,600,600);
    grid.show();
}
    





