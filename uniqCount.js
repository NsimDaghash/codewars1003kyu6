function uniqCount(xs) {
  // Convert the string to lowercase to make it case-insensitive
  xs = xs.toLowerCase();

  // Create a set to store unique letters
  const uniqueLetters = [];

  // Count the occurrences of each letter and add unique letters to the set
  //   for (const char of xs) {
  //     if (!uniqueLetters.includes(char)) {
  //       uniqueLetters.push(char);
  //     }
  //   }
  for (let i = 0; i < xs.length; i++) {
    if (!uniqueLetters.includes(xs[i])) {
      uniqueLetters.push(xs[i]);
    }
  }

  //   // Calculate the total number of different letters in the string
  //   const countLetters = uniqueLetters.size;

  // Calculate the total number of permutations
  let totalPermutations = 1n;
  for (let i = 1n; i <= uniqueLetters.length; i++) {
    totalPermutations *= i;
  }

  return totalPermutations;
}

console.log(uniqCount("ABa"));
