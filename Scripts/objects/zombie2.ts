module objects {
    export class zombie2 extends objects.GameObject {
      // private instance variables
      private hero;
      public bullet:objects.zombullet;
      // public properties
      public iskilled:boolean = false;
      public heroDead=false;
      
      // Constructor
      constructor(assetManager: createjs.LoadQueue,hero:objects.hero) {
        super("zom1");
        this.hero = hero;
        this.regX = this.getBounds().width * 0.5;
        this.regY=  this.getBounds().height*0.5;
        this.bullet = new objects.zombullet(assetManager,this);
      
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this._dy = 3;
        this.Reset();
      }
  
      // updates the game object every frame
      public Update():void {
       
        if(this.iskilled == false){
        this.Move();
        this.CheckBounds();
        this.bullet.Update();
        }
      }
 
      // reset the objects location to some value
      public Reset():void {
        this.x = Math.floor((Math.random() * (400 - this.width)) + this.halfWidth);
        if(this.x<100){
          this.x+=100;
        }
        this.y = -this.height;
      }
  
      // move the object to some new location
      public Move():void {
        this.y += this._dy;
       
      }
  
      // check to see if some boundary has been passed
      public CheckBounds():void {
        // check lower bounds
        if(this.y == (480 - this.height) ){
          this.Reset();
        }
      }
    }
  }
  