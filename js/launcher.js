class Launcher{
     constructor(bodyA,pointB){
         var options = {
            bodyA: bodyA,
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
         }
         this.pointB = pointB;
         this.launcher = Constraint.create(options);
         World.add(world,this.launcher);

     }

     display(){

        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
   
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
         
     }

     fly(){
        this.launcher.bodyA = null;
     }

     attach(bodyA){
      this.launcher.bodyA = bodyA;
     }
}

