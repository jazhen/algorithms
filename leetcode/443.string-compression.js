/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 *
 * https://leetcode.com/problems/string-compression/
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
  let start = 0;
  let letter = chars[0];
  let countOfLetter = 0;

  for (let end = 0; end <= chars.length; end++) {
    if (chars[end] === letter) {
      countOfLetter += 1;
    } else {
      chars[start] = letter;
      start += 1;

      if (countOfLetter > 1) {
        const countOfLetterAsString = countOfLetter.toString();

        for (let countLengthIndex = 0; countLengthIndex < countOfLetterAsString.length; countLengthIndex++) {
          chars[start] = countOfLetterAsString[countLengthIndex];
          start += 1;
        }
      }

      letter = chars[end];
      countOfLetter = 1;
    }
  }

  return start;
};
// @lc code=end

