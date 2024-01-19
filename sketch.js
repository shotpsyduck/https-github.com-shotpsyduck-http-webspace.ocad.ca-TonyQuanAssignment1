var x = 0;
var y = 0; 
var Katherine = 0; 

function setup(){
    createCanvas(400, 400);
    background(255,204,0);
    fill("aquamarine");
    stroke(255,204,0);
}

function draw(){
    background(0, 0, Katherine);
    Katherine = Katherine + 1;
    Katherine = Katherine % 215;
    rect(x,y, 10,10,20);
    x = x + 1;
    x = x % 419;
    y = y + 1;
    y = y % 479;

}