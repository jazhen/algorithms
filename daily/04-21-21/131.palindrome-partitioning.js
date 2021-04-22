/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 *
 * https://leetcode.com/problems/palindrome-partitioning/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 *
 * time: O(n • 2^n), n = s.length
 * space: O(n)
 */
 var partition = function(s) {
  const ans = [];

  backtrack(ans, s, []);
  return ans;
};

function backtrack(ans, s, path) {
  if (s.length === 0) {
    ans.push([...path]);
  }

  for (let i = 0; i < s.length; i++) {
    const substring = s.slice(0, i + 1);

    if (!isPalindrome(substring)) continue;

    path.push(substring);
    backtrack(ans, s.slice(i + 1), path);
    path.pop();
  }
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}
// @lc code=end

