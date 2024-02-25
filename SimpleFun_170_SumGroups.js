/*

Simple Fun #170: Sum Groups

Given an array of integers, sum consecutive even numbers and consecutive odd numbers. Repeat the process while it can be done and return the length of the final array.

Example
For arr = [2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]

The result should be 6.

[2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]  -->
         2+2+6       0+2+0     5+5+7+7       3+3+9
[2, 1,   10,    5,    2,        24,     4,   15   ] -->
                               2+24+4
[2, 1,   10,    5,             30,           15   ]
The length of final array is 6
Input/Output
[input] integer array arr

A non-empty array,

1 ≤ arr.length ≤ 1000

0 ≤ arr[i] ≤ 1000

[output] an integer

The length of the final array
*/

function sumGroups(arr) {
  while (true) {
    // Flag to track whether any changes have been made in the current iteration
    let changed = false;

    // Iterate through the array
    for (let i = 0; i < arr.length - 1; i++) {
      // Check if consecutive elements are both even or both odd
      if (
        (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) ||
        (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0)
      ) {
        // Sum consecutive elements and replace the next element with the sum
        arr[i] += arr[i + 1];
        // Remove the next element from the array
        arr.splice(i + 1, 1);
        // Set the changed flag to true
        changed = true;
        // Break out of the loop after making a change
        break;
      }
    }

    // If no changes were made in the current iteration, exit the while loop
    if (!changed) {
      break;
    }
  }

  // Return the length of the modified array
  return arr.length;
}
