/*

Simple Fun #115: Factor Sum

Consider the following operation:

We take a positive integer n and replace it with the sum of its prime factors (if a prime number is presented multiple times in the factorization of n, 
    then it's counted the same number of times in the sum).

This operation is applied sequentially first to the given number, then to the first result, then to the second result and so on.., until the result remains the same.

Given number n, find the final result of the operation.

Example
For n = 24, the output should be 5.

 24 -> (2 + 2 + 2 + 3) = 9 -> (3 + 3) = 6 -> (2 + 3) = 5 -> 5. So the answer for n = 24 is 5.

Input/Output
[input] integer n
Constraints: 2 ≤ n ≤ 10000.

*/

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function primeFactors(n) {
  const factors = [];
  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      if (isPrime(i)) {
        factors.push(i);
      }
      n /= i;
    } else {
      i++;
    }
  }
  return factors;
}

function factorSum(n) {
  let result = n;
  while (true) {
    const factors = primeFactors(result);
    const newResult = factors.reduce((sum, factor) => sum + factor, 0);
    if (newResult === result) {
      return result;
    } else {
      result = newResult;
    }
  }
}
