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
            _this._hero = new objects.hero(_this.assetManager);
            _this._bg = new createjs.Bitmap(_this.assetManager.getResult("lvl1"));
            _this.Start();
            return _this;
        }
        // Private Mathods
        // Public Methods
        // Initialize Game Variables and objects
        level1.prototype.Start = function () {
            //initalise the variables
            this.Main();
        };
        level1.prototype.Update = function () {
            //call update function of all objects
            this._hero.Update();
        };
        // This is where the fun happens
        level1.prototype.Main = function () {
            // add the bg to the scene
            this.addChild(this._bg);
            this.addChild(this._hero);
        };
        return level1;
    }(objects.Scene));
    scenes.level1 = level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map