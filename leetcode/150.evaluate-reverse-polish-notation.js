// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evaluateExpression(left, right, operator) {
  switch(operator) {
    case '+': return left + right;
    case '-': return left - right;
    case '*': return left * right;
    case '/': return Math.trunc(left / right);
  }
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const element = tokens[i];

    if (isNaN(parseInt(element))) {
      const right = stack.pop();
      const left = stack.pop();
      const result = evaluateExpression(left, right, element);

      stack.push(result);
    } else {
      stack.push(parseInt(element));
    }
  }

  return stack[0];
};
// @lc code=end

