/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 *
 * https://leetcode.com/problems/word-break/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 *
 * time: O(n^3), n = s.length
 * space: O(n)
 */
 var wordBreak = function(s, wordDict) {
  const words = new Set(wordDict);
  const memo = new Map();
  return backtrack(s, words, memo, 0);
};

function backtrack(s, words, memo, wordStart) {
  if (memo.has(wordStart)) return memo.get(wordStart);
  if (wordStart === s.length) return true;

  for (let i = wordStart; i < s.length; i++) {
    const substring = s.slice(wordStart, i + 1);

    if (!words.has(substring)) continue;
    if (!backtrack(s, words, memo, i + 1)) continue;

    memo.set(wordStart, true);
    return memo.get(wordStart);
  }

  memo.set(wordStart, false);
  return memo.get(wordStart);
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 *
 * time: TLE - O(2^n), n = s.length
 * space: O(n)
 */
 var wordBreakRecursion = function(s, wordDict) {
  const words = new Set(wordDict);
  return backtrack(s, words, 0);
};

function backtrack(s, words, wordStart) {
  if (wordStart === s.length) return true;

  for (let i = wordStart; i < s.length; i++) {
    const substring = s.slice(wordStart, i + 1);

    if (!words.has(substring)) continue;
    if (!backtrack(s, words, i + 1)) continue;

    return true;
  }

  return false;
}
// @lc code=end

