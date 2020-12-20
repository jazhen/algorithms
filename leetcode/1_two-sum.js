// https://leetcode.com/problems/two-sum/

// use a Map
// for loop from 0 to nums.length
// calc target - nums[i], call this difference
// check if nums[i] is already a key in the Map
// if it is, return [Map.get(i), i]
// else store Map[difference] with the value of i, the current index

const twoSum = function(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }

    const difference = target - nums[i];
    map.set(difference, i);
  }
};
