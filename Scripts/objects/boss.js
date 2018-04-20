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
    var boss = /** @class */ (function (_super) {
        __extends(boss, _super);
        // public properties
        // Constructor
        function boss(assetManager) {
            var _this = _super.call(this, "boss") || this;
            _this.Start();
            _this.x = _this.halfWidth;
            _this.y = 2;
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        boss.prototype.Start = function () {
        };
        // updates the game object every frame
        boss.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        boss.prototype.Reset = function () {
        };
        // move the object to some new location
        boss.prototype.Move = function () {
            this.y += 1;
        };
        // check to see if some boundary has been passed
        boss.prototype.CheckBounds = function () {
            // right boundary
            if (this.y >= 100) {
                this.y = 0;
            }
        };
        return boss;
    }(objects.GameObject));
    objects.boss = boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map