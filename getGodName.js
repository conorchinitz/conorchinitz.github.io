function getGodName(string) {
    let godNameStartIndex = getIndex(string, "=", 1, 2);

    let godNameEndIndex = getIndex(string, "(", 1, -1);

    return string.slice(godNameStartIndex, godNameEndIndex);
}
