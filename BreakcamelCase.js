/*
Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  if (string === "") {
    return "";
  }

  // Iterate through each character in the string
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += " ";
    }

    result += string[i];
  }

  return result;
}
