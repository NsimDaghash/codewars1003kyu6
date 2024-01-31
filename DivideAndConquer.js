/*    need correction

Divide and Conquer

Create a function that takes a list of integers and a group length as parameters. Your task is to determine if it's possible to split all the numbers from the list into groups of the specified length, while ensuring that consecutive numbers are present within each group.

Input
lst / arr: A list / array of integers representing the numbers to be divided into groups.

group_len / groupLen: An integer indicating the desired length of each group.

Output
The function should return True if it's possible to create groups according to the criteria, and False otherwise.

Examples
consecutiveNums([1, 3, 5], 1) ➞ true
// It is always possible to create groups of length 1.

consecutiveNums([5, 6, 3, 4], 2) ➞ true
// Two groups of length 2: [3, 4], [5, 6]

consecutiveNums([1, 3, 4, 5], 2) ➞ false
// It is possible to make one group of length 2, but not a second one.

consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3) ➞ true
// [1, 2, 3], [2, 3, 4], [6, 7, 8]

consecutiveNums([1, 2, 3, 4, 5], 4) ➞ false
// The list length is not divisible by the group’s length.
Input Constraints
3 <= arr.length <= 10^4
1 <= groupLen <= 10

*/
function consecutiveNums(arr, groupLen) {
  if (arr.length % groupLen !== 0) {
    return false;
  }

  // Sort the array to ensure consecutive numbers are nearby
  arr.sort((a, b) => a - b);
  let tmp = arr[0] - arr[1];

  // Iterate through the array to check for consecutive numbers within groups
  for (let i = 0; i < arr.length; i += groupLen) {
    for (let j = i; j < i + groupLen - 1; j++) {
      if (arr[j] - arr[j + 1] != tmp) {
        return false;
      }
    }
  }

  // If all consecutive checks passed, return true
  return true;
}
