/*
Only Duplicates

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

*/

function onlyDuplicates(str) {
  const charCount = {};

  // Count the occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Filter out characters that appear only once
  const result = str
    .split("")
    .filter((char) => charCount[char] > 1)
    .join("");

  return result;
}
