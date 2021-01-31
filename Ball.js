class Ball {
    constructor (x,y,width,height,angle){
  
        var options ={

            density : 1.0,
            frictionAir : 0.005
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var paperpos = this.body.position;
        var angle;
        push()
        translate(paperpos.x,paperpos.y);
        rotate(angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.width,this.height);
        pop()
    }
  }