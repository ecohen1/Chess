class GamePieces extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.board.forEach(function(col){
        return (
          <div>
          {
            col.forEach(function(piece){
              if (piece) {
                return <img src="./img/piece.jpg" class="piece"/>
              } else {
                return <img src="./img/piece.jpg" class="no-piece"/>
              }
            })
          }
          </div>
        )
      })
      )
  }
}
