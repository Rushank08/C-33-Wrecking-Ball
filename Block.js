class Block{
    constructor(x,y){
        var options={
            'friction':1
        }
        this.x = x;
        this.y = y;
        this. body = Bodies.rectangle(x,y,50,50, options);
        World.add(world, this.body);
        this.visibility=255
    }

    display(){

        

            //super.display();
            var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(0.5);
        rect(0,0, 50, 50);
        pop();
            
         
    }
}
