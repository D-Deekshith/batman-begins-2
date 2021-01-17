class Rain{
    constructor(x,y){
        var options = {
        restitution:0.2,
        friction: 0.1,
        density: 10000
        }

        this.body = Bodies.circle(x,y,3,options);
        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        ellipseMode(RADIUS);
        fill("blue");
        circle(pos.x,pos.y,3);
        pop();
    }

    updateY(){
        if(this.body.position.y > height){
         Matter.Body.setPosition(this.body, {x:random(0,1000), y:random(0,1000)
        }) 
    }
    }
}