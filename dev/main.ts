/// <reference path="car.ts"/>

class Game {

    private car: Car;
    private wheelL: Wheel;
    private wheelR: Wheel;
    private rock: Rock;

    constructor() {
        this.car = new Car(this, 80);
        this.wheelL = new Wheel(this, 100);
        this.wheelR = new Wheel(this, 180);
        this.rock = new Rock(this, 250);
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        this.car.move();
        this.wheelL.move();
        this.wheelR.move();
        requestAnimationFrame(() => this.gameLoop());
    }

    public endGame() {
        document.getElementById("score").innerHTML = "Score : 0";
    }
}


// load
window.addEventListener("load", function () {
    new Game();
});