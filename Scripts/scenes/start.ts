module scenes {
  export class StartScene extends objects.Scene {
    // Private Instance Variables
  
    private _hero: objects.heroFront;
    private _bg:createjs.Bitmap;
    private _startButton:objects.Button;
    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
      
    }

    // Private Mathods
    private _startButtonClick():void {
      objects.Game.currentScene = config.Scene.PLAY;
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      this._hero = new objects.heroFront(this.assetManager);
      this._startButton = new objects.Button(this.assetManager, "startbt", 470, 350);
      this._bg = new createjs.Bitmap(this.assetManager.getResult("bg"));  
      this._bg.setBounds(0,0,500,400);       
      this.Main();
    }

    public Update(): void {

    }

    // This is where the fun happens
    public Main(): void {
      // add the welcome label to the scene
      this.addChild(this._bg);

      this.addChild(this._hero);

      // add the startButton to the scene
      this.addChild(this._startButton);
    
      this._startButton.on("click", this._startButtonClick);
    }
  }
}