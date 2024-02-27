/*
Simple Fun #79: Delete a Digit

Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.
*/

function deleteDigit(n) {
  n = Array.from(String(n));
  let max = 0;

  for (let i = 0; i < n.length; i++) {
    const res = parseInt(
      n
        .slice(0, i)
        .concat(n.slice(i + 1))
        .join("")
    );

    if (res > max) {
      max = res;
    }
  }

  return max;
}
