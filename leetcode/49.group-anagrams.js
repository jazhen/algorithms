// https://leetcode.com/problems/group-anagrams/

/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');

    if (!map[sortedStr]) {
      map[sortedStr] = [str];
    } else {
      map[sortedStr].push(str);
    }
  }

  return Object.values(map);
};
// @lc code=end

