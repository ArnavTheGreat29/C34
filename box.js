class Box{

    constructor(x,y){
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,50,50,options)
    World.add(world,this.body)

    }

    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,50,50)
    }
}