// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
// DFS

function getCombinations(digits, path, result, digitToLetters, start) {
  if (path.length === digits.length) {
    result.push(path);
    return;
  }

  for (let i = start; i < digits.length; i++) {
    const digit = digits[i];

    for (let j = 0; j < digitToLetters[digit].length; j++) {
      const letter = digitToLetters[digit][j];

      path += letter;

      getCombinations(digits, path, result, digitToLetters, i + 1);

      path = path.slice(0, -1);
    }
  }
};

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  if (digits.length === 0) return [];

  const result = [];
  const digitToLetters = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
  }

  getCombinations(digits, '', result, digitToLetters, 0);

  return result;
}

// BFS

// var letterCombinations = function(digits) {
//   if (!digits.length) return [];

//   const digitToLetters = {
//     '2': 'abc',
//     '3': 'def',
//     '4': 'ghi',
//     '5': 'jkl',
//     '6': 'mno',
//     '7': 'pqrs',
//     '8': 'tuv',
//     '9': 'wxyz'
//   }
//   const queue = [digits];

//   for (let i = 0; i < digits.length; i++) {
//     const queueLength = queue.length;

//     for (let j = 0; j < queueLength; j++) {
//       const node = queue.shift();
//       const digit = node[i];
//       const lettersOfDigit = digitToLetters[digit];

//       for (let k = 0; k < lettersOfDigit.length; k++) {
//         queue.push(node.slice(0, i) + lettersOfDigit[k] + node.slice(i + 1));
//       }
//     }
//   }

//   return queue;
// };
// @lc code=end
