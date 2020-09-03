function mergeLines(array) {
  let mergedLines = [];
  mergedLines.push(array[0]);
  for (i = 1; i < array.length; i++) {
    if (array[i][0] === array[i-1][0]) {
      mergedLines[(mergedLines.length) - 1].push(array[i][1]);
    }
    else {
      mergedLines.push(array[i]);
    }
  }
  return mergedLines;
}
