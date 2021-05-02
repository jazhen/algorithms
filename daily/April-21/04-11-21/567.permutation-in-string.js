/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 *
 * https://leetcode.com/problems/permutation-in-string/
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 *
 * time: O(s1.length + 26 * (s2.length - s1.length))
 * space: O(1), max is length of the alphabet O(26) == O(1)
 */
 var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Map = {};
  const s2Map = {};

  for (let i = 0; i < s1.length; i++) {
    s1Map[s1[i]] = s1Map[s1[i]] + 1 || 1;
    s2Map[s2[i]] = s2Map[s2[i]] + 1 || 1;
  }

  for (let start = 0, end = s1.length; end < s2.length; end++) {
    s2Map[s2[end]] = s2Map[s2[end]] + 1 || 1;

    if (end >= s1.length) {
      s2Map[s2[start]] -= 1;
      start += 1;
    }

    if (isPermutation(s1Map, s2Map)) return true;
  }

  return false;
};

function isPermutation(map1, map2) {
  return !Object.keys(map1).find((c) => map1[c] !== map2[c]);
}
// @lc code=end

