module scenes {
  export class congo extends objects.Scene {
    // Private Instance Variables
  
    private hero:createjs.Bitmap;
    private _bg:createjs.Bitmap;
    private _startButton:objects.Button;
    private _animator:number;
    private _startSound:any;
    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this._animator=0;
      createjs.Sound.play("fansi");
      this.Start();
      
      this._startSound = assetManager.getResult("startSound");
    }

    // Private Mathods
    private _startButtonClick():void {
      createjs.Sound.play("startSound");
      if(objects.Game.scene == config.Scene.PLAY)
      {
      objects.Game.currentScene = config.Scene.LEVEL2;
      }
      else{
        objects.Game.currentScene = config.Scene.last;
      }
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
     
      this.hero = new createjs.Bitmap(this.assetManager.getResult("boomer"));
      this._startButton = new objects.Button(this.assetManager, "nextButton", 200, 350);
      this._bg = new createjs.Bitmap(this.assetManager.getResult("congo"));  
      this._bg.setBounds(0,0,500,400);       
      this.hero.setBounds(0,15,40,40);
      this.Main();
    }

    public Update(): void
    {

      this._startButton.x += 2;
      if(this._startButton.x>=640)
      {
        this._startButton.x = 10;
      }

      this.hero.x = this.hero.x +2;
      this._animator+=1;

      if(this._animator%50==0)
      {
        this._startButton.alpha = 0.25;
      }
      else if(this._animator%20)
      {
        this._startButton.alpha = 0.50; 
      }
      else
      {
        this._startButton.alpha =1;
      }
    }

    // This is where the fun happens
    public Main(): void {
      // add the welcome label to the scene
      this.addChild(this._bg);
     
      // add the startButton to the scene
      this.addChild(this._startButton);
      this.addChild(this.hero);
      this._startButton.on("click", this._startButtonClick);
    }
  }
}
