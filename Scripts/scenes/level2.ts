module scenes {
    export class level2 extends objects.Scene {
      // Private Instance Variables
        private _bg: createjs.Bitmap;
        private _hero:objects.hero;
        private _zombiearray:objects.zombie[]; 
        private _zombiearray2:objects.zombie2[]; 
        private _bullet:objects.bullet;
    //    private _bullet1:objects.bullet;
    private sound:createjs.Sound;
        private _zombieCounter:number;
        private _count:number;
        // Public Properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager);
        this._count = 5;
        this.sound = createjs.Sound.play("zomhorde");
        this._zombieCounter =0;
        this.assetManager = assetManager;
        this._hero = new objects.hero(this.assetManager,objects.Game.keyboardmanager);
        this._bg = new createjs.Bitmap(this.assetManager.getResult("lvl2"));
        this.addEventListener("click",this._fireBullets);
        this._zombiearray = new Array(this._count);
        for(let i = 0;i<this._zombiearray.length;i++)
        {
          this._zombiearray[i] = new objects.zombie(this.assetManager,this._hero);
        }

        this._zombiearray2 = new Array(3);
        for(let i = 0;i<this._zombiearray2.length;i++)
        {
          this._zombiearray2[i] = new objects.zombie2(this.assetManager,this._hero);
        }

        this._bullet = new objects.bullet(this.assetManager,this._hero);
        this._bullet.distance=0;
   //     this._bullet1 = new objects.bullet(this.assetManager,this._hero);
   //     this._bullet1.distance = 20;
      
        
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
  
        //call update function of all objects

        console.log(this._zombieCounter);
        if(this._zombieCounter==(this._zombiearray.length+3))
        {
          objects.Game.scene = config.Scene.LEVEL2;
          this.sound.stop();
          objects.Game.currentScene = config.Scene.CONGO;
        }
       this._hero.Update();
      
       this._bullet.Update();
  //     this._bullet1.Update();
       
       
       let num = Math.floor((Math.random() * this._count));
       this._zombiearray[num].Update();
       num = Math.floor((Math.random() * 3));
     
       this._zombiearray2[num].Update();

       this._zombiearray2.forEach(element => {
         
        if(element.iskilled == false){
  

          let check = managers.Collision.Check(element,this._bullet);
   //       let check2 = managers.Collision.Check(element,this._bullet1);
          let check3 = managers.Collision.Check(element.bullet,this._hero);
          if(check)// || check2)
          {
            //collision bullet hits zombie
            createjs.Sound.play("zombieDead");
            this.removeChild(element);
            this.removeChild(element.bullet);
            this._zombieCounter++;
            element.iskilled = true;
            createjs.Sound.play("cheek");
           if(check)
            this._bullet.Reset();
    //       if(check2)
    //        this._bullet1.Reset();
          }

          if(check3)
          {
            createjs.Sound.play("heroDead");
            this.removeChild(this._hero);
            console.log("hero removed");
            this.sound.stop();
            this.removeChild(this._bullet);
     //       this.removeChild(this._bullet1);
            objects.Game.currentScene = config.Scene.OVER;
          }

        
        
        }
       });

       

       //bullet zombie collision
        this._zombiearray.forEach(element => 
          {
          if(element.iskilled == false){
  

          let check = managers.Collision.Check(element,this._bullet);
      //    let check2 = managers.Collision.Check(element,this._bullet1)
          let check3 = managers.Collision.Check(element,this._hero);
          if(check)//  || check2)
          {
            //collision bullet hits zombie
            createjs.Sound.play("zombieDead");
            this.removeChild(element);
            this._zombieCounter++;
            element.iskilled = true;
            createjs.Sound.play("cheek");
           if(check)
            this._bullet.Reset();
    //       if(check2)
   //         this._bullet1.Reset();
          }

          if(check3)
          {
            createjs.Sound.play("heroDead");
            this.removeChild(this._hero);
            console.log("hero removed");
            this.removeChild(this._bullet);
    //        this.removeChild(this._bullet1);
            objects.Game.currentScene = config.Scene.OVER;
          }
        }
        });
      }
  
      // This is where the fun happens
      public Main(): void {
        // add the bg to the scene
        
        this.addChild(this._bg);
        this.addChild(this._bullet); 
    ///    this.addChild(this._bullet1);
       
        this._zombiearray.forEach(element => {
          this.addChild(element);
        });
        this._zombiearray2.forEach(element => {
          this.addChild(element);
          this.addChild(element.bullet);
        });
        this.addChild(this._hero);
        
      }
    }
  }
  