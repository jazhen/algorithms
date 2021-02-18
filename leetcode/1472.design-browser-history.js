// https://leetcode.com/problems/design-browser-history/

/*
 * @lc app=leetcode id=1472 lang=javascript
 *
 * [1472] Design Browser History
 */

// @lc code=start
/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.currentStep = 1;
  this.history = [homepage];
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.history = this.history.slice(0, this.currentStep);
  this.currentStep += 1;
  this.history.push(url);
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  if (this.currentStep - steps - 1 < 0) {
    this.currentStep = 1;
  } else {
    this.currentStep -= steps;
  }

  return this.history[this.currentStep - 1];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  if (this.currentStep + steps > this.history.length) {
    this.currentStep = this.history.length;
  } else {
    this.currentStep += steps;
  }

  return this.history[this.currentStep - 1];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end
