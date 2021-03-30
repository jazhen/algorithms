/*
 * @lc app=leetcode id=1010 lang=javascript
 *
 * [1010] Pairs of Songs With Total Durations Divisible by 60
 */

// @lc code=start
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  const numRemainders = new Array(60).fill(0);
  let result = 0;

  for (const t of time) {
    const adjusted = t % 60;
    const complement = 60 - adjusted;

    if (adjusted === 0) {
      result += numRemainders[0];
    } else {
      result += numRemainders[complement];
    }

    numRemainders[adjusted] += 1;
  }

  return result;
};
// @lc code=end

