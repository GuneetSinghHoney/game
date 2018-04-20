var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["PLAY"] = 1] = "PLAY";
        Scene[Scene["LEVEL2"] = 2] = "LEVEL2";
        Scene[Scene["last"] = 3] = "last";
        Scene[Scene["OVER"] = 4] = "OVER";
        Scene[Scene["CONGO"] = 5] = "CONGO";
        Scene[Scene["WIN"] = 6] = "WIN";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map