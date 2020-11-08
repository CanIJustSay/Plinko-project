class plinkoClass{
    constructor(x,y,r){
var options ={
    resitution:0,
    friction:1,
    density:1.2,
    isStatic: true,
}
 
        this.body = Bodies.circle(x,y,r,options);
       this.r = r;
        World.add(world, this.body)
    
    }
display(){
    ellipseMode(RADIUS);
    fill("grey");
    ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
}
}