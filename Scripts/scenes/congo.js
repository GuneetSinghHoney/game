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
    var congo = /** @class */ (function (_super) {
        __extends(congo, _super);
        // Public Properties
        // Constructor
        function congo(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this._animator = 0;
            createjs.Sound.play("fansi");
            _this.Start();
            _this._startSound = assetManager.getResult("startSound");
            return _this;
        }
        // Private Mathods
        congo.prototype._startButtonClick = function () {
            createjs.Sound.play("startSound");
            if (objects.Game.scene == config.Scene.PLAY) {
                objects.Game.currentScene = config.Scene.LEVEL2;
            }
            else {
                objects.Game.currentScene = config.Scene.last;
            }
        };
        // Public Methods
        // Initialize Game Variables and objects
        congo.prototype.Start = function () {
            this.hero = new createjs.Bitmap(this.assetManager.getResult("boomer"));
            this._startButton = new objects.Button(this.assetManager, "nextButton", 200, 350);
            this._bg = new createjs.Bitmap(this.assetManager.getResult("congo"));
            this._bg.setBounds(0, 0, 500, 400);
            this.hero.setBounds(0, 15, 40, 40);
            this.Main();
        };
        congo.prototype.Update = function () {
            this._startButton.x += 2;
            if (this._startButton.x >= 640) {
                this._startButton.x = 10;
            }
            this.hero.x = this.hero.x + 2;
            this._animator += 1;
            if (this._animator % 50 == 0) {
                this._startButton.alpha = 0.25;
            }
            else if (this._animator % 20) {
                this._startButton.alpha = 0.50;
            }
            else {
                this._startButton.alpha = 1;
            }
        };
        // This is where the fun happens
        congo.prototype.Main = function () {
            // add the welcome label to the scene
            this.addChild(this._bg);
            // add the startButton to the scene
            this.addChild(this._startButton);
            this.addChild(this.hero);
            this._startButton.on("click", this._startButtonClick);
        };
        return congo;
    }(objects.Scene));
    scenes.congo = congo;
})(scenes || (scenes = {}));
//# sourceMappingURL=congo.js.map