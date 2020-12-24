// Given a sorted array of numbers, find if a given number ‘key’ is present in
// the array. Though we know that the array is sorted, we don’t know if it’s
// sorted in ascending or descending order.
// You should assume that the array can have duplicates.

// Write a function to return the index of the ‘key’ if it is present in the array,
// otherwise return -1.

// Example 1:

// Input: [4, 6, 10], key = 10
// Output: 2

// Example 2:

// Input: [1, 2, 3, 4, 5, 6, 7], key = 5
// Output: 4

// Example 3:

// Input: [10, 6, 4], key = 10
// Output: 0

// Example 4:

// Input: [10, 6, 4], key = 4
// Output: 2

const binary_search = function(arr, key) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === key) {
      return mid;
    }

    if (arr[right] >= arr[left]) {
      if (arr[mid] > key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (arr[mid] < key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return - 1;
};

console.log(binary_search([4, 6, 10], 10)); // 2
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5)); // 4
console.log(binary_search([10, 6, 4], 10)); // 0
console.log(binary_search([10, 6, 4], 4)); // 2
