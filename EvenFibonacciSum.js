/*
Even Fibonacci Sum

Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonacci sequence) without including n.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:

fibonacci(0)==0
fibonacci(33)==10
fibonacci(25997544)==19544084

*/

function fibonacci(max) {
  // Function to generate the Fibonacci sequence up to the given number n (exclusive)
  function generateFibonacci(max) {
    let fib = [0, 1];
    let nextFib = 1;
    while (nextFib < max) {
      fib.push(nextFib);
      nextFib = fib[fib.length - 1] + fib[fib.length - 2];
    }
    return fib;
  }

  // Calculate the sum of all even numbers in the Fibonacci sequence
  function sumEvenFibonacci(fibSeq) {
    let sum = 0;
    for (let num of fibSeq) {
      if (num % 2 === 0) {
        sum += num;
      }
    }
    return sum;
  }

  const fibSeq = generateFibonacci(max);
  const sumEven = sumEvenFibonacci(fibSeq);

  return sumEven;
}
