/*
 * @lc app=leetcode id=1169 lang=javascript
 *
 * [1169] Invalid Transactions
 *
 * https://leetcode.com/problems/invalid-transactions/
 */

// @lc code=start
/**
 * @param {string[]} transactions
 * @return {string[]}
 *
 * time: O(n^2), n = transactions.length
 * space: O(n)
 */
var invalidTransactions = function(transactions) {
  const transactionMap = {};

  for (const transaction of transactions) {
    const [name, time, amount, city] = transaction.split(',');

    if (!transactionMap[name]) {
      transactionMap[name] = [{ time, city }];
    } else {
      transactionMap[name].push({ time, city });
    }
  }

  let invalids = [];

  for (const transaction of transactions) {
    if (isInvalid(transaction, transactionMap)) {
      invalids.push(transaction);
    }
  }

  return invalids;
};

function isInvalid(transaction, map) {
  const [name, time, amount, city] = transaction.split(',');

  if (amount > 1000) return true;

  for (const t of map[name]) {
    if (city !== t.city && Math.abs(time - t.time) <= 60) return true;
  }

  return false;
}
// @lc code=end

