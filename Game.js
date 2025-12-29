class Game {
    constructor(gameSize) {
        this.score = 0;
        this.board = [];
        this.isGameOver = false;
        this.height = gameSize;
        this.width = gameSize;
        this.direction = 'N'
        this.highest = 3;

        for (let i = 0; i < this.height; i++) {
            let row = [];
            for (let j = 0; j < this.width; j++) {
                row.push(0);
            }
            this.board.push(row);
        }

        this.board[Math.floor(this.height / 2)][Math.floor(this.width / 2)] = 5;

    }

    getIsGameOver() {
        return this.isGameOver;
    }


    update() {
        let head = { x: -1, y: -1, value: 0 };
        let foodFlag = false;
        //(Shreya): Finding head position & food
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j] > head.value) {
                    head.value = this.board[i][j];
                    head.x = i;
                    head.y = j;
                }
                if (this.board[i][j] < 0) {
                    foodFlag = true;
                }
            }

        }
        if (!foodFlag) {
            let randomX = Math.floor(random() * this.width);
            let randomY = Math.floor(random() * this.height);

            while (this.board[randomX][randomY] > 0) {
                randomX = Math.floor(random() * this.width);
                randomY = Math.floor(random() * this.height);
            }

            this.board[randomX][randomY] = -1;
        }


        let isEating = false;

        if (this.direction == 'N') {
            if (head.y - 1 >= 0) {
                if (this.board[head.x][head.y - 1] == -1) {
                    isEating = true;
                }
            }

        }

        if (this.direction == 'S') {
            if (head.y + 1 < this.height) {
                if (this.board[head.x][head.y + 1] == -1) {
                    isEating = true;
                }
            }

        }

        if (this.direction == 'E') {
            if (head.x + 1 < this.width) {
                if (this.board[head.x + 1][head.y] == -1) {
                    isEating = true;
                }
            }

        }

        if (this.direction == 'W') {
            if (head.x - 1 >= 0) {
                if (this.board[head.x - 1][head.y] == -1) {
                    isEating = true;
                }
            }

        }




        //(Shreya): Updating snake body
        if (isEating) {
            head.value++;

        } else {
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board[i].length; j++) {
                    if (this.board[i][j] > 0) {
                        this.board[i][j]--;

                    }
                }
            }
        }

        //(Shreya): Moving head based on direction
        if (this.direction == 'N') {
            if (head.y - 1 < 0) {
                this.isGameOver = true;
                return;
            }
            if (this.board[head.x][head.y - 1] > 0) {
                this.isGameOver = true;
                return;
            }
            this.board[head.x][head.y - 1] = head.value;
        }
        if (this.direction == 'S') {
            if (head.y + 1 > this.height - 1) {
                this.isGameOver = true;
                return;
            }
            if (this.board[head.x][head.y + 1] > 0) {
                this.isGameOver = true;
                return;
            }
            this.board[head.x][head.y + 1] = head.value;
        }
        if (this.direction == 'E') {
            if (head.x + 1 > this.width - 1) {
                this.isGameOver = true;
                return;
            }
            if (this.board[head.x + 1][head.y] > 0) {
                this.isGameOver = true;
                return;
            }
            this.board[head.x + 1][head.y] = head.value;
        }
        if (this.direction == 'W') {
            if (head.x - 1 < 0) {
                this.isGameOver = true;
                return;
            }
            if (this.board[head.x - 1][head.y] > 0) {
                this.isGameOver = true;
                return;
            }
            this.board[head.x - 1][head.y] = head.value;
        }
        this.highest = head.value;
    }

    setDirection(direction) {
        if (direction == 'N') {
            if (this.direction != 'S') {
                this.direction = direction;
            }
        }
        if (direction == 'S') {
            if (this.direction != 'N') {
                this.direction = direction;
            }
        }
        if (direction == 'E') {
            if (this.direction != 'W') {
                this.direction = direction;
            }
        }
        if (direction == 'W') {
            if (this.direction != 'E') {
                this.direction = direction;
            }
        }

    }


    drawBoard(cellSize) {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {

                if (this.board[i][j] == 0) {
                    fill(0);
                }
                if (this.board[i][j] == -1) {
                    fill(255, 0, 0);
                }
                if (this.board[i][j] > 0) {
                    fill((this.board[i][j] / this.highest) * 255,
                        (this.board[i][j] / this.highest) * 255,
                        255);
                }
                rect(i * cellSize, j * cellSize, cellSize, cellSize);

            }
        }

    }




}