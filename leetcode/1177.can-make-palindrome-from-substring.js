/*
 * @lc app=leetcode id=1177 lang=javascript
 *
 * [1177] Can Make Palindrome from Substring
 *
 * https://leetcode.com/problems/can-make-palindrome-from-substring/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 *
 * time: O(n + m), n = s.length, m = queries.length;
 * space: O(n + m)
 */
 var canMakePaliQueries = function(s, queries) {
  const ans = new Array(queries.length).fill(false);
  const freqPrefixes = getFrequencyOfEachPrefix(s);

  for (let i = 0; i < queries.length; i++) {
    const [start, end, k] = queries[i];

    if (canMakePalindromeWithKReplaceMents(freqPrefixes, start, end, k)) {
      ans[i] = true;
    }
  }

  return ans;
};

function getFrequencyOfEachPrefix(s) {
  // create an array for each index of s,
  // containing the frequency of characters in s from index 0 to that index
  // size s.length + 1 to account for a substring starting at 0
  const freqPrefix = new Array(s.length + 1).fill(null).map(() => new Array(26).fill(0));

  for (let i = 0; i < s.length; i++) {
    // clone the previous frequency map
    freqPrefix[i + 1] = freqPrefix[i].slice(0);

    freqPrefix[i + 1][s.charCodeAt(i) - 97] += 1;
  }

  return freqPrefix;
}

function canMakePalindromeWithKReplaceMents(freqPrefixes, start, end, k) {
  let numOddFreq = 0;

  for (let i = 0; i < 26; i++) {
    const freqAtEndIndex = freqPrefixes[end + 1][i];
    const freqAtStartIndex = freqPrefixes[start][i];

    // the freq of the substring from start to end is freqAtEndIndex - freqAtStartIndex
    numOddFreq += (freqAtEndIndex - freqAtStartIndex) % 2;
  }

  // can have at most 1 char with odd frequency to be a palindrome
  // - 2 * k, because changing a char from odd to even freq
  // will change another char from odd to even freq as well
  // i.e. 'abcda', k = 1: changing b to d will make b's freq 0 (even) and d's freq 2 (even)
  return numOddFreq - 2 * k <= 1;
}
// @lc code=end

