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
