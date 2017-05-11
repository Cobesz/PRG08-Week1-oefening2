class GameObject {

    protected div: HTMLElement;
    protected x;
    protected y;

    constructor(tag : string, position: number) {


        this.createDiv(tag);
    }

    private createDiv(string: string) {

        // het DOM element waar de div in geplaatst wordt:
        let container: HTMLElement = document.getElementById("container");
        this.div = document.createElement(string);

        // het DOM element waar de div in geplaatst wordt:
        document.getElementById(string);
        container.appendChild(this.div);
    }
}