/*
Duplicate Arguments

Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true
*/

function solution() {
  // Convert arguments to an array
  const args = Array.from(arguments);

  // Use Set to check for duplicates
  const uniqueSet = new Set(args);

  // Compare the length of the original array with the Set
  // If they are not equal, it means there are duplicates
  return args.length !== uniqueSet.size;
}
