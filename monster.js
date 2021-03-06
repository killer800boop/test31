class monster{
    constructor(x,y,width,height){
        var options = {
            restitution:0.8,
            density:1.0,
            friction:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("Monster-01.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}