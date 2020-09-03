function getPowerName(string) {
    let powerNameStartIndex = getIndex(string, "=", 1, 2);

    let powerNameEndIndex = getIndex(string, "(", 1, -1);

    return string.slice(powerNameStartIndex, powerNameEndIndex);
}
