/*

Min Factor Distance

Write a function that returns the smallest distance between two factors of a n. The input will always be a number greater than one.

Example:

13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

Hence the asnwer will be 2 (=13-11)
*/
function minDistance(n) {
  const factors = [1];

  // Find all factors of the number
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (i !== n / i) {
        factors.push(n / i);
      }
    }
  }

  factors.sort((a, b) => a - b);

  let smallestDistance = n;

  // Find the smallest distance between factors
  for (let i = 1; i < factors.length; i++) {
    const distance = factors[i] - factors[i - 1];
    if (distance < smallestDistance) {
      smallestDistance = distance;
    }
  }

  return smallestDistance;
}
