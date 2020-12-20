// https://leetcode.com/problems/maximum-subarray/

// max = nums[0]
// curr = nums[0]
// for loop from 1 to nums.length
// each iter calc the add nums[i] to curr
// keep the max of curr (the window sum) or nums[i]
// set max to result of this, if there is a new max
// return max

const maxSubArray = function(nums) {
  let maxSum = nums[0]; // -2
  let currSum = nums[0]; // -2

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i]); // 1
    maxSum = Math.max(maxSum, currSum);  // 1
  }

  return maxSum;
};
