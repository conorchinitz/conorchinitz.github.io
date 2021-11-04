
// The 'null' at the beginning of each array makes it more intuitive to look up a square.
// For example, the square b4 is located at boardBlocks.b[4].
// Without the 'null', you'd have to look at boardBlocks.b[3] in order to find the square b4, and that would be confusing.
let boardBlocks = {
  'a': [null, 0, 0, 0, 0, 0],
  'b': [null, 0, 0, 0, 0, 0],
  'c': [null, 0, 0, 0, 0, 0],
  'd': [null, 0, 0, 0, 0, 0],
  'e': [null, 0, 0, 0, 0, 0],
};

// this will also keep track of tokens
let boardWorkers = {
  'a': [null, 0, 0, 0, 0, 0],
  'b': [null, 0, 0, 0, 0, 0],
  'c': [null, 0, 0, 0, 0, 0],
  'd': [null, 0, 0, 0, 0, 0],
  'e': [null, 0, 0, 0, 0, 0],
};

// the 'square' argument should be a string
function isOccupied(square){
  file = square[0];
  rank = square[1];
  if (boardBlocks[file][rank] == 4 || boardWorkers[file][rank] != 0){
    return true;
  }
  return false;
}
