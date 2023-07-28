/*
Triple trouble

Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/
function tripledouble(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  let prevDigit = num1Str[0];
  let tripleCount = 1;
  let doubleFound = false;

  for (let i = 1; i < num1Str.length; i++) {
    if (num1Str[i] === prevDigit) {
      tripleCount++;

      // If we have found a straight triple, check for the corresponding double in num2
      if (tripleCount === 3) {
        if (num2Str.includes(prevDigit + prevDigit)) {
          doubleFound = true;
          break;
        }
      }
    } else {
      // If the consecutive digits are not the same, reset tripleCount
      tripleCount = 1;
    }

    prevDigit = num1Str[i]; // Update prevDigit to the current digit
  }

  return doubleFound ? 1 : 0;
}
