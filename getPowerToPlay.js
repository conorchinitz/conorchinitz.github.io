// The log files list the power to play at the end of each line. Ex: if a certain line logs player 2's build, then at the end of that line it will say "player 1 to play."

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
