class ParticleClass{
    constructor(x,y,r){
var options ={
    resitution:0,
    friction:1,
    density:1.2,
    isStatic: false,
}
 
        this.body = Bodies.circle(x,y,r,options);
        this.color = color(random(0,255), random(0,255), random(0,255));
       this.r = r;
        World.add(world, this.body)
    
    }
display(){
    ellipseMode(RADIUS);
    fill("grey");
    ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
}
}