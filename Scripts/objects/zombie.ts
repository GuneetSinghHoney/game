module objects {
    export class zombie extends objects.GameObject {
      // private instance variables
      private hero;
      // public properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue,hero:objects.hero) {
        super(assetManager, "zom");
        this.hero = hero;
        this.regX =0;
        this.regY=0;
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this._dy = 6;
        this.Reset();
      }
  
      // updates the game object every frame
      public Update():void {
        this.Move();
        this.CheckBounds();
      }
  
      // reset the objects location to some value
      public Reset():void {
        this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
        this.y = -this.height;
      }
  
      // move the object to some new location
      public Move():void {
        this.y += this._dy;
        if(this.hero.x < this.x)
        {
          this.x = this.x-1;
        }
        else if(this.hero.x>this.x){
          this.x+=1;
        }
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
  