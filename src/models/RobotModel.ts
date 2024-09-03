export default class RobotModel {
    grid: number[][];
    position: { x: number; y: number };
    direction: string;

    constructor(prevState?: RobotModel) {
        if (prevState) {
            this.grid = prevState.grid.map((row) => [...row]);
            this.position = { ...prevState.position };
            this.direction = prevState.direction;
        } else {
            this.grid = Array(5)
                .fill(null)
                .map(() => Array(5).fill(0));
            this.position = { x: 0, y: 0 };
            this.direction = "N";
            this.updateGrid();
        }
    }

    updateGrid() {
        this.grid = this.grid.map((row) => row.map(() => 0));
        this.grid[this.position.y][this.position.x] = 1;
    }

    moveForward() {
        const newPosition = { ...this.position };
        switch (this.direction) {
            case "N":
                newPosition.y = Math.max(0, newPosition.y - 1);
                break;
            case "E":
                newPosition.x = Math.min(4, newPosition.x + 1);
                break;
            case "S":
                newPosition.y = Math.min(4, newPosition.y + 1);
                break;
            case "W":
                newPosition.x = Math.max(0, newPosition.x - 1);
                break;
        }
        this.position = newPosition;
        this.updateGrid();
    }

    rotateLeft() {
        const directions = ["N", "W", "S", "E"];
        const currentIndex = directions.indexOf(this.direction);
        this.direction = directions[(currentIndex + 1) % 4];
    }

    rotateRight() {
        const directions = ["N", "E", "S", "W"];
        const currentIndex = directions.indexOf(this.direction);
        this.direction = directions[(currentIndex + 1) % 4];
    }
    setDirection(newDirection: string) {
        this.direction = newDirection;
    }
}
