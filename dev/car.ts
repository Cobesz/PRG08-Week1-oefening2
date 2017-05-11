/// <reference path="wheel.ts"/>
///<reference path="gameObject.ts"/>

class Car extends GameObject {

    private speed: number;
    private braking: boolean;
    private game: Game;


    constructor(g: Game, position: number) {
        super("car", position);
        this.game = g;

        this.x = position;
        this.y = 220;

        this.speed = 4;


        // hier een keypress event listener toevoegen. een keypress zorgt dat braking true wordt
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyPress(e));
        // alvast goed zetten

    }

    public move(): void {
        // hier de snelheid verlagen als we aan het afremmen zijn
        //

        // hier kijken of de x waarde hoger is dan de x van de rots (335)
        if(this.x > 335) {
            console.log("Helemaal brokko G");
            this.speed = 0;
        }

        // de snelheid bij de x waarde optellen
        //

        // tekenen
        this.x += this.speed;
        this.div.style.transform = "translate("+this.x+"px,"+this.y+"px)";

    }

    // hier een method maken voor on key press
    private onKeyPress(event:KeyboardEvent):void {
        switch (event.keyCode) {
            case 32:
                this.speed = 0;
                break;
        }
    }

    private halted() {

    }
}

