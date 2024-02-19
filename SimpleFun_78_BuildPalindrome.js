/*

Simple Fun #78: Build Palindrome

Task
Given a string str, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example
For str = "abcdc", the output should be "abcdcba".

Input/Output
[input] string str

A string consisting of lowercase latin letters.

Constraints: 3 ≤ str.length ≤ 10.

[output] a string


*/

function buildPalindrome(str) {
  // Function to check if a string is a palindrome
  function isPalindrome(s) {
    return s === s.split("").reverse().join("");
  }

  // Find the shortest palindrome by adding reversed characters
  for (let i = 0; i < str.length; i++) {
    const suffix = str.substring(i);
    if (isPalindrome(suffix)) {
      const remainingCharacters = str
        .substring(0, i)
        .split("")
        .reverse()
        .join("");
      return str + remainingCharacters;
    }
  }

  // If the input string is already a palindrome, no need to add anything
  return str;
}
