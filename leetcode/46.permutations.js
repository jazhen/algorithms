// https://leetcode.com/problems/permutations/

/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  const permutations = [[]];

  // for each num of the input
  for (let i = 0; i < nums.length; i++) {
    let permutationsLength = permutations.length;

    // add the num to each permutation
    for (let j = 0; j < permutationsLength; j++) {
      let oldPermutation = permutations.shift();

      // add the number to each index of the current permutation
      for (let k = 0; k < oldPermutation.length + 1; k++) {
        let newPermutation = [...oldPermutation];
        newPermutation.splice(k, 0, nums[i]);

        // if the new permutation has all nums, add in the the final result
        if (newPermutation.length === nums.length) {
          result.push([...newPermutation]);
        } else {
          permutations.push([...newPermutation]);
        }
      }
    }
  }

  return result;
};
// @lc code=end
