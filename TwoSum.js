/*
Two Sum Problem:
Write a function that takes an array of integers and a target sum. The function should return indices of the two numbers such that they add up to the target.

*/

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    if (nums.includes(complement)) {
      for (let j = i + 1; j < nums.length; j++) {
        if (complement == nums[j]) {
          index = j;
          return [i, index];
        }
      }
    }

    numIndices[currentNum] = i;
  }

  // If no such pair is found, return null or an appropriate indicator
  return null;
}

const nums = [5, 8, 9, 13];
const target = 14;
const result = twoSum(nums, target);
console.log(result);
