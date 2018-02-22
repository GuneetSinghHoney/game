module objects {
    export class heroFront extends createjs.Bitmap {
      // private instance variables
       
  
      // public properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager.getResult("heroFront"));
        this.Start();

        this.x =50;
        this.y = 50;
        

      }
  
      // private methods
  
      // reset the objects location to some value
      
  
      // move the object to some new location
    
      // check to see if some boundary has been passed
    
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
       
      }
  
      // updates the game object every frame
     
    }
  }
  