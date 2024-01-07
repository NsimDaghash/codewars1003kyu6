/*
Longest palindrome

A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".

*/

function longestPalindrome(str) {
  // Convert the string to lowercase to make it case-insensitive
  str = str.toLowerCase();

  // Create an object to store the count of each character
  const charCount = {};

  // Count the occurrences of each character in the string
  for (let char of str) {
    if (char.match(/[a-z0-9]/)) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  // Initialize variables to track the length of the palindrome and whether an odd count is encountered
  let length = 0;
  let hasOddCount = false;

  // Iterate through the character counts
  for (let count of Object.values(charCount)) {
    // Add even part of the count to the length
    length += Math.floor(count / 2) * 2;

    // Check if there is an odd count
    if (count % 2 !== 0) {
      hasOddCount = true;
    }
  }

  // If there was at least one character with an odd count, add 1 to the length
  if (hasOddCount) {
    length += 1;
  }

  return length;
}
