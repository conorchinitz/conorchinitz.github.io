function getGodToPlay(string) {
  if (string.includes(player1God)) {
    // console.log("god to play is " + player1God);
    return player1God;
  } else if (string.includes(player2God)) {
    // console.log("god to play is " + player2God);
    return player2God;
  } else {
    // console.log(`god to play is still ${godToPlay}`);
    return godToPlay;
  }
}
