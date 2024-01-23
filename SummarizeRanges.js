/*
Summarize ranges

Given a sorted array of numbers, return the summary of its ranges.

Examples
summaryRanges([1, 2, 3, 4]) === ["1->4"]
summaryRanges([1, 1, 1, 1, 1]) === ["1"]
summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]) === ["0->7"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]) === ["0->7", "9->10"]
summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]) ===["-2", "0->7", "9->10", "12"]


*/

function summaryRanges(nums) {
  if (nums.length === 0) {
    return [];
  }

  const result = [];
  let start = nums[0];
  let end = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === end + 1 || nums[i] === end) {
      end = nums[i];
    } else {
      result.push(start === end ? `${start}` : `${start}->${end}`);
      start = end = nums[i];
    }
  }

  result.push(start === end ? `${start}` : `${start}->${end}`);
  return result;
}
