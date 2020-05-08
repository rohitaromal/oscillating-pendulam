class Pendulam  
{
  constructor(x,y,radius)
  {
   var options = 
   {

    'restitution':0.8,
    'friction':1.0,
    'density':1.0
 


   }
  


   
    this.body = Bodies.circle(x,y,20,options);
    this.radius = 20;
    World.add(world,this.body);

  }

  display() 
  {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    ellipseMode(RADIUS);
    
    ellipse(this.body.position.x,this.body.position.y,this.radius);
  //  super.display();
  }
}
