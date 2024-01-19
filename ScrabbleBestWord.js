/*
Scrabble best word

You're playing to scrabble. But counting points is hard.

You decide to create a little script to calculate the best possible value.

The function takes two arguments :

`points` : an array of integer representing for each letters from A to Z the points that it pays
`words` : an array of strings, uppercase

You must return the index of the shortest word which realize the highest score.
If the length and the score are the same for two elements, return the index of the first one.
*/

function getBestWord(points, words) {
  let bestScore = -1;
  let bestIndex = -1;

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let currentScore = 0;

    for (let j = 0; j < currentWord.length; j++) {
      let letter = currentWord[j];
      let letterIndex = letter.charCodeAt(0) - "A".charCodeAt(0);

      // Check if the letter is a valid uppercase letter (A to Z)
      if (letterIndex >= 0 && letterIndex < 26) {
        currentScore += points[letterIndex];
      }
    }

    // Check if the current word has a higher score or if it's the same score but shorter
    if (
      currentScore > bestScore ||
      (currentScore === bestScore &&
        currentWord.length < words[bestIndex].length)
    ) {
      bestScore = currentScore;
      bestIndex = i;
    }
  }

  return bestIndex;
}
