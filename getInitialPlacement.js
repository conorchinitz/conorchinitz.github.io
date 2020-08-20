function getInitialPlacement(string) {
  let placementStartIndex = getIndex(string, "PlacePawn", 9, 10);

  let placementEndIndex = getIndex(string, "(", 1, -1);

  let placement = (string.substring(placementStartIndex, placementEndIndex));
  return placement;
}
