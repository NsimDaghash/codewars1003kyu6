/*
Is Integer Array?

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/

function isIntArray(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  for (const element of arr) {
    if (
      typeof element !== "number" ||
      !Number.isInteger(element) ||
      !Number.isSafeInteger(element)
    ) {
      return false;
    }
  }

  return true;
}
