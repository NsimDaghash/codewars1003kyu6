/*
Integer reduction

In this Kata, you will be given two integers n and k and your task is to remove k-digits from n and return the lowest number possible, without changing the order of the digits in n. Return the result as a string.

Let's take an example of solve(123056,4). We need to remove 4 digits from 123056 and return the lowest possible number. The best digits to remove are (1,2,3,6) so that the remaining digits are '05'. Therefore, solve(123056,4) = '05'.

Note also that the order of the numbers in n does not change: solve(1284569,2) = '12456', because we have removed 8 and 9.

More examples in the test cases.

Good luck!
*/

function solve(n, k) {
  // Convert the number to an array of digits
  const numArray = Array.from(String(n), Number);

  // Create a stack to track the lowest number
  const stack = [];

  // Iterate through each digit in the array
  for (let digit of numArray) {
    // Remove digits from the stack as long as they are greater than the current digit
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    // Push the current digit onto the stack
    stack.push(digit);
  }

  // Handle the case where k is still greater than 0
  while (k > 0) {
    stack.pop();
    k--;
  }

  // Join the digits in the stack to form the lowest number and return as a string
  return stack.join("");
}
