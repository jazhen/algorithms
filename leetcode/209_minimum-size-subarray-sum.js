// https://leetcode.com/problems/minimum-size-subarray-sum/

// for loop from 0 to nums.length
// add nums[windowEnd] to the current sum
// while the current sum is >= s
//   set the min len if the current length is smaller
//   subtract nums[windowStart] from current sum
//   increment windowStart

const minSubArrayLen = function(s, nums) {
  let windowStart = 0;
  let currentSum = 0;
  let minLen = Infinity;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    currentSum += nums[windowEnd];

    while (currentSum >= s) {
      const currentLen = windowEnd - windowStart + 1;
      minLen = Math.min(minLen, currentLen);
      currentSum -= nums[windowStart];
      windowStart += 1;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};
