/*
Count Repeats

Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
*/

function countRepeats(str) {
  let count = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    // Check if the current character is equal to the next one
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      // If not, add the current character to the result
      result += str[i];
    }
  }

  return count;
}
