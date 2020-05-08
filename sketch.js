const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;
var pendulam, point;

function preload() 
{
    backgroundImg = "yellow";
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

   

    pendulam = new Pendulam(100,100);

    point = new Point(pendulam.body,{x:400, y:100});
}

function draw()
{
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    

    pendulam.display();
 
    point.display();    
}



function keyPressed()
{
    if(keyCode === 32)
    {

     pendulam.position.x = mouseX;
     pendulam.position.y = mouseY;



    }
     else if (keyCode === ENTER)
    {

     pendulam.position.x = 200;





     }
}
    

     


         
     




     
