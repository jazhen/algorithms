// https://leetcode.com/problems/fizz-buzz/

/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const ans = [];

  for (let i = 1; i <= n; i++) {
    let output = '';

    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';

    ans.push(output || i.toString());
  }

  return ans;
};
// @lc code=end

