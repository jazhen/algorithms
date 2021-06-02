// https://leetcode.com/problems/fibonacci-number/

/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 *
 * time: O(2^n)
 * space: O(n)
 */
 var fibRecursive = function(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 *
 * time: O(n)
 * space: O(n)
 */
var fibMemo = function(n, memo = new Map([[0, 0], [1, 1]])) {
  if (memo.has(n)) return memo.get(n);

  memo.set(n, fib(n - 1) + fib(n - 2));

  return memo.get(n);
};

/**
 * @param {number} n
 * @return {number}
 *
 * time: O(n)
 * space: O(n)
 */
 var fibDP = function(n) {
  const dp = new Array(n + 1).fill(null);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

/**
 * @param {number} n
 * @return {number}
 *
 * time: O(n)
 * space: O(1)
 */
 var fibIterative = function(n) {
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }

  return curr;
};
// @lc code=end
