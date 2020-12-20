// Given an array of positive numbers and a positive number ‘k’,
// find the maximum sum of any contiguous subarray of size ‘k’.

// Example 1:

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// Example 2:

// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

// input: k<int>, arr<array>
// output: <int>

// vars: max_sum, curr_sum,

// for loop through arr
// add arr[windowEnd] to the curr_sum

// once windowEnd is <= k - 1
// set max_sum to curr_sum if curr_sum > max_sum
// substract curr_sum by arr[windowStart]
// increment windowStart by 1

// return max_sum at the end

const max_sub_array_of_size_k = function(k, arr) {
  let windowStart = 0;
  let currWindowSum = 0;
  let maxWindowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) { // 0 1 2 3 4
    currWindowSum += arr[windowEnd]; // 2 3 8 // 6 7 // 6 9 // 4

    if (windowEnd >= k - 1) {
      if (currWindowSum > maxWindowSum) {
        maxWindowSum = currWindowSum // 8 9
      }

      currWindowSum -= arr[windowStart];
      windowStart += 1; // 1 2 3
    }
  }

  return maxWindowSum;
};

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])); // 7
