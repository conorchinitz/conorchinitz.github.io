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
  // Given that I define all these variables here, do I really need to also define them globally on lines 5-11? Probably not...
  playerPowersArray = [];
  player1Power = "";
  player2Power = "";
  placePawnArray = [];
  moveAndBuildArray = [];
  winner = "";
  powerToPlay = "";
  moveNumber = 0;
  userLog = userTextArea.value;
  userLogArray = userLog.split(String.fromCharCode(10));

  //This section of code loops through every single line in the log, even though it could stop after finding the second player power. Maybe use a while loop to stop it when playerPowersArray has a length of 2?
  userLogArray.forEach(element => {
    if (element.includes("Player")) {
      playerPowersArray.push(getPowerName(element));
      player1Power = playerPowersArray[0];
      player2Power = playerPowersArray[1];
      powerToPlay = player1Power;
    }
  })

  // Extract all the coordinates for placement, moving, and building from the log file.
  userLogArray.forEach(element => {
    if (element.includes("PlacePawn")) {
      placePawnArray.push([powerToPlay, getInitialPlacement(element)]);
    } else if (element.includes("Move=")) {
      if (powerToPlay === player1Power) {
        moveNumber =+ 1;
        moveAndBuildArray.push([moveNumber + "."]);
      }
      moveAndBuildArray.push([powerToPlay, getMove(element)]);
    }
    else if (element.includes("Build=")) {
      moveAndBuildArray.push([powerToPlay, getBuild(element)]);
    }
    powerToPlay = getPowerToPlay(element);
  })

  userLogArray.forEach(element => {
    if (element.includes("won")) {
      winner = getWinner(element);
    }
  })

  // Combine moves and builds into a single unit.
  placePawnArray = mergeLines(placePawnArray);
  moveAndBuildArray = mergeLines(moveAndBuildArray);

  ///These functions are defined in formatLines.js
  placePawnArray = addColonAfterPowerName(placePawnArray);
  moveAndBuildArray = addColonAfterPowerName(moveAndBuildArray);

  placePawnArray = addCommaAfterFirstWorkerPlacement(placePawnArray);
  moveAndBuildArray = addCommaAfterFirstWorkerPlacement(moveAndBuildArray);

  placePawnArray = addPeriodAtEndOfLine(placePawnArray);
  moveAndBuildArray = addPeriodAtEndOfLine(moveAndBuildArray);

  ///

  for (i = 0; i < placePawnArray.length; i++) {
  placePawnArray[i] = placePawnArray[i].join(" ");
  };

  for (i = 0; i < moveAndBuildArray.length; i++) {
  moveAndBuildArray[i] = moveAndBuildArray[i].join(" ");
  };

  // Display the results of all our hard work in the output textbox.

  document.getElementById("cleaned_log").value =
  "--- Power Selection ---\n\n" +
  `Player 1 is ${playerPowersArray[0]}.\n` +
  `Player 2 is ${playerPowersArray[1]}.\n` +
  "\n" +
  "--- Initial Placement ---\n\n" +
  `${placePawnArray.join("\n")}\n` +
  "\n" +
  "--- Moving and Building ---\n\n" +
  `${moveAndBuildArray.join("\n" + "\n")}\n` +
  "\n" +
  `${winner} wins!`;
});
