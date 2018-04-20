var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var last = /** @class */ (function (_super) {
        __extends(last, _super);
        //   private _bullet1:objects.bullet;
        //    private _zomBullet: objects.zombullet;
        //   private _count:number;
        // Public Properties
        // Constructor
        function last(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this._health = 100;
            _this.assetManager = assetManager;
            _this._overLabel = new objects.Label("HEALTH 100", "30px", "Consolas", "#FF0000", 500, 20, true);
            _this._hero = new objects.hero(_this.assetManager, objects.Game.keyboardmanager);
            _this._bg = new createjs.Bitmap(_this.assetManager.getResult("lvl3"));
            _this.addEventListener("click", _this._fireBullets);
            _this._boss = new objects.boss(_this.assetManager);
            _this._bullet = new objects.bullet(_this.assetManager, _this._hero);
            _this._bullet.distance = 0;
            _this._bullets = new Array(6);
            for (var i = 0; i < _this._bullets.length; i++) {
                _this._bullets[i] = new objects.bossBullet(_this.assetManager, _this._boss);
            }
            //      this._bullet1 = new objects.bullet(this.assetManager,this._hero);
            //      this._bullet1.distance = 20;
            //      this._zomBullet = new objects.zombullet(this.assetManager,this._boss);
            //  this._bossBullet = new objects.bossBullet(this.assetManager,this._boss);
            _this.Start();
            return _this;
        }
        // Private Mathods
        last.prototype._fireBullets = function () {
            console.log("fire");
            //   let x = new objects.bullet(this.assetManager,this._hero);
            //   x.distance = 20;
            //   this.addChild(x);
        };
        // Public Methods
        // Initialize Game Variables and objects
        last.prototype.Start = function () {
            //initalise the variables
            this.Main();
        };
        last.prototype.Update = function () {
            //Collisions
            //bossbullt to hero
            var _this = this;
            //hero to boss
            var check1 = managers.Collision.Check(this._bullet, this._boss);
            if (check1) {
                if (last._isColliding == false) {
                    last._isColliding = true;
                    this._health -= 25;
                    this._overLabel.text = "HEALTH " + this._health + "";
                    this._bullet.Reset();
                    console.log(this._health);
                }
            }
            //jado bullet rest hoyegi is colliding false;
            if (this._health <= 0) {
                objects.Game.currentScene = config.Scene.WIN;
            }
            this._bullets.forEach(function (element) {
                var check = managers.Collision.Check(_this._hero, element);
                if (check) {
                    objects.Game.currentScene = config.Scene.OVER;
                }
            });
            //collisions end
            //call update function of all objects
            this._bullets.forEach(function (element) {
                element.Update();
            });
            this._hero.Update();
            this._bullet.Update();
            //   this._bullet1.Update();
            this._boss.Update();
            //   this._zomBullet.Update();
            // this._bossBullet.Update();
        };
        // This is where the fun happens
        last.prototype.Main = function () {
            // add the bg to the scene
            var _this = this;
            this.addChild(this._bg);
            this.addChild(this._bullet);
            //   this.addChild(this._bullet1); 
            this._bullets.forEach(function (element) {
                _this.addChild(element);
            });
            //  this.addChild(this._bossBullet);
            this.addChild(this._boss);
            this.addChild(this._hero);
            this.addChild(this._overLabel);
        };
        //    private _bossBullet: objects.bossBullet;
        last._isColliding = false;
        return last;
    }(objects.Scene));
    scenes.last = last;
})(scenes || (scenes = {}));
//# sourceMappingURL=last.js.map