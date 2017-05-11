///<reference path="gameObject.ts"/>


class Wheel extends GameObject{

    private speed: number;
    private game: Game;

    constructor(g: Game, position: number) {
        super("wheel", position);

        this.game = g;

        this.x = position;
        this.y = 250;

        this.speed = 4;


        // hier een keypress event listener toevoegen. een keypress zorgt dat braking true wordt
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyPress(e));
    }

    public move(): void {
        this.x += this.speed;
        this.div.style.transform = "translate("+this.x+"px,"+this.y+"px)";

        if(this.x > 385) {
            console.log(this.x);
            this.speed = 0;
        }
    }

    // hier een method maken voor on key press
    private onKeyPress(event:KeyboardEvent):void {
        switch (event.keyCode) {
            case 32:
                this.speed = 0;
                break;
        }
    }
}