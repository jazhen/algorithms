// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = {};
  let start = 0;
  let longest = 0;

  for (let end = 0; end < s.length; end++) {
    map[s[end]] = map[s[end]] + 1 || 1;

    while (map[s[end]] > 1) {
      map[s[start]] -= 1;
      start += 1;
    }

    longest = Math.max(longest, end - start + 1);
  }

  return longest;
};
// @lc code=end

// time: O(n)
// space: O(n)
