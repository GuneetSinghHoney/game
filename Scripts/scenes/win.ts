module scenes {
    export class win extends objects.Scene {
      // Private Instance Variables
     
      
      private _bg: createjs.Bitmap;
      
      // Public Properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager);
  
        this.Start();
      }
  
      // Private Mathods
      private _backButtonClick():void {
        
      }
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
      //  this._overLabel = new objects.Label("Game Over", "40px", "Consolas", "#000000", 320, 240, true);
        createjs.Sound.play("winn");
        this._bg = new createjs.Bitmap(this.assetManager.getResult("win"));
     
  
        this.Main();
      }
  
      public Update(): void {
  
      }
  
      public ButtonClick():void{
        console.log("start");
        objects.Game.scene = config.Scene.START;
      }
  
      // This is where the fun happens
      public Main(): void {
        // add the welcome label to the scene
     //   this.addChild(this._overLabel);
         this.addChild(this._bg);
      
        // event listeners
       // this._backButton.on("click", this._backButtonClick);
      }
    }
  }
  