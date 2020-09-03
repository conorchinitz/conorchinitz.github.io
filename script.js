window.onload = function() {
  document.querySelectorAll("textarea").forEach(element => element.value = "");
}

let userLogArray;
let player1Power = "";
let player2Power = "";
let playerPowersArray = [];
let placePawnArray = [];
let moveAndBuildArray = [];
let winner = "";

// Select the box where the user pastes their log file
userTextArea = document.querySelector("#user_text_area");

let userLog;

// Select the submit button
const submitButton = document.querySelector("#submit_button");

// Run getPowerName on the contents of userTextArea, output the result in the other box
submitButton.addEventListener("click", event => {
  playerPowersArray = [];
  placePawnArray = [];
  moveAndBuildArray = [];
  winner = "";
  powerToPlay = "";
  userLog = userTextArea.value;
  userLogArray = userLog.split(String.fromCharCode(10));
  userLogArray.forEach(element => {
    // debugger;
    if (element.includes("Player")) {
      playerPowersArray.push(getPowerName(element));
      player1Power = playerPowersArray[0];
      player2Power = playerPowersArray[1];
      powerToPlay = player1Power;
    } else if (element.includes("PlacePawn")) {
      placePawnArray.push([powerToPlay, getInitialPlacement(element)]);
    } else if (element.includes("Move=") || element.includes("Build=")) {
      moveAndBuildArray.push([powerToPlay, getMoveOrBuild(element)]);
    }
    powerToPlay = getPowerToPlay(element);
  })
  userLogArray.forEach(element => {
    if (element.includes("won")) {
      winner = getWinner(element);
    }
  })
  document.getElementById("cleaned_log").value =
  `Player 1 is ${playerPowersArray[0]}.\n` +
  `Player 2 is ${playerPowersArray[1]}.\n` +
  "\n" +
  "***Initial Placement***\n\n" +
  `${placePawnArray.join("\n")}\n` +
  "\n" +
  "***Moving and Building***\n\n" +
  `${moveAndBuildArray.join("\n" + "\n")}\n` +
  "\n" +
  `${winner} wins!`;
});
