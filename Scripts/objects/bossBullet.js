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
    var bossBullet = /** @class */ (function (_super) {
        __extends(bossBullet, _super);
        // Constructor
        function bossBullet(assetManager) {
            var _this = _super.call(this, assetManager.getResult("bossBullet")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        bossBullet.prototype._initialize = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        // private methods
        // reset the objects location to some value
        bossBullet.prototype._reset = function () {
            var num = Math.floor((Math.random() * 640));
            this.x = num;
            this.y = 0;
        };
        // move the object to some new location
        bossBullet.prototype._move = function () {
            this.y += this._dy;
        };
        // check to see if some boundary has been passed
        bossBullet.prototype._checkBounds = function () {
            if (this.y >= 480) {
                this._reset();
            }
        };
        // public methods
        // Initializes variables and creates new objects
        bossBullet.prototype.Start = function () {
            this._dy = 4;
            this._reset();
        };
        // updates the game object every frame
        bossBullet.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return bossBullet;
    }(createjs.Bitmap));
    objects.bossBullet = bossBullet;
})(objects || (objects = {}));
//# sourceMappingURL=bossBullet.js.map