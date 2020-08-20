//initialize game

let player1God = undefined;
let player2God = undefined;

let godToPlay = undefined;

let move = undefined;
let build = undefined;

let currentLine = undefined;

///

function getIndex(string, keyword, slice_length, i_modifier) {
  for (i = 0; i < string.length; i++) {
    if (string.slice(i, i + slice_length) === keyword) {
      return i + i_modifier;
    }
  }
}

///

function getGodName(string) {
  let godNameStartIndex = getIndex(string, '=', 1, 2);

  let godNameEndIndex = getIndex(string, '(', 1, -1);

  return string.slice(godNameStartIndex, godNameEndIndex);
}

///

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

///

function getInitialPlacement(string) {
  let placementStartIndex = getIndex(string, "PlacePawn", 9, 10);

  let placementEndIndex = getIndex(string, "(", 1, -1);

  let placement = (string.substring(placementStartIndex, placementEndIndex));
  return placement;
}

///

function getMoveOrBuild(string) {
  if (string.includes("Move=")) {
    let moveStartIndex = getIndex(string, "Move", 4, 5);
    let moveEndIndex = getIndex(string, "(", 1, -1);

    move = (string.substring(moveStartIndex, moveEndIndex));
    return move;

  } else if (string.includes("Build=")) {
    let buildStartIndex = getIndex(string, "Build", 5, 6);
    let buildEndIndex = getIndex(string, "(", 1, -1);

    build = (string.substring(buildStartIndex, buildEndIndex));
    return build;

  }
  else {
    console.log("I'm not prepared to deal with that yet...")
  }
}

///

function writeFormattedMoveAndBuild() {
  console.log(`${godToPlay}: ${move}, ${build}.`);
}

/// Ok, time to try these out on actual text from a game log.

/// GET GODS

currentLine = '---Player 1 = Proteus (Human)-------------------';
player1God = getGodName(currentLine);
console.log(`Player 1's god is ${player1God} (blue).`);

currentLine = '---Player 2 = Aphrodite (CPU4)------------------';
player2God = getGodName(currentLine);
console.log(`Player 2's god is ${player2God} (red).`);

godToPlay = player1God;
console.log(`It's now ${godToPlay}'s turn.`);

/// INITIAL PLACEMENT

currentLine = 'Human - PlacePawn=a1 (Black (Proteus)  to add a Worker)';
console.log(
  `${godToPlay} places a worker on ${getInitialPlacement(currentLine)}.`
);
godToPlay = getGodToPlay(currentLine);

currentLine = 'Human - PlacePawn=e5 (Black (Proteus)  to add a Worker)';
console.log(
  `${godToPlay} places a worker on ${getInitialPlacement(currentLine)}.`
);
godToPlay = getGodToPlay(currentLine);

currentLine = 'Human - PlacePawn=d2 (Red (Aphrodite)  to add a Worker)';
console.log(
  `${godToPlay} places a worker on ${getInitialPlacement(currentLine)}.`
);
godToPlay = getGodToPlay(currentLine);

currentLine = 'AiAiM-v.118 - PlacePawn=c2 (Red (Aphrodite)  to add a Worker)';
console.log(
  `${godToPlay} places a worker on ${getInitialPlacement(currentLine)}.`
);
godToPlay = getGodToPlay(currentLine);

currentLine = 'AiAiM-v.118 - PlacePawn=d3 (Black (Proteus)  to move)';
console.log(
  `${godToPlay} places a worker on ${getInitialPlacement(currentLine)}.`
);
godToPlay = getGodToPlay(currentLine);

/// TURN ONE - PROTEUS

currentLine =
  'Human - Move=d2->c3&e5=>d2 (Black (Proteus)  to build a block or dome)';
getMoveOrBuild(currentLine);
console.log(`${godToPlay} moves ${move}.`);
godToPlay = getGodToPlay(currentLine);

currentLine = 'Human - Build=Tile-b4 (Red (Aphrodite)  to move)';
getMoveOrBuild(currentLine);
console.log(`${godToPlay} builds ${build}.`);
godToPlay = getGodToPlay(currentLine);
