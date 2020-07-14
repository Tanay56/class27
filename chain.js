class Chain {
    constructor (bodyA ,bodyB){
        var options= {
       bodyA:bodyA,
       bodyB:bodyB,
       length:10,
       stifness:2
        }
        this .chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        strokeWeight(9)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}