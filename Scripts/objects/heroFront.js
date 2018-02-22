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
    var heroFront = /** @class */ (function (_super) {
        __extends(heroFront, _super);
        // private instance variables
        // public properties
        // Constructor
        function heroFront(assetManager) {
            var _this = _super.call(this, assetManager.getResult("heroFront")) || this;
            _this.Start();
            _this.x = 50;
            _this.y = 50;
            return _this;
        }
        // private methods
        // reset the objects location to some value
        // move the object to some new location
        // check to see if some boundary has been passed
        // public methods
        // Initializes variables and creates new objects
        heroFront.prototype.Start = function () {
        };
        return heroFront;
    }(createjs.Bitmap));
    objects.heroFront = heroFront;
})(objects || (objects = {}));
//# sourceMappingURL=heroFront.js.map