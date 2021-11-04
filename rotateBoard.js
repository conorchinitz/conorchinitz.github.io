function rotate(coordinate, rotation, x_size, y_size){
  // For the rotation parameter: 90, 180, or 270
  // Rotations are clockwise
  let rotated = [];
  if (rotation == 90 || rotation == 270){
    rotated = swap(coordinate);
  }
  else {
    rotated[0] = letterToNumber(coordinate[0]);
    rotated[1] = parseInt(coordinate[1]);
  }

  if (rotation  == 90) {
    rotated[1] = reflecty(rotated, x_size);
  }
  if (rotation  == 180) {
    rotated[0] = reflectx(rotated, x_size);
    rotated[1] = reflecty(rotated, y_size);
  }
  if (rotation  == 270) {
    rotated[0] = reflectx(rotated, y_size);
  }

  rotated[0] = numberToLetter(rotated[0]);
  rotated = rotated.join('');
  return rotated;
}

// HELPER FUNCTIONS

function swap(array){
  let temp = [];
  temp[0] = parseInt(array[1]);
  temp[1] = letterToNumber(array[0]);
  return temp;
}

function letterToNumber(letter){
  return '_abcde'.indexOf(letter);
}

function numberToLetter(number){
  return '_abcde'[number];
}

function reflectx(array, size){
  let temp = 0;
  temp = array[0] * (-1);
  temp = temp + size + 1;
  return temp;
}

function reflecty(array, size){
  let temp = 0;
  temp = array[1] * (-1);
  temp = temp + size + 1;
  return temp;
}
