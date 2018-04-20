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
    var zombie = /** @class */ (function (_super) {
        __extends(zombie, _super);
        // Constructor
        function zombie(assetManager, hero) {
            var _this = _super.call(this, "zom") || this;
            // public properties
            _this.iskilled = false;
            _this.starting = true;
            _this.y = -50;
            _this.hero = hero;
            _this.regX = 0;
            _this.regY = 0;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        zombie.prototype.Start = function () {
            this._dy = 6;
            this.Reset();
        };
        // updates the game object every frame
        zombie.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        zombie.prototype.Reset = function () {
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            this.y = -this.height;
        };
        // move the object to some new location
        zombie.prototype.Move = function () {
            this.y += this._dy;
            if (this.hero.x < this.x) {
                this.x = this.x - 1;
            }
            else if (this.hero.x > this.x) {
                this.x += 1;
            }
        };
        // check to see if some boundary has been passed
        zombie.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y == (480 - this.height)) {
                this.Reset();
            }
        };
        return zombie;
    }(objects.GameObject));
    objects.zombie = zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map