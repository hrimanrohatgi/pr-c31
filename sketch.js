const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 

var ground;
var divisionHeight = 300;
var pinko1,pinko2,pinko3,pinko4,pinko5,pinko6,pinko7,pinko8,pinko9;
var divi;
var particle = [];
function setup() {
  createCanvas(700,700);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
divi1 = new division(50,400,20,200);
divi2 = new division(150,400,20,200);
divi3 = new division(250,400,20,200);
divi4 = new division(350,400,20,200);
divi5 = new division(450,400,20,200);
divi6 = new division(550,400,20,200);
divi7 = new division(650,400,20,200);
ground = new Ground(400,650,1000,20);
pinko1 = new pinko(100,100,400,400);
pinko2 = new pinko(200,100,400,400);
pinko3 = new pinko(300,100,400,400);
pinko4 = new pinko(400,100,400,400);
pinko5 = new pinko(500,100,400,400);
pinko6 = new pinko(600,100,400,400);
pinko7 = new pinko(100,200,400,400);
pinko8 = new pinko(200,200,400,400);
pinko9 = new pinko(300,200,400,400);
pinko10 = new pinko(400,200,400,400);
pinko11 = new pinko(500,200,400,400);
pinko12 = new pinko(600,200,400,400);
pinko13= new pinko(100,300,400,400);
pinko14 = new pinko(200,300,400,400);
pinko15 = new pinko(300,300,400,400);
pinko16 = new pinko(400,300,400,400);
pinko17 = new pinko(500,300,400,400);
pinko18 = new pinko(600,300,400,400);

for(var i = 0;i<particle.length;i++){
paritcles[i].display;
}
}

function draw() {
  background("black");  
ground.display();
pinko1.display();
pinko2.display();
pinko3.display();
pinko4.display();
pinko5.display();
pinko6.display();
pinko7.display();
pinko8.display();
pinko9.display();
pinko10.display();
pinko11.display();
pinko12.display();
pinko13.display();
pinko14.display();
pinko15.display();
pinko16.display();
pinko17.display();
pinko18.display();

divi1.display();
divi2.display();
divi3.display();
divi4.display();
divi5.display();
divi6.display();
divi7.display();

}
