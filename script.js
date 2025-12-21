
let game;
let gameSize = 50;
let cellSize = 500 / gameSize;

function setup() {
   createCanvas(500, 500);
   frameRate(5);
   background(220);
   game = new Game(gameSize);
}

function draw() {

   game.update();
   if (game.getIsGameOver()) {
      background(255);
      text("Maa Chud Gayi!!!", 200, 250);
      return;
   }
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