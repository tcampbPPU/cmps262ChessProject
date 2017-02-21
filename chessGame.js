var chessGame = (function() {
  console.log("initializing chessGame.js");
  var board = [["whiteRookOne", "whiteBishopOne", "whiteKnightOne", "whiteKing", "whiteQueen", "whiteKnightTwo", "whiteBishopTwo", "whiteRookTwo"],
               ["whitePawn1", "whitePawn2", "whitePawn3", "whitePawn4", "whitePawn5", "whitePawn6", "whitePawn7", "whitePawn8"],
               [null, null, null, null, null, null, null, null],
               [null, null, null, null, null, null, null, null],
               [null, null, null, null, null, null, null, null],
               [null, null, null, null, null, null, null, null],
               ["blackPawn1", "blackPawn2", "blackPawn3", "blackPawn4", "blackPawn5", "blackPawn6", "blackPawn7", "blackPawn8"],
               ["blackRookOne", "blackBishopOne", "blackKnightOne", "blackKing", "blackQueen", "blackKnightTwo", "blackBishopTwo", "blackRookTwo"]];

  var listener = [];

  function addListener(cb) {
    listener.push(cb);
  };

  function resetBoard() {
    for (var r = 0; r < 8; r++) {
      for (var c = 0; c < 8; c++) {
        board[r][c] = null
      }
    }
    notify();
  };

  function notify() {
    for (var i = 0; i < listener.length; i++) {
    var cb = listener[i];
    cb(board);
    }
  };
  var player = "white";

  function move(piece, newr, newc) {
    console.log(piece + " " + newr + " " + newc);
    if (piece.indexOf(player) === -1) {
      notify();
      return;
    }
    // delete the piece from the old position
    for (var r = 0; r < board.length; r++) {
      for (var c = 0; c < board[r].length; c++) {
        if (board[r][c] === piece) {
          board[r][c] = null;
        }
      }
    }
    board[newr][newc] = piece;
    notify();
    if (player === "white") {
      player = "black";
    }
    else {
      player = "white";
    }

    //game rules
  };
  //black and white pices must take alternating turns


function pawnMoves() {
    //Pawn 2 for first move
    // 1 move up
    //attack from angle
  var attackLeftUp = pawnMoves(1, -1);
  var attackRightUp = pawnMoves(1, 1);

  var attackLeftDown = pawnMoves(-1, 1);
  var attackRightDown = pawnMoves(-1, -1);

  var firstUp = pawnMoves(2, 0);
  var firstDown = pawnMoves(2, 0);

  var up = pawnMoves(1, 0);
  var down = pawnMoves(-1, 0);

  var blocked = alert("Cannot move to that square");

  var pieceSelected = piece.indexOf(player);

    if (pieceSelected === "whitePawn1") {
      (move(down) ) {
        blocked;
      } else {
        piece !== null {
          move(down);
      }
    }
    return move;

    //console.log(piece.indexOf(player));
};

function rookMoves() {
  //any where on current row / coloumn
  //front and back
  var vertical = rookMoves();
  var horizontal = rookMoves();

  //console.log(piece.indexOf(player));
};

function knightMoves() {
  //up / back 2 && over 1
  //up / back 1 && over 2
  var up2Left = knightMoves(2, -1)
  var up2Right = knightMoves(2, 1)
  var down2Left = knightMoves(-2, -1)
  var down2Right = knightMoves(-2, 1)

  var up1Left = knightMoves(1, -1)
  var up1Right = knightMoves(1, 1)
  var down1Left = knightMoves(-1, -1)
  var down1Right = knightMoves(-1, 1)

  //console.log(piece.indexOf(player));
};

function bishopMoves() {
  //any where diagonally on current row / coloumn
  //front and back
  var diagonal = bishopMoves();

  //red // if on black change
  //console.log(piece.indexOf(player));
  };

  function kingMoves() {
  //any where in any dirrection from curent position
  //front and back
  var up = kingMoves(1, 0)
  var down = kingMoves(-1, 0)
  var leftside = kingMoves(0, -1)
  var rightside = kingMoves(0, 1)
  var rUpAngle = kingMoves(1, 1)
  var lUpAngle = kingMoves(1, -1)
  var rDownAngle = kingMoves(-1, 1)
  var lDownAngle = kingMoves(-1, -1);
  //console.log(piece.indexOf(player));
};

function queenMoves() {
  pawnMoves();
  rookMoves();
  knightMoves();
  bishopMoves();
  kingMoves();

// allowed to move on all other functions [pawnMoves, rookMoves, knightMoves, bishopMoves, kingMoves]
//console.log(piece.indexOf(player));
};


  return {
    addListener: addListener,
    resetBoard: resetBoard,
    move: move
    //pawnMoves: pawnMoves,
    //rookMoves: rookMoves,
    //knightMoves: knightMoves,
    //bishopMoves: bishopMoves,
    //kingMoves: kingMoves,
    //queenMoves: queenMoves
  };
})();
