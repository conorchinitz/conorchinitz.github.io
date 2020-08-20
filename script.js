window.onload = function() {
  document.querySelectorAll("textarea").forEach(element => element.value = "");
}

let userLogArray;
let playerPowersArray = [];
let placePawnArray = [];
let moveAndBuildArray = [];
let winner = "";

// Select the box where the user pastes their log file
userTextArea = document.querySelector("#user_text_area");

let userLog;

// Select the submit button
const submitButton = document.querySelector("#submit_button");

// Run getGodName on the contents of userTextArea, output the result in the other box
submitButton.addEventListener("click", event => {
  playerPowersArray = [];
  placePawnArray = [];
  moveAndBuildArray = [];
  winner = "";
  userLog = userTextArea.value;
  userLogArray = userLog.split(String.fromCharCode(10));
  userLogArray.forEach(element => {
    if (element.includes("Player")) {
      playerPowersArray.push(getGodName(element));
    } else if (element.includes("PlacePawn")) {
      placePawnArray.push(getInitialPlacement(element));
    } else if (element.includes("Move=") || element.includes("Build=")) {
      moveAndBuildArray.push(getMoveOrBuild(element));
    }
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
  "Initial Placement:\n" +
  `${placePawnArray.join(" \n")}\n` +
  "\n" +
  "Moving and Building:\n" +
  `${moveAndBuildArray.join(" \n")}\n` +
  "\n" +
  `${winner} wins!`;
});
