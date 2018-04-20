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
var objects;
(function (objects) {
    var bullet = /** @class */ (function (_super) {
        __extends(bullet, _super);
        // Constructor
        function bullet(assetManager, warrior) {
            var _this = _super.call(this, "bullet") || this;
            // public properties
            _this.distance = 0;
            _this._hero = warrior;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        bullet.prototype.Start = function () {
            this._dy = 5;
            this.Reset();
        };
        // updates the game object every frame
        bullet.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        bullet.prototype.Reset = function () {
            scenes.last._isColliding = false;
            createjs.Sound.play("fire");
            this.x = this._hero.x;
            this.y = this._hero.y - this.distance;
        };
        // move the object to some new location
        bullet.prototype.Move = function () {
            this.y -= this._dy;
        };
        // check to see if some boundary has been passed
        bullet.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y === 0) {
                this.Reset();
            }
        };
        return bullet;
    }(objects.GameObject));
    objects.bullet = bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map