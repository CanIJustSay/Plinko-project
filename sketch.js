const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  ground = new Ground(50,50,50,50);
}

function draw() {
  background("black");  

  for(var k = 0; k <=width;k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  } 
  ground.display();
  drawSprites();
}