function findLongestWordLength(str) {
  let x = str.split(" ");
  let y = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i].length > y) {
      y = x[i].length;
    }
  }
  return y;
}