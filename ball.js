class Ball {
    constructor(x,y,r){
      var options = {
          isStatic:false

      } 
      this.body = Bodies.circle(x,y,r,options)
      World.add(world,this.body)
      this.radius = r

    }
    show(){
       // image('ball',this.x,this.y)
        
       
    }
}
