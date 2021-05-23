/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 *
 * https://leetcode.com/problems/minimum-window-substring/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 *
 * time: O(n + m), n = s.length, m = t.length
 * space: O(n + m)
 */
 var minWindow = function(s, t) {
  const currentWindowFreq = {};
  const tDict = getFrequencyMap(t);
  const desiredNumLettersToMatch = new Set(t).size;
  let currentNumLettersMatching = 0;
  let minWindowObj = {
    start: -1,
    end: -1,
    length: Infinity
  };

  for (let start = 0, end = 0; end < s.length; end++) {
    currentWindowFreq[s[end]] = (currentWindowFreq[s[end]] ?? 0) + 1;

    if (tDict[s[end]] && currentWindowFreq[s[end]] === tDict[s[end]]) {
      currentNumLettersMatching += 1;
    }

    while (currentNumLettersMatching === desiredNumLettersToMatch) {
      if (end - start + 1 < minWindowObj.length) {
        minWindowObj = { start, end, length: end - start + 1 };
      }

      currentWindowFreq[s[start]] -= 1;

      if (tDict[s[start]] && currentWindowFreq[s[start]] < tDict[s[start]]) {
        currentNumLettersMatching -= 1;
      }

      start++;
    }
  }

  if (minWindowObj.length === Infinity) return '';

  return s.slice(minWindowObj.start, minWindowObj.end + 1);
};

function getFrequencyMap(str) {
  const freq = {};

  for (const char of str) {
    freq[char] = (freq[char] ?? 0) + 1;
  }

  return freq;
}
// @lc code=end
