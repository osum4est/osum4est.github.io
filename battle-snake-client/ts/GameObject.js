var BattleSnake;
(function (BattleSnake) {
    var GameObject = (function () {
        function GameObject(game) {
            this.game = game;
        }
        GameObject.prototype.create = function () { };
        ;
        GameObject.prototype.update = function () { };
        ;
        GameObject.prototype.render = function (rendering) { };
        ;
        return GameObject;
    }());
    BattleSnake.GameObject = GameObject;
})(BattleSnake || (BattleSnake = {}));
