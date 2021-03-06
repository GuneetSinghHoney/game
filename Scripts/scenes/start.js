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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Public Properties
        // Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this._animator = 0;
            _this.Start();
            _this._startSound = assetManager.getResult("startSound");
            return _this;
        }
        // Private Mathods
        StartScene.prototype._startButtonClick = function () {
            createjs.Sound.play("startSound");
            objects.Game.currentScene = config.Scene.PLAY;
        };
        // Public Methods
        // Initialize Game Variables and objects
        StartScene.prototype.Start = function () {
            //   this._hero = new objects.heroFront(this.assetManager);
            this._startButton = new objects.Button(this.assetManager, "startbt", 250, 350);
            this._bg = new createjs.Bitmap(this.assetManager.getResult("bg"));
            this._bg.setBounds(0, 0, 500, 400);
            this.Main();
        };
        StartScene.prototype.Update = function () {
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
        StartScene.prototype.Main = function () {
            // add the welcome label to the scene
            this.addChild(this._bg);
            //   this.addChild(this._hero);
            // add the startButton to the scene
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map