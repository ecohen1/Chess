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
