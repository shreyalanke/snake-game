
let game;
let gameSize = 25;
let cellSize = 500 / gameSize;

function setup() {
   createCanvas(500, 500);
   frameRate(1);
   background(220);
   game = new Game(gameSize);
}

function draw() {
   game.update();
   game.drawBoard(cellSize);
}

function keyPressed() {
   if (key == RIGHT_ARROW) {
      game.setDirection('E')
   }
   if (key == LEFT_ARROW) {
      game.setDirection('W')
   }
   if (key == UP_ARROW) {
      game.setDirection('N')
   }
   if (key == DOWN_ARROW) {
      game.setDirection('S')
   }

}