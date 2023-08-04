/*

Triangle type

In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

If all angles are less than 90°, this triangle is acute and function should return 1.

If one angle is strictly 90°, this triangle is right and function should return 2.

If one angle more than 90°, this triangle is obtuse and function should return 3.

If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).


Acute

Right

Obtuse
Examples:
(2, 4, 6) ---> return 0 (Not triangle)
(8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
(3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
(7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. But you can solve this kata even without angle calculation.

There is very small chance of random test to fail due to round-off error, in such case resubmit your solution.

*/

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c) {
  // Check if the three sides can form a triangle
  if (a + b <= c || a + c <= b || b + c <= a) {
    return 0; // Not a triangle
  }

  // Calculate the squares of the sides
  const aSquared = a * a;
  const bSquared = b * b;
  const cSquared = c * c;

  // Use the law of cosines to calculate the angles in radians
  const angleA = Math.acos((bSquared + cSquared - aSquared) / (2 * b * c));
  const angleB = Math.acos((aSquared + cSquared - bSquared) / (2 * a * c));
  const angleC = Math.acos((aSquared + bSquared - cSquared) / (2 * a * b));

  // Convert the angles to degrees
  const degreesA = (angleA * 180) / Math.PI;
  const degreesB = (angleB * 180) / Math.PI;
  const degreesC = (angleC * 180) / Math.PI;

  // Check the type of triangle based on the angles
  if (degreesA > 90 || degreesB > 90 || degreesC > 90) {
    return 3; // Obtuse
  } else if (degreesA === 90 || degreesB === 90 || degreesC === 90) {
    return 2; // Right
  } else {
    return 1; // Acute
  }
}
