/*

Plus - minus - plus - plus - ... - Sum


Given an array [x1, x2, ..., xn] determine whether it is possible to put + or - between the elements and get an expression equal to sum. Result is boolean

2 <= n <= 22
0 <= xi <= 20
-10 <= sum <= 10
Example
arr = [1, 3, 4, 6, 8]

sum = -2

1 + 3 - 4 + 6 - 8 = -2

Result is: true

Notes
If it is impossible to find a solution then you should return false.

*/
function getSolution(arr, sum) {
  const n = arr.length;

  function recursive(index, currentSum) {
    if (index === n) {
      return currentSum === sum;
    }

    // Try adding the current element
    if (recursive(index + 1, currentSum + arr[index])) {
      return true;
    }

    // Try subtracting the current element
    if (recursive(index + 1, currentSum - arr[index])) {
      return true;
    }

    return false;
  }

  return recursive(1, arr[0]);
}
