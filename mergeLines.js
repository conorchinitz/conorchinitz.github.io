function mergeLines(array) {
  let mergedLines = [];
  mergedLines.push(array[0]);
  for (i = 1; i < array.length; i++) {
    // We're creating an array of arrays.
    // For each subarray of the array passed in, if powerToPlay is the same as it was in the previous subarray, then add the coordinates to the previous subarray. Otherwise, add it to a new subarray.
    if (array[i][0] === array[i-1][0]) {
      mergedLines[(mergedLines.length) - 1].push(array[i][1]);
    }
    else {
      mergedLines.push(array[i]);
    }
  }
  return mergedLines;
}
