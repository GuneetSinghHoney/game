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
    var win = /** @class */ (function (_super) {
        __extends(win, _super);
        // Public Properties
        // Constructor
        function win(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        win.prototype._backButtonClick = function () {
        };
        // Public Methods
        // Initialize Game Variables and objects
        win.prototype.Start = function () {
            //  this._overLabel = new objects.Label("Game Over", "40px", "Consolas", "#000000", 320, 240, true);
            createjs.Sound.play("winn");
            this._bg = new createjs.Bitmap(this.assetManager.getResult("win"));
            this.Main();
        };
        win.prototype.Update = function () {
        };
        win.prototype.ButtonClick = function () {
            console.log("start");
            objects.Game.scene = config.Scene.START;
        };
        // This is where the fun happens
        win.prototype.Main = function () {
            // add the welcome label to the scene
            //   this.addChild(this._overLabel);
            this.addChild(this._bg);
            // event listeners
            // this._backButton.on("click", this._backButtonClick);
        };
        return win;
    }(objects.Scene));
    scenes.win = win;
})(scenes || (scenes = {}));
//# sourceMappingURL=win.js.map