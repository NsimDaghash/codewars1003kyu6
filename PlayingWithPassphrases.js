/*
Playing with passphrases

Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?
*/

function playPass(s, n) {
  // Define a function to circularly shift a letter by a given number
  function shiftLetter(letter, shift) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const index = (alphabet.indexOf(letter) + shift) % 26;
    return alphabet[index];
  }

  // Define a function to replace a digit with its complement to 9
  function complementDigit(digit) {
    return String(9 - parseInt(digit));
  }

  // Initialize an empty array to store the transformed characters
  const transformedChars = [];

  // Iterate through each character in the input string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (/[A-Z]/.test(char)) {
      // Circularly shift uppercase letters by 'n'
      transformedChars.push(shiftLetter(char, n));
    } else if (/[0-9]/.test(char)) {
      // Replace digits with their complement to 9
      transformedChars.push(complementDigit(char));
    } else {
      // Keep non-alphabetic and non-digit characters unchanged
      transformedChars.push(char);
    }

    // Uppercase letters in even positions, downcase letters in odd positions
    if (/[A-Za-z]/.test(char)) {
      if (i % 2 === 0) {
        transformedChars[i] = transformedChars[i].toUpperCase();
      } else {
        transformedChars[i] = transformedChars[i].toLowerCase();
      }
    }
  }

  // Reverse the transformed characters and join them into a string
  const result = transformedChars.reverse().join("");
  return result;
}
