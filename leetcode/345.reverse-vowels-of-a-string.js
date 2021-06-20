/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 *
 * time: O(n), n = s.length
 * space: O(n)
 */
 var reverseVowels = function(s) {
  let start = 0;
  let end = s.length - 1;
  let output = s.split('');

  while (start <= end) {
    if (!isVowel(s[start])) {
      start += 1;
      continue;
    }

    if (!isVowel(s[end])) {
      end -= 1;
      continue;
    }

    output[start] = s[end];
    output[end] = s[start];
    start += 1;
    end -= 1;
  }

  return output.join('');
};

function isVowel(char) {
  return /[aeiou]/i.test(char);
}
// @lc code=end

