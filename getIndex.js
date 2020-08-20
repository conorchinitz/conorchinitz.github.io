function getIndex(string, keyword, slice_length, i_modifier) {
  for (i = 0; i < string.length; i++) {
    if (string.slice(i, i + slice_length) === keyword) {
      return(i + i_modifier);
    }
  }
}
