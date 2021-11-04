/* Should I split this up into two functions?
getMove and getBuild
*/

function getMove(string)
{
  //Get rid of these magic numbers. (Use regex instead?)
  let moveStartIndex = getIndex(string, "Move", 4, 5);
  let moveEndIndex = getIndex(string, "(", 1, -1);

  let move = (string.substring(moveStartIndex, moveEndIndex));
  move = move.split(">");
  move = move.join("");
  return move;
}

function getMoveOrBuild(string) {
  //Get rid of these magic numbers. (Use regex instead?)
  let buildStartIndex = getIndex(string, "Build", 5, 6);
  let buildEndIndex = getIndex(string, "(", 1, -1);

  let build = (string.substring(buildStartIndex, buildEndIndex));
  // Magic number
  build = build.slice(5);
  return build.toUpperCase();
}
