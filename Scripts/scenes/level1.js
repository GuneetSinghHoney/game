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
    var level1 = /** @class */ (function (_super) {
        __extends(level1, _super);
        // Public Properties
        // Constructor
        function level1(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this._count = 10;
            _this.assetManager = assetManager;
            _this._hero = new objects.hero(_this.assetManager);
            _this._bg = new createjs.Bitmap(_this.assetManager.getResult("lvl1"));
            _this.addEventListener("click", _this._fireBullets);
            _this._zombiearray = new Array(_this._count);
            for (var i = 0; i < _this._zombiearray.length; i++) {
                _this._zombiearray[i] = new objects.zombie(_this.assetManager, _this._hero);
            }
            _this._bullet = new objects.bullet(_this.assetManager, _this._hero);
            _this._bullet.distance = 0;
            _this._bullet1 = new objects.bullet(_this.assetManager, _this._hero);
            _this._bullet1.distance = 20;
            _this.Start();
            return _this;
        }
        // Private Mathods
        level1.prototype._fireBullets = function () {
            console.log("fire");
        };
        // Public Methods
        // Initialize Game Variables and objects
        level1.prototype.Start = function () {
            //initalise the variables
            this.Main();
        };
        level1.prototype.Update = function () {
            //call update function of all objects
            var _this = this;
            this._hero.Update();
            this._bullet.Update();
            this._bullet1.Update();
            var num = Math.floor((Math.random() * this._count));
            this._zombiearray[num].Update();
            //Collision
            this._zombiearray.forEach(function (element) {
                if (_this._bullet.x <= (element.x + element.width) && _this._bullet.x >= element.x &&
                    _this._bullet.y == (element.y + element.height)) {
                    _this.removeChild(element);
                    _this._bullet.Reset();
                }
                if (_this._bullet1.x <= (element.x + element.width) && _this._bullet1.x >= element.x &&
                    _this._bullet1.y == (element.y + element.height)) {
                    _this.removeChild(element);
                    _this._bullet1.Reset();
                }
                if ((element.x + element.halfWidth) <= (_this._hero.x + _this._hero.width) &&
                    (element.x + element.halfWidth) >= (_this._hero.x) &&
                    (element.y + element.height) >= _this._hero.y) {
                    _this.removeChild(_this._hero);
                    _this.removeChild(_this._bullet);
                    _this.removeChild(_this._bullet1);
                }
            });
        };
        // This is where the fun happens
        level1.prototype.Main = function () {
            // add the bg to the scene
            var _this = this;
            this.addChild(this._bg);
            this.addChild(this._bullet);
            this.addChild(this._bullet1);
            this._zombiearray.forEach(function (element) {
                _this.addChild(element);
            });
            this.addChild(this._hero);
        };
        return level1;
    }(objects.Scene));
    scenes.level1 = level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map