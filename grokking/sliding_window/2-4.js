// Given a string, find the length of the longest substring in it with
// no more than K distinct characters.

// Example 1:

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than
// '2' distinct characters is "araa".

// Example 2:

// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than
// '1' distinct characters is "aa".

// Example 3:

// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than
// '3' distinct characters are "cbbeb" & "bbebi".

const longestSubstringWithKDistinct = function(str, k) {
  let windowStart = 0;
  let numDistinct = 0;
  let longest = 0;
  let counts = new Map();

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const endChar = str[windowEnd];
    if (!counts.get(endChar)) {
      numDistinct += 1;
    }
    counts.set(endChar, (counts.get(endChar) || 0) + 1);


    while (numDistinct > k) {
      startChar = str[windowStart];
      counts.set(startChar, counts.get(startChar) - 1);
      if (counts.get(startChar) === 0) {
        numDistinct -= 1;
      }
      windowStart += 1;
    }

    longest = Math.max(longest, windowEnd - windowStart + 1);
  }

  return longest;
}

console.log(longestSubstringWithKDistinct('araaci', 2)); // 4
console.log(longestSubstringWithKDistinct('araaci', 1)); // 2
console.log(longestSubstringWithKDistinct('cbbebi', 3)); // 5

// init start and end ptrs to 0
// init an object hash to hold the current window substring char counts
// init longest substring to 0

// while end is less than str.length
//  set char to str[end]
//  increment hash[char] by 1
//  set longest substring to the max of longest substring and end - start + 1
//  while hash[char] > k
//    decrement hash[str[start]]
//    increment start by 1
//  increment end by 1
