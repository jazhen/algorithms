// Given an array of positive numbers and a positive number ‘S’,
// find the length of the smallest contiguous subarray whose sum is
// greater than or equal to ‘S’. Return 0, if no such subarray exists.

// Example 1:

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal
//  to '7' is [5, 2].

// Example 2:

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal
//  to '7' is [8].

// Example 3:

// Input: [3, 4, 1, 1, 6], S=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal
//  to '8' are [3, 4, 1] or [1, 1, 6].

// variables: windowStart = 0, windowEnd = 0, minSumLength = 0, currentWindowSum = 0

// outer for loop,
// add the current num to  currWindowSum

// inner while loop => while currWindowSum >= s
// substract the element at windowStart
// increment windowStart

// return minSumLength

const smallest_subarray_with_given_sum = function(s, arr) {
  let windowStart = 0;
  let currentWindowSum = 0;
  let minSumLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) { // 0 1 2 3
    currentWindowSum += arr[windowEnd]; // 2 3 8 // 8

    while (currentWindowSum >= s) { // s = 7
      const windowLength = windowEnd - windowStart + 1; // 3
      if (windowLength < minSumLength) {
        minSumLength = windowLength;
      }

      currentWindowSum -= arr[windowStart]; // 6 7
      windowStart += 1; // 1 2
    }
  }

  return minSumLength;
};

console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])); // 2
console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])); // 1
console.log(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])); // 3
