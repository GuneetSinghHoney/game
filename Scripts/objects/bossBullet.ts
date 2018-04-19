
module objects {
    export class bossBullet extends createjs.Bitmap {
      // private instance variables
   
 protected _dx: number;
 protected _dy: number;
 // public properties
 public width: number;
 public height: number;
 public halfWidth: number;
 public halfHeight: number;
 
 // private methods
 private _initialize():void {
   this.width = this.getBounds().width;
   this.height = this.getBounds().height;
   this.halfWidth = this.width * 0.5;
   this.halfHeight = this.height * 0.5;
   this.regX = this.halfWidth;
   this.regY = this.halfHeight;
 }

  
      // public properties
        public x: number;
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager.getResult("bossBullet"));
        this.Start();
      }
  
      // private methods
  
      // reset the objects location to some value
      private _reset():void {
        let num = Math.floor((Math.random() * 640));
        this.x = num;
        this.y = 0;
      }
  
      // move the object to some new location
      private _move():void {
        this.y += this._dy;
      }
  
      // check to see if some boundary has been passed
      private _checkBounds():void {
        if(this.y >= 480) {
          this._reset();
        }
      }
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this._dy = 4;
        this._reset();
      }
  
      // updates the game object every frame
      public Update():void {
        this._move();
        this._checkBounds();
      }
    }
  }
  