function getWinner(string) {
    let count = 0;
    let winnerStartIndex = undefined;
    for (i = 0; i < string.length; i++) {
      if (string[i] === "(") {
        count++;
        if (count === 2) {
          winnerStartIndex = i + 1;
          break
        }
      }
    }
    let winnerEndIndex = getIndex(string, "won", 3, -2);

    return string.slice(winnerStartIndex, winnerEndIndex);
}
