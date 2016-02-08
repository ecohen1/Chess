var GameBoard = ReactDOM.createClass({
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


  },

  render: function(){
    return
      <div>
        <GamePieces board={game.board}/>
        <form onSubmit="actionHandler">
          <input type="text" id="pieceX">
          <input type="text" id="pieceY">
          <input type="text" id="pieceNewY">
          <input type="text" id="pieceNewY">
          <input type="text" id="actionType">
        </form>
      </div>
  }
});
