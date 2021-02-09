class Ball{

    constructor(x,y){
    var options = {
        isStatic: false
    }
    this.body = Bodies.circle(x,y,25,options)
    World.add(world,this.body)

    }

    display(){
        
        circle(this.body.position.x,this.body.position.y,50)
    }
}