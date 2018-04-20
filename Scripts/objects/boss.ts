module objects {
    export class boss extends objects.GameObject {
      // private instance variables
      private check:boolean;
      private hero:objects.hero;
      // public properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue ) {
        super("boss");      
        this.Start();
        this.x = this.halfWidth;
        this.y = 2;
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        
      }
  
      // updates the game object every frame
      public Update():void {
        this.Move();
        this.CheckBounds();
      }
  
      // reset the objects location to some value
      public Reset():void {
  
      }
  
      // move the object to some new location
      public Move():void
      {
        this.y +=1;        
      }
  
      // check to see if some boundary has been passed
      public CheckBounds():void {
        // right boundary
        if(this.y >= 100)
        {       
          this.y = 0;
        }
        
      }
    }
  }
  