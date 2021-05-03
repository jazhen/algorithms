/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 *
 * https://leetcode.com/problems/product-of-array-except-self/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * time: O(nums.length)
 * space: O(1) (ans array doesn't count for space complexity)
 */
 var productExceptSelf = function(nums) {
  /** initially contains the product of all the numbers to the left of i */
  const ans = new Array(nums.length).fill(0);
  ans[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    ans[i] = nums[i - 1] * ans[i - 1];
  }


  /** keeps the product of all numbers to the right of i */
  let productOfRight = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = ans[i] * productOfRight;
    productOfRight *= nums[i];
  }

  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * time: O(nums.length)
 * space: O(nums.length)
 */
var productExceptSelf = function(nums) {
  /** contains the product of all the numbers to the left of i */
  const productOfLeft = new Array(nums.length).fill(0);
  productOfLeft[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    productOfLeft[i] = nums[i - 1] * productOfLeft[i - 1];
  }

  /** contains the product of all the numbers to the right of i */
  const productOfRight = new Array(nums.length).fill(0);
  productOfRight[productOfRight.length - 1] = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    productOfRight[i] = nums[i + 1] * productOfRight[i + 1];
  }

  /** get the product except self */
  const ans = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    ans[i] = productOfLeft[i] * productOfRight[i];
  }

  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * time: O(nums.length)
 * space: O(1)
 */
 var productExceptSelfWithDivision = function(nums) {
  let zeroCount = 0;
  let product = 1;

  for (const n of nums) {
    if (n === 0) {
      zeroCount += 1;
      continue;
    }

    product *= n;
  }

  const ans = [];

  for (const n of nums) {
    if (zeroCount === 1) {
      if (n === 0) {
        ans.push(product);
      } else {
        ans.push(0);
      }
    } else if (zeroCount > 1) {
      ans.push(0);
    } else {
      ans.push(product / n);
    }
  }

  return ans;
};
// @lc code=end

