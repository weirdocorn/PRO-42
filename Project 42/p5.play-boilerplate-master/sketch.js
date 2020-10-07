var hr = hour();
var min = minute();
var sec = second();

angleMode(DEGREES);

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  let hour = map(12, 400, 200, 0, 175);
  let minute = map(min, 400, 200, 0, 175);
  let second = map(sec, 400, 200, 0, 175);

  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  translate(0,0);
  
  drawSprites();
}