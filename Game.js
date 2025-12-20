class Game {
    constructor(gameSize) {
        this.score = 0;
        this.board = [];
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

        this.board[Math.floor(this.height / 2)][Math.floor(this.width / 2)] = 3;

    }

    update() {
        let head = {x:-1,y:-1,value:0};
        for(let i = 0; i < this.board.length; i++ ){
            for(let j = 0; j < this.board[i].length; j++){
                    if(this.board[i][j]>head.value){
                        head.value=this.board[i][j];
                        head.x=i;
                        head.y=j;
                    }
            }
        }
         for(let i = 0; i < this.board.length; i++ ){
            for(let j = 0; j < this.board[i].length; j++){
                  if(this.board[i][j]>0){
                    this.board[i][j]--;

                  }
            }
        }

        if(this.direction=='N'){
            this.board[head.x][head.y-1]=head.value;
        }
        if(this.direction=='S'){
            this.board[head.x][head.y+1]=head.value;
        }
        if(this.direction=='E'){
            this.board[head.x+1][head.y]=head.value;
        }
        if(this.direction=='W'){
            this.board[head.x-1][head.y]=head.value;
        }
        this.highest=head.value;
    }

    setDirection(direction){
        this.direction=direction;
    }


    drawBoard(cellSize) {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {

                if (this.board[i][j] == 0) {
                    fill(0);
                }
                if (this.board[i][j] > 0) {
                    fill((this.board[i][j]/this.highest)*255,
                    (this.board[i][j]/this.highest)*255,
                    255);
                }
                rect(i * cellSize, j * cellSize, cellSize, cellSize);

            }
        }

    }




}