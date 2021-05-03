/*
 * @lc app=leetcode id=1481 lang=javascript
 *
 * [1481] Least Number of Unique Integers after K Removals
 *
 * https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 *
 * time: O(arr.length)
 * space: O(arr.length)
 */
var findLeastNumOfUniqueInts = function(arr, k) {
  const freq = {};

  for (const num of arr) {
    freq[num] = freq[num] + 1 || 1;
  }

  const maxFreq = Math.max(...Object.values(freq));
  const bucket = new Array(maxFreq + 1).fill(null).map(() => []);

  Object.keys(freq).forEach((num) => {
    bucket[freq[num]].push(num);
  })

  let uniqueNums = Object.keys(freq).length;

  for (let i = 1; i <= maxFreq; i++) {
    for (const num of bucket[i]) {
      if (k >= i) {
        uniqueNums--;
        k -= i;
      } else {
        return uniqueNums;
      }
    }
  }

  return uniqueNums;
};
// @lc code=end

