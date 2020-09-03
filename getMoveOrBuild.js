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
    return build.toUpperCase();

  }
  else {
    console.log("I'm not prepared to deal with that yet...")
  }
}
