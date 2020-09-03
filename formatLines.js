function addColonAfterPowerName(array) {
  array.forEach(line => {
    line[0] = line[0].concat(":");
  });
  return array;
}

function addPeriodAtEndOfLine(array) {
  array.forEach(line =>{
      line[line.length-1] = line[line.length-1].concat(".");
  })
  return array;
}
