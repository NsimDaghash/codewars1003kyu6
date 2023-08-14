/*
Simple Fun #305: Typist

John is a typist. He has a habit of typing: he never use the Shift key to switch case, just using only Caps Lock.

Given a string s. Your task is to count how many times the keyboard has been tapped by John.

You can assume that, at the beginning the Caps Lock light is not lit.

Input/Output
[input] string s

A non-empty string. It contains only English letters(uppercase or lowercase).

1 ≤ s.length ≤ 10000

[output] an integer

The number of times John tapped the keyboard.

Example
For s = "a", the output should be 1.

John hit button a.

For s = "aa", the output should be 2.

John hit button a, a.

For s = "A", the output should be 2.

John hit button Caps Lock, A.

For s = "Aa", the output should be 4.

John hit button Caps Lock, A, Caps Lock, a.

*/

function typist(s) {
  /* first version
  let keyPresses = 0;
  let capsLockOn = false; // Initial state of Caps Lock

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const uppercaseChar = char.toUpperCase();

    if (char === uppercaseChar) {
      // If the character is uppercase
      if (!capsLockOn) {
        // If Caps Lock was not on, press Caps Lock
        keyPresses++;
        capsLockOn = true;
      }
      keyPresses++; // Press the character key
    } else {
      // If the character is lowercase
      if (capsLockOn) {
        // If Caps Lock was on, press Caps Lock to turn it off
        keyPresses++;
        capsLockOn = false;
      }
      keyPresses++; // Press the character key
    }
  }

  return keyPresses;

  */
  // optimized version
  let keyPresses = 0;
  let capsLockOn = false; // Initial state of Caps Lock

  for (const char of s) {
    const isUppercase = char === char.toUpperCase();

    if (isUppercase !== capsLockOn) {
      // Change in Caps Lock state, press Caps Lock
      keyPresses++;
      capsLockOn = !capsLockOn;
    }

    keyPresses++; // Press the character key
  }

  return keyPresses;
}
