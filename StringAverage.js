/*

String average

You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/
function averageString(input) {
  // Check if the input string is empty
  if (!input.trim()) {
    return "n/a";
  }

  // Split the input string into an array of words
  const words = input.split(" ");

  // Convert words to numbers
  const numbers = words.map(wordToNumber);

  // Check for invalid words
  if (numbers.includes(-1)) {
    return "n/a";
  }

  // Check if any number is greater than 9
  if (numbers.some((num) => num > 9)) {
    return "n/a";
  }

  // Check if there's only one number, return the number as a word
  if (numbers.length === 1) {
    return numberToWord(numbers[0]);
  }

  // Calculate the average
  const average = Math.floor(
    numbers.reduce((sum, num) => sum + num, 0) / numbers.length
  );

  // Convert the average back to a word
  const result = numberToWord(average);

  return result;
}

// Modify wordToNumber to return -1 for invalid words
function wordToNumber(word) {
  const numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const index = numberWords.indexOf(word.toLowerCase());
  return index !== -1 ? index : -1;
}

// Helper function to convert a number to a word
function numberToWord(number) {
  const numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  return numberWords[number];
}
