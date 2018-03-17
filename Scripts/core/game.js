/// <reference path="_references.ts"/>
// IIFE - Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
    var keyboardManager;
    assetManifest = [
        { id: "heroFront", src: "./Assets/images/heroFront.png" },
        { id: "hero", src: "./Assets/images/hero.png" },
        { id: "zom", src: "./Assets/images/zombie.png" },
        { id: "zom2", src: "./Assets/images/ground.png" },
        { id: "bullet", src: "./Assets/images/bullet.png" },
        { id: "bg", src: "./Assets/images/bg.jpg" },
        { id: "lvl1", src: "./Assets/images/lvl1.jpg" },
        { id: "lvl2", src: "./Assets/images/lvl2.jpg" },
        { id: "startbt", src: "./Assets/images/startButton.jpg" },
        { id: "clickMeButton", src: "./Assets/images/clickMeButton.png" },
        { id: "startButton", src: "./Assets/images/startButton.jpg" },
        { id: "nextButton", src: "./Assets/images/nextButton.png" },
        { id: "backButton", src: "./Assets/images/backButton.png" },
        { id: "startSound", src: "./Assets/audio/start.wav" },
        { id: "fire", src: "./Assets/audio/fire.wav" },
        { id: "heroDead", src: "./Assets/audio/heroDie.mp3" },
        { id: "zombieDead", src: "./Assets/audio/faltu.m4a" },
        { id: "cheek", src: "./Assets/audio/zombieScream.wav" },
        { id: "ocean", src: "./Assets/images/ocean.gif" },
        { id: "plane", src: "./Assets/images/plane.png" },
        { id: "island", src: "./Assets/images/island.png" },
        { id: "cloud", src: "./Assets/images/cloud.png" }
    ];
    // preloads assets
    function Init() {
        console.log("Initialization Started...");
        assetManager = new createjs.LoadQueue(); // creates the assetManager object
        assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // turn this on for buttons
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard();
        objects.Game.keyboardmanager = keyboardManager;
        Main();
    }
    function Update() {
        // if the scene that is playing returns another current scene
        // then call Main again and switch the scene
        if (currentState != objects.Game.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update(); // redraws the stage
    }
    function Main() {
        stage.removeAllChildren();
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                currentScene = new scenes.StartScene(assetManager);
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.level1(assetManager);
                break;
            case config.Scene.LEVEL2:
                currentScene = new scenes.level2(assetManager);
                break;
            case config.Scene.OVER:
                currentScene = new scenes.OverScene(assetManager);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map