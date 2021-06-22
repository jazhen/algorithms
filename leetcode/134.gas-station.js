/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 *
 * https://leetcode.com/problems/gas-station/
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 *
 * time: O(n), n = gas.length
 * space: O(1)
 */
var canCompleteCircuit = function (gas, cost) {
  let startStation = 0;
  let currentGas = 0;
  let totalGas = 0;

  for (let i = 0; i < gas.length; i++) {
    currentGas += gas[i] - cost[i];
    totalGas += gas[i] - cost[i];

    if (currentGas < 0) {
      currentGas = 0;
      startStation = i + 1;
    }
  }

  return totalGas >= 0 ? startStation : -1;
};
// @lc code=end
