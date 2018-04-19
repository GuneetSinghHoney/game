module scenes {
    export class last extends objects.Scene {
      // Private Instance Variables
        private _bg: createjs.Bitmap;
        private _hero:objects.hero;
        private _boss:objects.boss;
        private _bullet:objects.bullet;
        private _bossBullet: objects.bossBullet;
        private _bullets: objects.bossBullet[]; 
     //   private _bullet1:objects.bullet;
    //    private _zomBullet: objects.zombullet;
     //   private _count:number;
        // Public Properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager);
       
        this.assetManager = assetManager;
        this._hero = new objects.hero(this.assetManager,objects.Game.keyboardmanager);
        this._bg = new createjs.Bitmap(this.assetManager.getResult("lvl1"));
        this.addEventListener("click",this._fireBullets);
        this._boss = new objects.boss(this.assetManager);
        this._bullet = new objects.bullet(this.assetManager,this._hero);
        this._bullet.distance=0;
        this._bullets = new Array(8);
        for(let i = 0;i<this._bullets.length;i++)
        {
          this._bullets[i] = new objects.bossBullet(this.assetManager);
        }
        
  //      this._bullet1 = new objects.bullet(this.assetManager,this._hero);
  //      this._bullet1.distance = 20;
  //      this._zomBullet = new objects.zombullet(this.assetManager,this._boss);
        this._bossBullet = new objects.bossBullet(this.assetManager);
      
  this.Start();
      }
  
      // Private Mathods
      
      private _fireBullets()
      {
        console.log("fire");
        
     //   let x = new objects.bullet(this.assetManager,this._hero);
     //   x.distance = 20;
     //   this.addChild(x);
        
      }  
  
      // Public Methods
      
      // Initialize Game Variables and objects
      public Start(): void {

        //initalise the variables
       
      
        this.Main();
      }
  
      public Update(): void {
  //Collisions

this._bullets.forEach(element => {
    
  let check = managers.Collision.Check(this._hero,element);
  if(check){
    console.log("Dead !");
  }
  });




  //collisions end
        //call update function of all objects
        this._bullets.forEach(element => {
          element.Update();
        });
         this._hero.Update();
      
          this._bullet.Update();
       //   this._bullet1.Update();
          this._boss.Update();
       //   this._zomBullet.Update();
          this._bossBullet.Update();
      
      }
  
      // This is where the fun happens
      public Main(): void {
        // add the bg to the scene
        
        this.addChild(this._bg);
        this.addChild(this._bullet); 
     //   this.addChild(this._bullet1); 
     this._bullets.forEach(element => {
    this.addChild(element);
    });
        this.addChild(this._bossBullet);
        this.addChild(this._boss);
        this.addChild(this._hero);
        
      }
    }
  }
  