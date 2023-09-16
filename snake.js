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
    }

    snakePart() {
        fill(200, 0, 0);
        rect(this.snakeX, this.snakeY, this.XLength, this.YLength);
        console.log("snakepart")
    }

    update() {
        // Check movement flags and update snake's position here
        if (this.moveXP) {
            this.snakeX += this.gridXLength;
            console.log("pressed right");
        } else if (this.moveX) {
            this.snakeX -= this.gridXLength
        } else if (this.moveY) {
            this.snakeY += this.gridYLength
        } else if (this.moveY) {
            this.snakeY -= this.gridYLength
        }
        // Add similar checks for other directions (left, up, down)
    }

    left() {
        this.moveXN = true;
        console.log("pressed left");
    }

    right() {
        this.moveXP = true;
        console.log("pressed right");
    }

    up() {
        this.moveYN = true;
        console.log("pressed up");
    }

    down() {
        this.moveYP = true;
        console.log("pressed down");
    }
}

// Usage:
// const snake = new Snake(100, 100); // Replace with your desired XLength and YLength
