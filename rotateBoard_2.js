// This version is more compact, but more obtuse.
// It doesn't simulate rotations by reflecting across axes.
// Instead it uses math tricks on the coordinates to convert them directly in one step.

function rotate(coordinate, rotation, x_size, y_size){
  // For the rotation parameter: 90, 180, or 270
  // Rotations are clockwise
  let rotated = [];

  if (rotation  == 90) {
    rotated[0] = numberToLetter(parseInt(coordinate[1]));
    rotated[1] = x_size + 1 - letterToNumber(coordinate[0]);
  }
  if (rotation  == 180) {
    rotated[0] = '_abcde'[(x_size + 1 - '_abcde'.indexOf(coordinate[0]))];
    rotated[1] = y_size + 1 - coordinate[1];
  }
  if (rotation  == 270) {
    rotated[0] = numberToLetter(y_size + 1 - coordinate[1]);
    rotated[1] = letterToNumber(coordinate[0]);
  }

  return rotated.join('');
}

// HELPER FUNCTIONS

function letterToNumber(letter){
  return 'abcde'.indexOf(letter) + 1;
}

function numberToLetter(number){
  return 'abcde'[number - 1];
}
