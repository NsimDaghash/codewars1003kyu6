/*
Compare Versions

Karan's company makes software that provides different features based on the version of operating system of the user.

To compare versions, Karan currently parses both version numbers as floats.

While this worked for OS versions 10.6, 10.7, 10.8 and 10.9, the operating system company just released OS version 10.10. This causes his method to fail, 
as 10.9 is greater than 10.10 when interpreting both as numbers, despite being a lesser version.

Help Karan by writing him a function which compares two versions, and returns whether or not the first one is greater than or equal to the second.

Specification notes:

Versions are provided as strings of one or more integers separated by ..
The version strings will never be empty.
The two versions are not guaranteed to have an equal amount of sub-versions, when this happens assume that all missing sub-versions are zero.
*/

function compareVersions(version1, version2) {
  // Split the versions into arrays of integers
  const v1Parts = version1.split(".").map(Number);
  const v2Parts = version2.split(".").map(Number);

  // Ensure both arrays have the same length by adding zeros
  while (v1Parts.length < v2Parts.length) {
    v1Parts.push(0);
  }
  while (v2Parts.length < v1Parts.length) {
    v2Parts.push(0);
  }

  // Compare each part of the versions
  for (let i = 0; i < v1Parts.length; i++) {
    if (v1Parts[i] > v2Parts[i]) {
      return true;
    } else if (v1Parts[i] < v2Parts[i]) {
      return false;
    }
  }

  // If all parts are equal, versions are considered equal
  return true;
}
