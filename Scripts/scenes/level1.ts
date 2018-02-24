module scenes {
    export class level1 extends objects.Scene {
      // Private Instance Variables
        private _bg: createjs.Bitmap;
        private _hero:objects.hero;
        private _zombiearray:objects.zombie[]; 
        private _bullet:objects.bullet;
        private _bullet1:objects.bullet;
        
        private _count:number;
        // Public Properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager);
        this._count = 10;
        this.assetManager = assetManager;
        this._hero = new objects.hero(this.assetManager);
        this._bg = new createjs.Bitmap(this.assetManager.getResult("lvl1"));
        this.addEventListener("click",this._fireBullets);
        this._zombiearray = new Array(this._count);
        for(let i = 0;i<this._zombiearray.length;i++)
        {
          this._zombiearray[i] = new objects.zombie(this.assetManager,this._hero);
        }

        this._bullet = new objects.bullet(this.assetManager,this._hero);
        this._bullet.distance=0;
        this._bullet1 = new objects.bullet(this.assetManager,this._hero);
        this._bullet1.distance = 20;
        this.Start();
      }
  
      // Private Mathods
      
      private _fireBullets()
      {
        console.log("fire");
     
        
      }  
  
      // Public Methods
      
      // Initialize Game Variables and objects
      public Start(): void {

        //initalise the variables
       
      
        this.Main();
      }
  
      public Update(): void {
  
        //call update function of all objects

       this._hero.Update();
      
       this._bullet.Update();
       this._bullet1.Update();
       let num = Math.floor((Math.random() * this._count));
       this._zombiearray[num].Update();

       //Collision
     
       this._zombiearray.forEach(element => {
         
        if(this._bullet.x <= (element.x+element.width) && this._bullet.x >= element.x &&
        this._bullet.y == (element.y+element.height))
        {
          this.removeChild(element);
         this._bullet.Reset();
        }
        
        if(this._bullet1.x <= (element.x+element.width) && this._bullet1.x >= element.x &&
        this._bullet1.y == (element.y+element.height))
        {
          this.removeChild(element);
         this._bullet1.Reset();
        }

        if((element.x+element.halfWidth) <= (this._hero.x+this._hero.width) &&
        (element.x+element.halfWidth) >= (this._hero.x) &&
        (element.y+element.height)>=this._hero.y)
        {
          this.removeChild(this._hero);
          this.removeChild(this._bullet);
          this.removeChild(this._bullet1);
         }
      
       });
       

      }
  
      // This is where the fun happens
      public Main(): void {
        // add the bg to the scene
        
        this.addChild(this._bg);
        this.addChild(this._bullet); 
        this.addChild(this._bullet1); 
        this._zombiearray.forEach(element => {
          this.addChild(element);
        });
        this.addChild(this._hero);
        
      }
    }
  }
  