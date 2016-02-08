var GamePieces = ReactDOM.createClass({
  render: function() {
    return (
      this.props.board.each(function(col){
        return (
          <div>
          {
            col.each(function(piece){
              if (piece) {
                return <img src="./piece.jpg" class="piece" style="display: inline-block">
              } else {
                return <img src="./piece.jpg" class="no-piece" style="display: inline-block">
              }
            });
          }
          </div>
        )
      });
      }
    )

  }
});
