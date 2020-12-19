// https://leetcode.com/problems/two-sum/

// use recursion to find whether a string is a palindrome

// input: string
// output: boolean (true/false)

// base case:
// string of length 1 must return true

// odd num of chars
// aaaaa => true

// even num of chars
// aaaa => true

// take first and last chars and check if they are the same
// if not the same, return false
// else (if the same), return isPalindrome(string slicing off first and last chars)

// Big O
// array slicing and getting length of word is O(n)

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  const firstChar = string[0];
  const lastChar = string[string.length - 1];

  if (firstChar !== lastChar) {
    return false;
  }

  const partialString = string.slice(1, string.length - 1);
  return isPalindrome(partialString)
}

// ex1. raise a car

console.log(isPalindrome('aa'));
