class hero{
    constructor(x,y,width,height){
        var options = {
            restitution:0.3,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("Superhero-01.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}