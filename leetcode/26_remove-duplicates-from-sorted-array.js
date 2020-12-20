https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

var removeDuplicates = function(nums) {
  let iterator = 1;
  let lastNonDuplicate = 0;

  while (iterator < nums.length) {
    if (nums[iterator] > nums[lastNonDuplicate]) {
      nums[++lastNonDuplicate] = nums[iterator];
    }

    iterator += 1;
  }

  return lastNonDuplicate + 1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
