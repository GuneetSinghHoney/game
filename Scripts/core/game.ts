/// <reference path="_references.ts"/>

// IIFE - Immediately Invoked Function Expression
(function(){

  // Game Variables
  let canvas = document.getElementById("canvas");
  let stage:createjs.Stage;
  let helloLabel: objects.Label;
  let clickMeButton: objects.Button;
  let assetManager: createjs.LoadQueue;
  let assetManifest: any[];
  let currentScene: objects.Scene;
  let currentState: number;
  let keyboardManager: managers.Keyboard;
  let textureAtlasData:any;
  let textureAtlas:createjs.SpriteSheet;

  textureAtlasData = {

    "images": [
        "Assets/sprites/textureAtlas.png"
    ],
    
     
    "frames": [
      [1, 1, 20, 42, 0, 0, 0],
      [23, 1, 111, 43,0, 0, 0],
      [136, 1, 75, 85, 0, 0, 0],
      [1, 88, 75, 85, 0, 0, 0],
      [78, 88, 75, 85, 0, 0, 0],
      [155, 88, 75, 84, 0, 0, 0],
      [1, 175, 75, 84, 0, 0, 0],
      [78, 175, 75, 84, 0, 0, 0]
  ],
    
    "animations": {
      "bullet": { "frames": [0] },
      "zom2": { "frames": [1] },
      "hero": { "frames": [3,4] ,"speed":0.1},
      "herofire": { "frames": [2] },
      "zom1": { "frames": [5,6,7] ,"speed":0.1}
       
    },
    
    "texturepacker": [
            "SmartUpdateHash: $TexturePacker:SmartUpdate:61b687ef60fc461abe71f6cd57b6c676:d7984b5b0e50850aad14157292184ec0:2b5604bc88faefd55ddac16e9bce1532$",
            "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
    ]
    
    };
    




  assetManifest = [
    {id: "heroFront", src:"./Assets/images/heroFront.png"},
    {id: "hero", src:"./Assets/images/hero.png"},
    {id: "zom", src:"./Assets/images/zombie.png"},
    {id: "zom2", src:"./Assets/images/ground.png"},
    {id: "bullet", src:"./Assets/images/bullet.png"},
    {id: "bg", src:"./Assets/images/bg.jpg"},
    {id: "lvl1", src:"./Assets/images/lvl1.jpg"},
    {id: "lvl2", src:"./Assets/images/lvl2.jpg"},
    {id: "startbt", src:"./Assets/images/startButton.jpg"},
    {id: "clickMeButton", src:"./Assets/images/clickMeButton.png"},
    {id: "startButton", src:"./Assets/images/startButton.jpg"},
    {id: "nextButton", src:"./Assets/images/nextButton.png"},
    {id: "backButton", src:"./Assets/images/backButton.png"},
    {id: "boss", src:"./Assets/images/boss1.png"},
    {id: "bossBullet", src:"./Assets/images/boss.png"},
    {id: "congo", src:"./Assets/images/main.jpg"},
    {id: "startSound", src:"./Assets/audio/start.wav"},
    {id: "fire", src:"./Assets/audio/fire.wav"},
    {id: "heroDead", src:"./Assets/audio/heroDie.mp3"},
    {id: "zombieDead", src:"./Assets/audio/faltu.m4a"},
    {id: "cheek", src:"./Assets/audio/zombieScream.wav"},
    {id: "ocean", src:"./Assets/images/ocean.gif"},
    {id: "plane", src:"./Assets/images/plane.png"},
    {id: "island", src:"./Assets/images/island.png"},
    {id: "cloud", src:"./Assets/images/cloud.png"}
    {id: "boomer", src:"./Assets/images/boomer.png"}
  ];

  // preloads assets
  function Init():void {
    console.log("Initialization Started...");
    textureAtlas = new createjs.SpriteSheet(textureAtlasData);
    assetManager = new createjs.LoadQueue(); // creates the assetManager object
    assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
    assetManager.loadManifest(assetManifest);

    assetManager.on("complete", Start, this);
  }


  function Start():void {
    console.log("Starting Application...")

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

  function Update():void {
    // if the scene that is playing returns another current scene
    // then call Main again and switch the scene
    if(currentState!= objects.Game.currentScene) {
      Main();
    }

    currentScene.Update();

    stage.update(); // redraws the stage
  }

  function Main():void {
    stage.removeAllChildren();

    switch(objects.Game.currentScene) {
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
    }

    currentState = objects.Game.currentScene;
    stage.addChild(currentScene);
  }

  window.onload = Init;

})();
