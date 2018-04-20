module objects {
    export class bullet extends objects.GameObject {
      // private instance variables
        private _hero:objects.hero;
      // public properties
      public distance:number = 0 ;
      // Constructor
      constructor(assetManager: createjs.LoadQueue, warrior:objects.hero) {
        super("bullet");
        this._hero = warrior;
     
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this._dy = 5;
        this.Reset();
      }
  
      // updates the game object every frame
      public Update():void {
        this.Move();
        this.CheckBounds();
      }
  
      // reset the objects location to some value
      public Reset():void {
        scenes.last._isColliding = false;
        createjs.Sound.play("fire");
        this.x = this._hero.x;
        this.y = this._hero.y-this.distance;
      }
  
      // move the object to some new location
      public Move():void {
        this.y -= this._dy;
      }
  
      // check to see if some boundary has been passed
      public CheckBounds():void {
        // check lower bounds
        if(this.y === 0) {
          this.Reset();
        }
      }
    }
  }
  