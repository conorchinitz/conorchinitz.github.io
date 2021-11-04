function addColonAfterPowerName(array) {
  array.forEach(line => {
    // This if statement is a bad way to handle this. Implement with a better approach later.
    if (typeof line[0] == "string") {
      line[0] = line[0].concat(":");
    }
  });
  return array;
}

function addCommaAfterFirstWorkerPlacement(array) {
  array.forEach(line => {
    if (line[1]) {
      line[1] = line[1].concat(",");
    }
  })
  return array;
}

/* This causes an unecessary comma in the last line of the game--when someone wins--because they move, but don't build. Maybe this function should put a comma and a space at the beginning of the element at index [2] instead?

Maybe something like >> line[2] = ", " + line[2]; <<

Yup, that works, at least insofar as it correctly prepends the ", " string.

Will need to check to make sure that line[2] exists, right?

So like this:
if line[2] {
  line[2] = ", " + line[2];
}
*/

function addCommaAfterMove(array) {
  array.forEach(line => {
    line[1] = line[1].concat(",");
  })
  return array;
}

function addPeriodAtEndOfLine(array) {
  array.forEach(line => {
      // This if statement is a bad way to handle this. Implement with a better approach later.
      if (line[line.length - 1]) {
        line[line.length - 1] = line[line.length - 1] + ".";
      }
  })
  return array;
}
