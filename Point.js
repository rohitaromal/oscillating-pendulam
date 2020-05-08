class Point
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB;
        this.point = Constraint.create(options);
        World.add(world, this.point);

    }
    
    display()
    {
        if(this.point.bodyA)
        {
        var pointA = this.point.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(6);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}