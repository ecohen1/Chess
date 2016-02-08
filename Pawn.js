class Pawn extends Piece {

  constructor(x,y,color){
    super(x,y,color);
    this.moves = 0;
  }

  move(x,y) {
    //trigger errors
    if (x > 7 || y > 7){
      alert('out of bounds');
    } else if (x != this.x) {
      alert('cant move sideways');
    } else if ((y > this.y + 1) && !(y == this.y + 2 && this.moves === 0)) {
      alert('cant move that far forward');
    } else if (board[x][y]) {
      alert('there is a piece in the way');
    } else {
      this.x = x;
      this.y = y;
      this.moves += 1;
    }
  }

  attack(x,y) {
    if (x > 7 || y > 7) {
      alert('out of bounds');
    } else if (!(x == this.x + 1 && y == this.y + 1)) {
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
