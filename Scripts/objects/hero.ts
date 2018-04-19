module objects {
    export class hero extends objects.GameObject {
      // private instance variables
  
      private keyboard:managers.Keyboard;
      // public properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue,keyboard:managers.Keyboard) {
        super("hero");
        this.keyboard = keyboard;
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this.y = 430;
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
      public Move():void {
        if(objects.Game.keyboardmanager.moveLeft) {
          this.x -= 5;
        }
   
        if(objects.Game.keyboardmanager.moveRight) {
          this.x += 5;
        }
      }
  
      // check to see if some boundary has been passed
      public CheckBounds():void {
        // right boundary
        if(this.x >= 640 - this.halfWidth) {
          this.x = 640 - this.halfWidth;
        }
  
        // left boundary
        if(this.x <= this.halfWidth) {
          this.x = this.halfWidth;
        }
      }
    }
  }
  