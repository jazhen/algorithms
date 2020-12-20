// Given an array of sorted numbers and a target sum,
// find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair)
//  such that they add up to the given target.

// Example 1:

// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

// Example 2:

// Input: [2, 5, 9, 11], target=11
// Output: [0, 2]
// Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

// 2 ptrs, start and end index
// if sum > target_sum
// decrement the end ptr
// if sum < target_sum
// increment the start ptr
// else, sum === target_sum
// return [start ptr, end ptr]

// if start ptr > end ptr and not returned yet, return undef

const pair_with_targetsum = function(arr, target_sum) {
  let startPtr = 0;
  let endPtr = arr.length - 1;

  while (startPtr < endPtr) {
    const currSum = arr[startPtr] + arr[endPtr];

    if (currSum > target_sum) {
      endPtr -= 1;
    } else if (currSum < target_sum) {
      startPtr += 1;
    } else {
      return [startPtr, endPtr];
    }
  }

  return [-1, -1];
}

console.log(pair_with_targetsum([1,2,3,4,6], 6)); // [1, 3]
console.log(pair_with_targetsum([2,5,9,11], 11)); // [0, 2]
