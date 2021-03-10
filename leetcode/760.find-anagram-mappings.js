// https://leetcode.com/problems/find-anagram-mappings/

/*
 * @lc app=leetcode id=760 lang=javascript
 *
 * [760] Find Anagram Mappings
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
  const map = {};

  for (const [i, b] of B.entries()) {
    map[b] = i;
  }

  const result = [];

  for (const a of A) {
    result.push(map[a]);
  }

  return result;
};
// @lc code=end

