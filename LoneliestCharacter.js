/*
Loneliest character

Complete the function which accepts a string and return an array of character(s) that have the most spaces to their right and left.

Notes:

the string can have leading/trailing spaces - you should not count them
the strings contain only unique characters from a to z
the order of characters in the returned array doesn't matter
Examples
"a b  c"                        -->  ["b"]
"a bcs           d k"           -->  ["d"]
"    a b  sc     p     t   k"   -->  ["p"]
"a  b  c  de"                   -->  ["b", "c"]
"     a  b  c de        "       -->  ["b"]
"abc"                           -->  ["a", "b", "c"]
Good luck!
*/

function loneliest(str) {
  // Trim leading and trailing spaces
  str = str.trim();

  // Initialize variables to store the maximum surrounding spaces
  let maxSpaces = 0;
  let loneliestChars = [];

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Count spaces to the left
    let leftSpaces = 0;
    let leftIndex = i - 1;
    while (leftIndex >= 0 && str[leftIndex] === " ") {
      leftSpaces++;
      leftIndex--;
    }

    // Count spaces to the right
    let rightSpaces = 0;
    let rightIndex = i + 1;
    while (rightIndex < str.length && str[rightIndex] === " ") {
      rightSpaces++;
      rightIndex++;
    }

    // Calculate total surrounding spaces
    const totalSpaces = leftSpaces + rightSpaces;

    // Check if the current character has the maximum surrounding spaces
    if (totalSpaces > maxSpaces) {
      maxSpaces = totalSpaces;
      loneliestChars = [str[i]];
    } else if (totalSpaces === maxSpaces) {
      loneliestChars.push(str[i]);
    }
  }

  return loneliestChars;
}
