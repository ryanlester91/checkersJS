window.onload = function () { 

  //Setting up the gameboard
  var gameBoard = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0]
  ];
  //arrays
  var pieces = [];
  var tiles = [];

  //distance formula
  var dist = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
  }

//Piece object - there are 24 instances of them in a checkers game
  function Piece(element, position) {
    // when jump exist, regular move is not allowed
    // since there is no jump at round 1, all pieces are allowed to move initially
    this.allowedtomove = true;
    //linked DOM element
    this.element = element;
    //positions on gameBoard array in format row, column
    this.position = position;
    //which player's piece is lit
    this.player = '';

    //moves the piece
    this.move = function (tile) {}

    //remove piece and delete it from gameboard
    this.remove = function () { 
    }

    //Tile object
    function Tile(element, position) {
      //linked DOM element
      this.element = element;
      //position in gameboard
      this.position = position;
      //if tile is in range from the piece
      this.inRange = function (piece) {
        /*for (let k of pieces)
          if (k.position[0] == this.position[0] && k.position[1] == this.position[1]) return 'wrong';
        if (!piece.king && piece.player == 1 && this.position[0] < piece.position[0]) return 'wrong';
        if (!piece.king && piece.player == 2 && this.position[0] > piece.position[0]) return 'wrong';
        if (dist(this.position[0], this.position[1], piece.position[0], piece.position[1]) == Math.sqrt(2)) {
          //regular move
          return 'regular';
        } else if (dist(this.position[0], this.position[1], piece.position[0], piece.position[1]) == 2 * Math.sqrt(2)) {
          //jump move
          return 'jump';
        }*/
      };
    }

    //Board object - controls logistics of game
  var Board = {
    board: gameBoard,
    score: {
      player1: 0,
      player2: 0
    },
    playerTurn: 1,
    tilesElement: $('div.tiles'),

    //initialize the 8x8 board
    initialize: function() {
      var countPieces = 0;
      var countTiles = 0;
      for (let row in this.board) { //row is the index
        for (let column in this.board[row]) { //column is the index
          //whole set of if statements control where the tiles and pieces should be placed on the board
          if (row % 2 == 1) {
            if (column % 2 == 0) {
              countTiles = this.tileRender(row, column, countTiles)
            }
          } else {
            if (column % 2 == 1) {
              countTiles = this.tileRender(row, column, countTiles)
            }
          }
          if (this.board[row][column] == 1) {
            countPieces = this.playerPiecesRender(1, row, column, countPieces)
          } else if (this.board[row][column] == 2) {
            countPieces = this.playerPiecesRender(2, row, column, countPieces)
          }
        }
      }
    },

    //initialize function for Board
    Board.initialize();

    //reset game when clear button is pressed
  $('#cleargame').on("click", function () {
    Board.clear();
  });
  }
} }

//connect player 1 pieces to "1"s & player 2 pieces to "2"s
//how to generate red-black 8x8 tile pattern?