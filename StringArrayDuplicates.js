/*
String array duplicates

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!
*/

function dup(s) {
  return s.map((str) => {
    return str
      .split("")
      .filter((char, index, array) => char !== array[index + 1])
      .join("");
  });
}
