/*

Highest Rank Number in an Array

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/

function highestRank(arr) {
  const frequencyMap = new Map();

  // Count the frequency of each number in the array
  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  let mostFrequentNumber = arr[0];

  // Find the most frequent number
  for (const [num, count] of frequencyMap) {
    const currentCount = frequencyMap.get(mostFrequentNumber) || 0;

    if (
      count > currentCount ||
      (count === currentCount && num > mostFrequentNumber)
    ) {
      mostFrequentNumber = num;
    }
  }

  return mostFrequentNumber;
}
