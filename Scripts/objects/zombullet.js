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
    var zombullet = /** @class */ (function (_super) {
        __extends(zombullet, _super);
        // Constructor
        function zombullet(assetManager, zomarr) {
            var _this = _super.call(this, "zombie_bullet") || this;
            // public properties
            _this.distance = 0;
            _this.fire = 0;
            _this._hero = zomarr;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        zombullet.prototype.Start = function () {
            this._dy = 10;
            this.Reset();
        };
        // updates the game object every frame
        zombullet.prototype.Update = function () {
            console.log("fireeedddd@!!!!!");
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        zombullet.prototype.Reset = function () {
            //createjs.Sound.play("fire");
            this.x = this._hero.x;
            this.y = this._hero.y;
        };
        // move the object to some new location
        zombullet.prototype.Move = function () {
            this.y += this._dy;
        };
        // check to see if some boundary has been passed
        zombullet.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y > 480) {
                this.Reset();
            }
        };
        return zombullet;
    }(objects.GameObject));
    objects.zombullet = zombullet;
})(objects || (objects = {}));
//# sourceMappingURL=zombullet.js.map