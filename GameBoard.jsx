var GameBoard = ReactDOM.createClass({

  getInitialState: function(){
    return {board: game.board}
  }

  actionHandler: function(){
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
  },

  render: function(){
    return
      <div>
        <GamePieces board={this.state.board}/>
        <form onSubmit="actionHandler">
          <input type="text" id="pieceX">
          <input type="text" id="pieceY">
          <input type="text" id="pieceNewY">
          <input type="text" id="pieceNewY">
          <input type="text" id="actionType">
          <button type="submit">Go!</button>
        </form>
      </div>
  }
});
