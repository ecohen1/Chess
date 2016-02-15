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
