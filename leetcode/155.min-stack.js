// https://leetcode.com/problems/min-stack/

/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.minArr = [];
  this.eleArr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.eleArr.push(x);

  if (this.minArr.length) {
    this.minArr.push(Math.min(this.minArr[this.minArr.length - 1], x));
  } else {
    this.minArr.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.minArr.pop();
  this.eleArr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.eleArr[this.eleArr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minArr[this.minArr.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

