class Umbrella{
    constructor(x,y){
       var options={
        isStatic:true
       }
       this.body=Bodies.circle(x,y,160,options);
       this.r=120;

      this.image = loadAnimation('images/p1.png','images/p7.png','images/p6.png','images/p5.png','images/p4.png','images/p3.png','images/p2.png','images/p1.png');
       World.add(world,this.body);
    }

    display(){
      var pos=this.body.position;
      imageMode(CENTER);
        animation(this.image,pos.x,pos.y,100,100);
    }
}