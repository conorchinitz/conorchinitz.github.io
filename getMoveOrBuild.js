function getMoveOrBuild(string) {
  if (string.includes("Move=")) {
    let moveStartIndex = getIndex(string, "Move", 4, 5);
    let moveEndIndex = getIndex(string, "(", 1, -1);

    let move = (string.substring(moveStartIndex, moveEndIndex));
    move = move.split(">");
    move = move.join("");
    ///may want to replace "move" with 0, to save memory
    // return ["move", move];
    return move;

  } else if (string.includes("Build=")) {
    let buildStartIndex = getIndex(string, "Build", 5, 6);
    let buildEndIndex = getIndex(string, "(", 1, -1);

    let build = (string.substring(buildStartIndex, buildEndIndex));
    build = build.slice(5);
    return build.toUpperCase();
    ///may want to replace "build" with 1, to save memory
    // return ["build", build];

  }
  else {
    console.log("I'm not prepared to deal with that yet...")
  }
}
