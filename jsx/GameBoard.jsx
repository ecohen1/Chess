class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.props.game.board
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

    this.setState(this.props.board);
  }

  render(){
    return (
      <div>
        <GamePieces board={this.state.board} />
        <form onSubmit={this.actionHandler}>
          <input type="text" id="pieceX"/>
          <input type="text" id="pieceY"/>
          <input type="text" id="pieceNewY"/>
          <input type="text" id="pieceNewY"/>
          <input type="text" id="actionType"/>
          <button type="submit">Go!</button>
        </form>
      </div>
    )
  }
}
