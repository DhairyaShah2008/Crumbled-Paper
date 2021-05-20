class paper
{
	constructor(x,y)
	{
		var options={
			restitution:0.3,
			friction:0,
			density:1.2,
			isStatic:false		
			}
		this.x=x;
		this.y=y;
		this.r=20
		
		this.body=Bodies.circle(x,y, 20, options);
		this.image=loadImage("paper.png")
 		World.add(world, this.body);
		 

	}
	display()
	{
			
			var paperPos=this.body.position;		
			
			push()
			translate(paperPos.x, paperPos.y);
			strokeWeight(4);
			fill(128,128,128)
			pop()
			imageMode(CENTER)
			image(this.image,paperPos.x,paperPos.y,100,100)
	}

}