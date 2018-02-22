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
    var hero = /** @class */ (function (_super) {
        __extends(hero, _super);
        // private instance variables
        // public properties
        // Constructor
        function hero(assetManager) {
            var _this = _super.call(this, assetManager, "hero") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        hero.prototype.Start = function () {
            this.y = 430;
        };
        // updates the game object every frame
        hero.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        hero.prototype.Reset = function () {
        };
        // move the object to some new location
        hero.prototype.Move = function () {
            this.x = objects.Game.stage.mouseX;
        };
        // check to see if some boundary has been passed
        hero.prototype.CheckBounds = function () {
            // right boundary
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            // left boundary
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        return hero;
    }(objects.GameObject));
    objects.hero = hero;
})(objects || (objects = {}));
//# sourceMappingURL=hero.js.map