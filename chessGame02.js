var chessGame = (function() {
  //
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
    return board;
    notify();
  };
//if not correct turn or plan staps piece to original location
  function notify() {
    for (var i = 0; i < listener.length; i++) {
    var cb = listener[i];
    cb(board);
    }
  };

  var player = "white";
//controls the movement & rules of each piece
  function move(piece, newr, newc) {
      // get old position
      var oldr = null;
      var oldc = null;
      for (var r = 0; r < board.length; r++) {
        for (var c = 0; c < board[r].length; c++) {
          if (board[r][c] === piece) {
            oldr = r;
            oldc = c;
          }
        }
      }
      console.log("old position " + piece + " " + oldr + " " + oldc);
      console.log("new position " + piece + " " + newr + " " + newc);
      console.log(Math.abs(newr - oldr) + " row " + Math.abs(newc - oldc) + " coloumn " );

      // check if move is legal

      if (!legalMove(piece, oldr, oldc, newr, newc)) {
        notify();
        return;
      }

  function legalMove(piece, oldr, oldc, newr, newc) {
    if (piece.indexOf(player) === -1) {
      return false;
    }
    var pieceType = null;
    if (piece.indexOf("Pawn") >= 0) {
      pieceType = "Pawn";
    }
    if (piece.indexOf("Rook") >= 0) {
      pieceType = "Rook";
    }
    if (piece.indexOf("Bishop") >= 0) {
      pieceType = "Bishop";
    }
    if (piece.indexOf("Knight") >= 0) {
      pieceType = "Knight";
    }
    if (piece.indexOf("Queen") >= 0) {
      pieceType = "Queen";
    }
    if (piece.indexOf("King") >= 0) {
      pieceType = "King";
    }

    if (pieceType === "Pawn") {
      //pawn
      if (Math.abs(newc - oldc) === 0) {
        // we stay in the same column
        console.log("--Pawn Move Played--");
        // allow only one step
        if (Math.abs(newr - oldr) === 1) {
          return true;
        }
      }
      else if (Math.abs(newc - oldc) === 1) {
        // we move only one column
        console.log("capture was made");
        if (Math.abs(newr - oldr) === 1) {
          // we only go one down or up
          return true;
        }
      }
    }
    else if (pieceType === "Rook") {
      if (Math.abs(newr - oldr) === 0 && Math.abs(newc - oldc) || Math.abs(newr - oldr) && Math.abs(newc - oldc) === 0) {
        console.log("--rook Move Played--");
        return true;
      }
    }
    else if (pieceType === "Bishop") {
      if (Math.abs(newr - oldr) === Math.abs(newc - oldc)) {
        console.log("--bishop Move Played--");
        return true;
        }
    }
    else if (pieceType === "Knight") {
      if (Math.abs(newr - oldr) === 2 && Math.abs(newc - oldc) === 1 || Math.abs(newr - oldr) === 1 && Math.abs(newc - oldc) === 2) {
        console.log("--knight Move Played--");
        return true;
      }
    }
    else if (pieceType === "Queen") {
      if (Math.abs(newr - oldr) === Math.abs(newc - oldc) || Math.abs(newr - oldr) === 0 && Math.abs(newc - oldc) || Math.abs(newr - oldr) && Math.abs(newc - oldc) === 0) {
        console.log("--queen Move Played--");
        return true;
        }
    }
    else if (pieceType === "King") {
      if (Math.abs(newr - oldr) === 1 && Math.abs(newc - oldc) === 0 || Math.abs(newr - oldr) === 0 && Math.abs(newc - oldc) === 1 || Math.abs(newr - oldr) === 1 && Math.abs(newc - oldc) === 1) {
        console.log("--king Move Played--");
        return true;
      }
    }
    return false;
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
  //black and white pices must take alternating turns
      if (player === "white") {
        player = "black";
        console.log("I am 2nd player");
      }

      else {
        player = "white";
        console.log("I am 1st player");
      }
};
/*
function capturePiece(piece, newr, newc, oldr, oldc) {
  if (piece.indexOf("white") === piece.indexOf("black")) {
    piece.indexOf("black") = null;
  }
  else{
    piece.indexOf("white") = null;
  }
  notify();
  return;
}
*/
  return {
    addListener: addListener,
    resetBoard: resetBoard,
    move: move,
    //capturePiece: capturePiece
  };
})();
