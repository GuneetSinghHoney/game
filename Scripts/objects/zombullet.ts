module objects {
    export class zombullet extends objects.GameObject {
      // private instance variables
       
      private _hero:objects.zombie2;
      // public properties
      public distance:number = 0 ;
      public fire:number=0;
      // Constructor
      constructor(assetManager: createjs.LoadQueue, zomarr:any) {
        super("zombie_bullet");
       this._hero = zomarr;
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this._dy = 10;
        this.Reset();
      }
  
      // updates the game object every frame
      public Update():void {
        console.log("fireeedddd@!!!!!")
        this.Move();
        this.CheckBounds();
      }
  
      // reset the objects location to some value
      public Reset():void {
        //createjs.Sound.play("fire");
        this.x = this._hero.x;
        this.y = this._hero.y;
      }
  
      // move the object to some new location
      public Move():void {
        this.y += this._dy;
      }
  
      // check to see if some boundary has been passed
      public CheckBounds():void {
        // check lower bounds
        if(this.y > 480) {
          this.Reset();
        }
      }
    }
  }
  