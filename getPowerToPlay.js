function getPowerToPlay(string) {
  if (string.includes(player1Power)) {
    // console.log("Power to play is " + player1Power);
    return player1Power;
  } else if (string.includes(player2Power)) {
    // console.log("Power to play is " + player2Power);
    return player2Power;
  } else if (string.includes("Game will be logged in")) {
    return player1Power;
  } else {
    // console.log(`Power to play is still ${PowerToPlay}`);
    return powerToPlay;
  }
}
