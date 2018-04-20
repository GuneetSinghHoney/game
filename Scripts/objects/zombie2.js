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
    var zombie2 = /** @class */ (function (_super) {
        __extends(zombie2, _super);
        // Constructor
        function zombie2(assetManager, hero) {
            var _this = _super.call(this, "zom1") || this;
            // public properties
            _this.iskilled = false;
            _this.heroDead = false;
            _this.hero = hero;
            _this.regX = _this.getBounds().width * 0.5;
            _this.regY = _this.getBounds().height * 0.5;
            _this.bullet = new objects.zombullet(assetManager, _this);
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        zombie2.prototype.Start = function () {
            this._dy = 3;
            this.Reset();
        };
        // updates the game object every frame
        zombie2.prototype.Update = function () {
            if (this.iskilled == false) {
                this.Move();
                this.CheckBounds();
                this.bullet.Update();
            }
        };
        // reset the objects location to some value
        zombie2.prototype.Reset = function () {
            this.x = Math.floor((Math.random() * (400 - this.width)) + this.halfWidth);
            if (this.x < 100) {
                this.x += 100;
            }
            this.y = -this.height;
        };
        // move the object to some new location
        zombie2.prototype.Move = function () {
            this.y += this._dy;
        };
        // check to see if some boundary has been passed
        zombie2.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.y == (480 - this.height)) {
                this.Reset();
            }
        };
        return zombie2;
    }(objects.GameObject));
    objects.zombie2 = zombie2;
})(objects || (objects = {}));
//# sourceMappingURL=zombie2.js.map