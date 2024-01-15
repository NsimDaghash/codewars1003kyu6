/*
Decipher this!

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
there are no special characters used, only letters and spaces
words are separated by a single space
there are no leading or trailing spaces
Examples

'72olle 103doo 100ya' --> 'Hello good day'
'82yade 115te 103o'   --> 'Ready set go'

*/

function decipherThis(str) {
  // Split the input string into an array of words
  const words = str.split(" ");

  // Function to decipher a single word
  function decipherWord(word) {
    let firstLetter = "";
    let restOfString = "";

    const match = word.match(/^\d+/);

    if (match) {
      // Extracted number as a string
      const numberString = match[0];

      // Convert the number string to an actual number if needed
      firstLetter = String.fromCharCode(parseInt(word));

      // Extract the rest of the string
      restOfString = word.slice(numberString.length);

      // Switch the second and last characters
      if (restOfString.length > 1) {
        // Extract the first and last characters
        const firstChar = restOfString[0];
        const lastChar = restOfString[restOfString.length - 1];

        // Switch the first and last characters
        restOfString = lastChar + restOfString.slice(1, -1) + firstChar;
      }
    }

    const decipheredWord = firstLetter + restOfString;
    return decipheredWord;
  }

  // Decipher each word in the array
  const decipheredWords = words.map(decipherWord);

  // Join the deciphered words into a sentence
  const decipheredMessage = decipheredWords.join(" ");

  return decipheredMessage;
}

let str = "72olle 103doo 100ya";

console.log(decipherThis(str));
