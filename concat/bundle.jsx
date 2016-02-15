class Piece {
  constructor(x,y,color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

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
    this.color = 'white';
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
    this.color = 'black';
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

class Game {

  constructor() {
    //set turn counter
    this.turn = 0;

    //set taken pieces
    this.takenPieces = [];

    //create empty array of pieces
    this.board = [[],[],[],[],[],[],[],[]];

    //make pawns
    for (var i=0;i<8;i++){
      this.board[i][1] = new WhitePawn(i,1);
      this.board[i][6] = new BlackPawn(i,6);
    }

    // //make castles
    // for (i=0;i<8;i+=7){
    //   this.board[i][0] = new Castle(i,0);
    //   this.board[i][7] = new Castle(i,7);
    // }
    //
    // //make knights
    // for (i=1;i<7;i+=5){
    //   this.board[i][0] = new Knight(i,0);
    //   this.board[i][7] = new Knight(i,7);
    // }
    //
    // //make bishops
    // for (i=2;i<6;i+=3){
    //   this.board[i][0] = new Bishop(i,0);
    //   this.board[i][7] = new Bishop(i,7);
    // }
    //
    // //make kings
    // this.board[3][0] = new King(3,0);
    // this.board[3][7] = new King(3,7);
    // //make queens
    // this.board[4][0] = new Queen(4,0);
    // this.board[4][7] = new Queen(4,7);

  }
}

var game = new Game();

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: game.board
    }
  }

  actionHandler(){
    var X = $("#pieceX").val();
    var Y = $("#pieceY").val();
    var selectedPiece = game.board[X][Y];

    var newX = $("#pieceNewX").val();
    var newY = $("#pieceNewY").val();
    var actionType = $("#actionType").val();

    if (actionType == "move") {
      selectedPiece.move(newX,newY);
    } else if (actionType = "attack") {
      selectedPiece.attack(newX,newY);
    } else {
      alert("invalid action type");
    }

    this.setState(game.board)
  }

  render(){
    return
      <div>
        <form onSubmit="actionHandler">
          <input type="text" id="pieceX"/>
          <input type="text" id="pieceY"/>
          <input type="text" id="pieceNewY"/>
          <input type="text" id="pieceNewY"/>
          <input type="text" id="actionType"/>
          <button type="submit">Go!</button>
        </form>
      </div>
  }
}

class GamePieces extends React.Component {
  render() {
    return (
      this.props.board.each(function(col){
        return (
          <div>
          {
            col.each(function(piece){
              if (piece) {
                return <img src="./piece.jpg" class="piece"/>
              } else {
                return <img src="./piece.jpg" class="no-piece"/>
              }
            })
          }
          </div>
        )
      })
      )
  }
}

ReactDOM.render(<GameBoard game={game}/>, document.getElementById("container"));
