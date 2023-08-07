/*
Alphabet Slices

Given a string of lowercase letters, find substrings that consist of consecutive letters of the lowercase English alphabet and return a similar string, but with these substrings in reversed alphabetical order.

examples:

("xabc")=> "xcba"

xa is not found in the alphabet, but abc is found, so it is reversed.

("pqrsxdef")=> "srqpxfed"

("jklxyz")=> "lkjzyx"

("vwxcdefg")=> "xwvgfedc"

("vvmnozzstubb")=> "vvonmzzutsbb"

Note: if there are no alphabet substrings in the input string, return the input string as is.

All inputs will consist of one or more lowercase letters. This kata uses only lowercase strings.

*/

function reverseAlphabetSubstrings(str) {
  let result = ""; // Initialize an empty string to store the final result
  let alphabetSubstring = ""; // Initialize an empty string to store the current alphabet substring

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // If the current character is the next consecutive letter compared to the previous character
    if (
      alphabetSubstring === "" ||
      str.charCodeAt(i) - str.charCodeAt(i - 1) === 1
    ) {
      alphabetSubstring += str[i]; // Add the character to the current alphabet substring
    } else {
      // If the current character is not part of the consecutive alphabet substring
      // Reverse the current alphabet substring and add it to the result
      result += alphabetSubstring.split("").reverse().join("");

      alphabetSubstring = str[i]; // Start a new alphabet substring with the current character
    }
  }

  // After the loop, add the last alphabet substring to the result
  result += alphabetSubstring.split("").reverse().join("");

  return result; // Return the final result string
}
