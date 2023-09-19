class Snake {
    constructor(XLength, YLength) {
        this.XLength = XLength;
        this.YLength = YLength;
        this.gridXLength = XLength / 10;
        this.gridYLength = YLength / 10;
        this.moveXN = false;
        this.moveXP = false;
        this.moveYN = false;
        this.moveYP = false;
        this.moveXNvalue = 0;
        this.moveXPvalue = 0;
        this.moveYNvalue = 0;
        this.moveYPvalue = 0;
        this.snakeX = 75;
        this.snakeY = 75;
        this.lastMovement = null;
    }
    /*
    snakePart() {
        fill(200, 0, 0);
        rect(this.snakeX, this.snakeY, this.gridXLength, this.gridYLength);
        console.log("snake properties:", this.snakeX, this.snakeY, this.gridXLength, this.gridYLength);
        rect(50, 50, 50, 75)
        console.log("snakepart")
    }
    */

    update1() {

    }
    draw() {
        
        if (pressedKeys.a) {
            this.snakeX -= this.gridXLength;
            this.lastMovement = "a"
            console.log("pressed right");
        } else if (pressedKeys.d) {
            this.snakeX += this.gridXLength
            this.lastMovement = "d"
        } else if (pressedKeys.w) {
            this.snakeY -= this.gridYLength
            this.lastMovement = "w"
        } else if (pressedKeys.s) {
            this.snakeY += this.gridYLength
            this.lastMovement = "s"
        }
        if (this.lastMovement) {
            console.log("lastMovement")
            if (this.lastMovement === "a") {
                this.snakeX -= this.gridXLength;
            } else if (this.lastMovement === "d") {
                this.snakeX += this.gridXLength;
            } else if (this.lastMovement === "d") {
                this.snakeY -= this.gridYLength;
            } else if (this.lastMovement === "d") {
                this.snakeY += this.gridYLength;
            }
        }

        fill(200, 0, 0);
        rect(this.snakeX + 5, this.snakeY + 5, this.gridXLength - 10, this.gridYLength - 10);
        console.log("snake properties:", this.snakeX, this.snakeY);
        
    }
}
