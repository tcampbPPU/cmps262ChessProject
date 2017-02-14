var chessGame = (function() {
  console.log("initializing chessGame.js");
  var board = [[null, null, null, null, null, null, null, null],
               [null, null, null, null, null, null, null, null],
               [null, null, null, null, null, null, null, null],
               [null, null, null, null, null, null, null, null],
               [null, null, null, null, null, null, null, null],
               [null, null, null, null, null, null, null, null],
               [null, null, null, null, null, null, null, null],
               [null, null, null, null, null, null, null, null]];

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

  return {
    addListener: addListener,
    resetBoard: resetBoard
  };
})();



/*
var player = "X";

function playMove(id) {
  console.log("I am playing move " + id );
  var row = parseInt(id[1], 10);
  var col = parseInt(id[3], 10);
  if (grid[row][col] === null) {
    grid[row][col] = player;
    if (player === "X") {
      player = "O";
    }
    else {
      player = "X";
    }
  for (var i = 0; i < listener.length; i++) {
    var cb = listener[i];
    cb(grid);
    }
  }
};
*/
