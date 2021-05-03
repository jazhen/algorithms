/*
 * @lc app=leetcode id=359 lang=javascript
 *
 * [359] Logger Rate Limiter
 *
 * https://leetcode.com/problems/logger-rate-limiter/
 */

// @lc code=start
/**
 * Initialize your data structure here.
 *
 * space: O(n), n = the unique number of messages received
 */
 var Logger = function() {
  this.messages = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity.
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 *
 * time: O(1)
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if (!(message in this.messages)) {
    this.messages[message] = timestamp;
    return true;
  }

  if (timestamp - this.messages[message] < 10) return false;

  this.messages[message] = timestamp;
  return true;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
// @lc code=end

