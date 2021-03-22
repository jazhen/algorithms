// https://leetcode.com/problems/design-browser-history/

/*
 * @lc app=leetcode id=1472 lang=javascript
 *
 * [1472] Design Browser History
 */

// @lc code=start
/**
 * @param {string} homepage
 * range of this.history must be [1, this.history.length] inclusive
 */
 var BrowserHistory = function(homepage) {
  this.history = [homepage];
  this.step = 1;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  if (this.step < this.history.length) {
    this.history = this.history.slice(0, this.step);
  }

  this.step += 1;
  this.history.push(url);
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  if (this.step - steps < 1) {
    this.step = 1;
  } else {
    this.step -= steps;
  }

  return this.history[this.step - 1];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  if (this.step + steps > this.history.length) {
    this.step = this.history.length;
  } else {
    this.step += steps;
  }

  return this.history[this.step - 1];
};
/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end
