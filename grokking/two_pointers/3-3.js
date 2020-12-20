// Given an array of sorted numbers, remove all duplicates from it.
// You should not use any extra space; after removing the duplicates
// in-place return the new length of the array.

// Example 1:

// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates
// will be [2, 3, 6, 9].

// Example 2:

// Input: [2, 2, 2, 11]
// Output: 2
// Explanation: The first two elements after removing the duplicates
// will be [2, 11].

// while ptr2 < arr.length
// ptr1 = 0; ptr2 = 1;
// if arr[ptr1] === arr[ptr2]
// delete arr[ptr2] and increment ptr2

// else arr[ptr1] doesn't have duplicates
// so incrment ptr1 and ptr2

const remove_duplicates = function(arr) {
  let ptr1 = 0;
  let ptr2 = 1;

  while (ptr2 < arr.length) {
    if (arr[ptr1] === arr[ptr2]) {
      arr.splice(ptr2, 1);
    } else {
      ptr1 += 1;
      ptr2 += 1;
    }
  }

  return arr.length;
};

console.log(remove_duplicates([2,3,3,3,6,9,9])); // 4
console.log(remove_duplicates([2,2,2,11])); // 2
