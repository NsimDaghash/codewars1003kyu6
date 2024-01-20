/*

Simple division

In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b. 
For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).

See test cases for more examples.

Good luck!

*/

function primeFactors(n) {
  let factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
}

// Main solve function
function solve(a, b) {
  // Get the prime factors of b
  const primeFactorsOfB = primeFactors(b);

  // Check if a is divisible by all prime factors of b
  for (let factor of primeFactorsOfB) {
    if (a % factor !== 0) {
      return false;
    }
  }

  return true;
}
