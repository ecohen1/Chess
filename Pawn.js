import Piece from "Piece"

class Pawn extends Piece {

  constructor(x,y,color){
    super(x,y,color);
    this.moves = 0;
  }

  checkMoveBounds(){
    return true;
  }

  checkAttackBounds(){
    return true;
  }

  move(x,y) {
    //trigger errors
    if (x < 0 || x > 7 || y < 0 || y > 7) {
      alert('out of bounds');
    } else if (x != this.x) {
      alert('cant move sideways');
    } else if (checkMoveBounds()) {
      alert('cant move that far forward');
    } else if (board[x][y] || (x == this.x && y == this.y)) {
      alert('this space is occupied');
    } else {
      this.x = x;
      this.y = y;
      this.moves += 1;
    }
  }

  attack(x,y) {
    if (x < 0 || x > 7 || y < 0 || y > 7) {
      alert('out of bounds');
    } else if (checkAttackBounds()) {
      alert('out of range');
    } else if (!board[x][y]){
      alert('no piece to attack');
    } else if (board[x][y].color == this.color) {
      alert('cant attack your own piece');
    } else {
      var opponentPiece = board[x][y];
      game.board.takenPieces[board.numTakenPieces] = opponentPiece;
      game.board.numTakenPieces += 1;

      board[x][y] = this;
    }
  }

}

class WhitePawn extends Pawn {

  constructor(x,y,color) {
    super(x,y,color);
  }

  checkMoveBounds() {
    if ((y > this.y + 1) && !(y == this.y + 2 && this.moves === 0)) {
      return true;
    } else {
      return false;
    }
  }

  checkAttackBounds() {
    if ((x == this.x + 1 || x == this.x - 1) && y == this.y + 1) {
      return false;
    } else {
      return true;
    }
  }
}

class BlackPawn extends Pawn {

  constructor(x,y,color) {
    super(x,y,color);
  }

  checkMoveBounds() {
    if ((y > this.y - 1) && !(y == this.y - 2 && this.moves === 0)) {
      return true;
    } else {
      return false;
    }
  }

  checkAttackBounds() {
    if ((x == this.x + 1 || x == this.x - 1) && y == this.y - 1) {
      return false;
    } else {
      return true;
    }
  }
}

console.log('Pawn loaded');
