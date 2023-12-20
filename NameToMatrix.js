/*
Name to Matrix

Given a name, turn that name into a perfect square matrix (nested array with the amount of arrays equivalent to the length of each array).

You will need to add periods (.) to the end of the name if necessary, to turn it into a matrix.

If the name has a length of 0, return "name must be at least one letter"

Examples
"Bill" ==> [ ["B", "i"],
             ["l", "l"] ]

"Frank" ==> [ ["F", "r", "a"],
              ["n", "k", "."],
              [".", ".", "."] ]
*/

const matrixfy = (str) => {
  if (str.length === 0) {
    return "name must be at least one letter";
  }

  const sideLength = Math.ceil(Math.sqrt(str.length));
  const matrix = new Array(sideLength)
    .fill([])
    .map(() => new Array(sideLength).fill("."));

  for (let i = 0; i < str.length; i++) {
    const row = Math.floor(i / sideLength);
    const col = i % sideLength;
    matrix[row][col] = str[i];
  }

  return matrix;
};
