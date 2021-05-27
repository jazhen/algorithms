/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 *
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
  if (p.length > s.length) return [];

  const sFreq = new Array(26).fill(0);
  const pFreq = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    sFreq[getAlphabetIndex(s[i])] += 1;
    pFreq[getAlphabetIndex(p[i])] += 1;
  }

  const anagramStartIndicies = [];

  for (let i = p.length; i <= s.length; i++) {
    if (areAnagrams(sFreq, pFreq)) {
      anagramStartIndicies.push(i - p.length);
    }

    if (i < s.length) {
      sFreq[getAlphabetIndex(s[i - p.length])] -= 1;
      sFreq[getAlphabetIndex(s[i])] += 1;
    }
  }

  return anagramStartIndicies;
};

function getAlphabetIndex(char) {
  return char.charCodeAt() - 'a'.charCodeAt();
}

function areAnagrams(sFreq, pFreq) {
  for (let i = 0; i < 26; i++) {
    if (sFreq[i] !== pFreq[i]) {
      return false;
    }
  }

  return true;
}
// @lc code=end

