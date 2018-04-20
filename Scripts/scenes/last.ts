module scenes {
    export class last extends objects.Scene {
      // Private Instance Variables
        private _bg: createjs.Bitmap;
        private _hero:objects.hero;
        private _boss:objects.boss;
        private _bullet:objects.bullet;
        private _overLabel: objects.Label;
    //    private _bossBullet: objects.bossBullet;
        public static _isColliding:boolean = false;
        private _bullets: objects.bossBullet[]; 
        private _health: number;
     //   private _bullet1:objects.bullet;
    //    private _zomBullet: objects.zombullet;
     //   private _count:number;
        // Public Properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager);
       this._health = 100;
        this.assetManager = assetManager;
        this._overLabel = new objects.Label("HEALTH 100", "30px", "Consolas", "#FF0000", 500, 20, true);
     
        this._hero = new objects.hero(this.assetManager,objects.Game.keyboardmanager);
        this._bg = new createjs.Bitmap(this.assetManager.getResult("lvl3"));
        this.addEventListener("click",this._fireBullets);
        this._boss = new objects.boss(this.assetManager);
        this._bullet = new objects.bullet(this.assetManager,this._hero);
        this._bullet.distance=0;
        this._bullets = new Array(6);
        for(let i = 0;i<this._bullets.length;i++)
        {
          this._bullets[i] = new objects.bossBullet(this.assetManager,this._boss);
        }
        
  //      this._bullet1 = new objects.bullet(this.assetManager,this._hero);
  //      this._bullet1.distance = 20;
  //      this._zomBullet = new objects.zombullet(this.assetManager,this._boss);
      //  this._bossBullet = new objects.bossBullet(this.assetManager,this._boss);
      
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
//bossbullt to hero


//hero to boss

let check1 = managers.Collision.Check(this._bullet, this._boss);
if(check1)
{
  if(last._isColliding == false)
  {
   last._isColliding = true;
   this._health -=25;
   this._overLabel.text = "HEALTH "+this._health+"";
   this._bullet.Reset();
   console.log(this._health);
  }
}
//jado bullet rest hoyegi is colliding false;
if(this._health <= 0)
{
  objects.Game.currentScene = config.Scene.WIN;
}

this._bullets.forEach(element => {
    
  let check = managers.Collision.Check(this._hero,element);
  if(check){
    objects.Game.currentScene = config.Scene.OVER;
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
         // this._bossBullet.Update();
      
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
      //  this.addChild(this._bossBullet);
        this.addChild(this._boss);
        this.addChild(this._hero);
        this.addChild(this._overLabel);

      }
    }
  }
  