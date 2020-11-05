class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.array = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
  
    super.display();
    if(this.body.position.x > 200 && this.body.velocity.x > 10){
      var pos = [this.body.position.x,this.body.position.y];
      this.array.push(pos);
      console.log(pos);
    }
   
    for(var i = 0; i < this.array.length; i++){
    image(this.smoke,this.array[i][0],this.array[i][1]);
    } 
  }
}
