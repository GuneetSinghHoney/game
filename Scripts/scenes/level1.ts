module scenes {
    export class level1 extends objects.Scene {
      // Private Instance Variables
        private _bg: createjs.Bitmap;
        private _hero:objects.hero;
    
        // Public Properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager);
    
        this._hero = new objects.hero(this.assetManager);
        this._bg = new createjs.Bitmap(this.assetManager.getResult("lvl1"));
        this.Start();
      }
  
      // Private Mathods
  
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {

        //initalise the variables
       
      
        this.Main();
      }
  
      public Update(): void {
  
        //call update function of all objects

       this._hero.Update();
      }
  
      // This is where the fun happens
      public Main(): void {
        // add the bg to the scene
        
        this.addChild(this._bg);
        this.addChild(this._hero);

      }
    }
  }
  