var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // code to display score in the middle of the screen
fill("white");
textSize(20);
text("score:"+score,500,50);

  //  code to display the end screen
if(score === 3){
  clear();
  background(bg2);
  //treasure unlocked text
  fill("black");
  textSize(40);
  text("TREASURE UNLOCKED",250,200);
  fill("yellow");
  text(mouseX+","+mouseY, 10, 10);
}

  drawSprites()
}