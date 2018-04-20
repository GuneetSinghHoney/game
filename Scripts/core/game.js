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
    var textureAtlasData;
    var textureAtlas;
    textureAtlasData = {
        "images": [
            "Assets/sprites/textureAtlas.png"
        ],
        "frames": [
            [1, 1, 86, 215, 0, 0, 0],
            [89, 1, 601, 74, 0, 0, 0],
            [89, 77, 62, 82, 0, 0, 0],
            [89, 161, 111, 43, 0, 0, 0],
            [153, 77, 60, 81, 0, 0, 0],
            [202, 160, 20, 42, 0, 0, 0],
            [215, 77, 56, 81, 0, 0, 0],
            [224, 160, 15, 38, 0, 0, 0],
            [241, 160, 8, 25, 0, 0, 0],
            [273, 77, 58, 79, 0, 0, 0],
            [333, 77, 51, 77, 0, 0, 0],
            [386, 77, 58, 71, 0, 0, 0],
        ],
        "animations": {
            "zombie_dead": { "frames": [0] },
            "boss": { "frames": [1] },
            "zom": { "frames": [2, 4, 6], "speed": 0.1 },
            "zom1": { "frames": [3] },
            "zombie_bullet": { "frames": [5] },
            "bullet": { "frames": [8] },
            "hero": { "frames": [9, 10, 11], "speed": 0.1 },
            "bossbullet": { "frames": [7] }
        },
        "texturepacker": [
            "SmartUpdateHash: $TexturePacker:SmartUpdate:61b687ef60fc461abe71f6cd57b6c676:d7984b5b0e50850aad14157292184ec0:2b5604bc88faefd55ddac16e9bce1532$",
            "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
        ]
    };
    assetManifest = [
        { id: "heroFront", src: "./Assets/images/heroFront.png" },
        { id: "hero", src: "./Assets/images/hero.png" },
        { id: "over", src: "./Assets/images/over.png" },
        { id: "zom", src: "./Assets/images/zombie.png" },
        { id: "zom2", src: "./Assets/images/ground.png" },
        { id: "bullet", src: "./Assets/images/bullet.png" },
        { id: "bg", src: "./Assets/images/bg.png" },
        { id: "lvl1", src: "./Assets/images/lvl1.jpg" },
        { id: "lvl2", src: "./Assets/images/lvl2.jpg" },
        { id: "lvl3", src: "./Assets/images/lvl3.jpg" },
        { id: "startbt", src: "./Assets/images/startButton.jpg" },
        { id: "clickMeButton", src: "./Assets/images/clickMeButton.png" },
        { id: "restart", src: "./Assets/images/restart.jpg" },
        { id: "startButton", src: "./Assets/images/startButton.jpg" },
        { id: "nextButton", src: "./Assets/images/start.png" },
        { id: "backButton", src: "./Assets/images/backButton.png" },
        { id: "boss", src: "./Assets/images/boss1.png" },
        { id: "bossBullet", src: "./Assets/images/boss.png" },
        { id: "win", src: "./Assets/images/youWin.png" },
        { id: "congo", src: "./Assets/images/main.jpg" },
        { id: "startSound", src: "./Assets/audio/start.wav" },
        { id: "fire", src: "./Assets/audio/fire.mp3" },
        { id: "heroDead", src: "./Assets/audio/gameover.wav" },
        { id: "winn", src: "./Assets/audio/winn.mp3" },
        { id: "fansi", src: "./Assets/audio/fansi.mp3" },
        { id: "startvideo", src: "./Assets/audio/start.mp4" },
        { id: "gameover", src: "./Assets/audio/gameover.wav" },
        { id: "zomhorde", src: "./Assets/audio/Zombie_Horde.mp3" },
        { id: "zombieDead", src: "./Assets/audio/faltu.m4a" },
        { id: "cheek", src: "./Assets/audio/zombieScream.wav" },
        { id: "ocean", src: "./Assets/images/ocean.gif" },
        { id: "plane", src: "./Assets/images/plane.png" },
        { id: "island", src: "./Assets/images/island.png" },
        { id: "cloud", src: "./Assets/images/cloud.png" },
        { id: "boomer", src: "./Assets/images/boomer.png" }
    ];
    // preloads assets
    function Init() {
        console.log("Initialization Started...");
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
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
        objects.Game.textureAtlas = textureAtlas;
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
                currentScene = new scenes.last(assetManager);
                break;
            case config.Scene.LEVEL2:
                currentScene = new scenes.level2(assetManager);
                break;
            case config.Scene.OVER:
                currentScene = new scenes.OverScene(assetManager);
                break;
            case config.Scene.last:
                currentScene = new scenes.last(assetManager);
                break;
            case config.Scene.CONGO:
                currentScene = new scenes.congo(assetManager);
                break;
            case config.Scene.WIN:
                currentScene = new scenes.win(assetManager);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map