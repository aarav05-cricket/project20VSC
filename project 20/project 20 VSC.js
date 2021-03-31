var bgImg;
var cat;
var mouse;

function preload() {
    bgImg = loadImage("images/garden.png")
   catImg1 = loadAnimation("images/cat1.png");
   mouseimg1 = loadAnimation("images/mouse1.png");
   catimg2 = loadAnimation("images/cat2.png || images/cat3.png")
   mouse2 = loadAnimation("images/mouse2.png || images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    

}

function draw() {

    background(255);
    

    drawSprites();
   background("garden.png");

   if(cat.x - mouse.x < (cat.width - mouse.width)/2){

}


function keyPressed(){

  if(keyCode === LEFT_ARROW) {
      mouse.addAnimation("mouseTeasing", mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

     cat.addAnimation("catRunning", catimg2);
     cat.changeAnimation("catRunning");





  }


}