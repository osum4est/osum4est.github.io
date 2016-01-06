var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BattleSnake;
(function (BattleSnake) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.apply(this, arguments);
        }
        Play.prototype.create = function () {
            this.stage.backgroundColor = 0xF2F2F2;
            this.stage.disableVisibilityChange = true;
            this.rendering = new BattleSnake.Rendering();
            this.rendering.init(this.game);
            this.networking = BattleSnake.Networking.getInstance();
            this.networking.setOpponentJoin(this);
            this.startGame();
        };
        Play.prototype.startGame = function () {
            this.snake = new BattleSnake.Snake(this.game, 50, 5, 25, Number("0x" + (Math.random() * 0xFFFFFF << 0).toString(16)), 0xFF0000);
            this.opponentSnakes = new Array();
            this.gameObjects = new Array();
            this.gameObjects.push(this.snake);
            this.gameObjects.forEach(function (go) {
                go.create();
            });
            this.networking.join(this.snake.getJSON());
        };
        Play.prototype.opponentJoin = function (json) {
            console.log(json);
            this.gameObjects.push(new BattleSnake.NetworkSnake(this.game, json));
        };
        Play.prototype.opponentMove = function (json) {
            console.log(json);
            this.gameObjects[1].loadJSON(json);
        };
        Play.prototype.update = function () {
            this.gameObjects.forEach(function (go) {
                go.update();
            });
        };
        Play.prototype.render = function () {
            var _this = this;
            this.rendering.clear();
            this.gameObjects.forEach(function (go) {
                go.render(_this.rendering);
            });
        };
        return Play;
    }(Phaser.State));
    BattleSnake.Play = Play;
})(BattleSnake || (BattleSnake = {}));
