// https://leetcode.com/problems/letter-case-permutation/

/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  const queue = [S];

  for (let i = 0; i < S.length; i++) {
    if (isNaN(parseInt(S[i], 10))) {
      const queueLength = queue.length;

      for (let j = 0; j < queueLength; j++) {
        const node = queue.shift();

        queue.push(node.slice(0, i) + S[i].toLowerCase() + node.slice(i + 1));
        queue.push(node.slice(0, i) + S[i].toUpperCase() + node.slice(i + 1));
      }
    }
  }

  return queue;
};
// @lc code=end
