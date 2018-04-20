
module objects {
    export class bossBullet extends objects.GameObject {
      // private instance variables
   private _boss:objects.boss;
      // public properties
        public x: number;
      // Constructor
      constructor(assetManager: createjs.LoadQueue,boss:objects.boss) {
        super("bossbullet");
        this._boss = boss;
        this.height = 40;
        this.Start();
      }
  
      // private methods
  
      // reset the objects location to some value
      private _reset():void {
        let num = Math.floor((Math.random() * 640));
        this.x = num;
        this.y = this._boss.y;
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
  