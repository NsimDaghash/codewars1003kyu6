/*
Three added Characters

Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

Write a function that returns the added character

E.g
string1 = "hello"
string2 = "aaahello"

// => 'a'
The above is just an example; the characters could be anywhere in the string and string2 is actually shuffled.

Another example
string1 = "abcde"
string2 = "2db2a2ec"

// => '2'
Note that the added character could also exist in the original string

string1 = "aabbcc"
string2 = "aacccbbcc"

// => 'c'
You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.

Write the function addedChar() that takes two strings and return the added character as described above.
*/

function addedChar(s1, s2) {
  // Create frequency counters for both strings
  const freqCount1 = {};
  const freqCount2 = {};

  // Count the occurrences of characters in string1
  for (let char of s1) {
    freqCount1[char] = (freqCount1[char] || 0) + 1;
  }

  // Count the occurrences of characters in string2
  for (let char of s2) {
    freqCount2[char] = (freqCount2[char] || 0) + 1;
  }

  // Compare the frequency counters to find the added character
  for (let char in freqCount2) {
    if (freqCount2[char] !== freqCount1[char]) {
      return char;
    }
  }
}
