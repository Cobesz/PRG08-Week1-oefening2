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
var GameObject = (function () {
    function GameObject(tag, position) {
        this.createDiv(tag);
    }
    GameObject.prototype.createDiv = function (string) {
        var container = document.getElementById("container");
        this.div = document.createElement(string);
        document.getElementById(string);
        container.appendChild(this.div);
    };
    return GameObject;
}());
var Wheel = (function (_super) {
    __extends(Wheel, _super);
    function Wheel(g, position) {
        var _this = _super.call(this, "wheel", position) || this;
        _this.game = g;
        _this.x = position;
        _this.y = 250;
        _this.speed = 4;
        window.addEventListener("keydown", function (e) { return _this.onKeyPress(e); });
        return _this;
    }
    Wheel.prototype.move = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        if (this.x > 385) {
            console.log(this.x);
            this.speed = 0;
        }
    };
    Wheel.prototype.onKeyPress = function (event) {
        switch (event.keyCode) {
            case 32:
                this.speed = 0;
                break;
        }
    };
    return Wheel;
}(GameObject));
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(g, position) {
        var _this = _super.call(this, "car", position) || this;
        _this.game = g;
        _this.x = position;
        _this.y = 220;
        _this.speed = 4;
        window.addEventListener("keydown", function (e) { return _this.onKeyPress(e); });
        return _this;
    }
    Car.prototype.move = function () {
        if (this.x > 335) {
            console.log("Helemaal brokko G");
            this.speed = 0;
        }
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Car.prototype.onKeyPress = function (event) {
        switch (event.keyCode) {
            case 32:
                this.speed = 0;
                break;
        }
    };
    Car.prototype.halted = function () {
    };
    return Car;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.car = new Car(this, 80);
        this.wheelL = new Wheel(this, 100);
        this.wheelR = new Wheel(this, 180);
        this.rock = new Rock(this, 250);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.move();
        this.wheelL.move();
        this.wheelR.move();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.endGame = function () {
        document.getElementById("score").innerHTML = "Score : 0";
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Rock = (function (_super) {
    __extends(Rock, _super);
    function Rock(g, position) {
        var _this = _super.call(this, "rock", position) || this;
        _this.speed = 0;
        _this.move();
        return _this;
    }
    Rock.prototype.move = function () {
        this.div.style.transform = "translate(490px,210px)";
    };
    Rock.prototype.adjustSpeed = function () {
    };
    return Rock;
}(GameObject));
//# sourceMappingURL=main.js.map