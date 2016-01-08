/// <reference path="./GameObject.ts"/>

module BattleSnake {
    export class BasicGameObject extends GameObject {
        size: number;
        color: number;
        x: number;
        y: number;

        constructor(game: Phaser.Game, size: number, color: number, x: number, y: number) {
            super(game);

            this.size = size;
            this.color = color;
            this.x = x;
            this.y = y;
        }

        render(rendering: Rendering) {
            rendering.drawSquare(this.x, this.y, this.size, this.color);
        }
    }
}
