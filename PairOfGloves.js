/*
Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

function numberOfPairs(gloves) {
  // Create an object to store the count of each glove color
  const gloveCount = {};

  // Count the number of each color of gloves
  gloves.forEach((color) => {
    if (gloveCount[color]) {
      gloveCount[color]++;
    } else {
      gloveCount[color] = 1;
    }
  });

  // Calculate the number of pairs for each color
  let pairCount = 0;
  Object.values(gloveCount).forEach((count) => {
    // Calculate the number of pairs for each color
    pairCount += Math.floor(count / 2);
  });

  return pairCount;
}
