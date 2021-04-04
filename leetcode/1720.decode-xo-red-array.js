// https://leetcode.com/problems/decode-xored-array/

/*
 * @lc app=leetcode id=1720 lang=javascript
 *
 * [1720] Decode XORed Array
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  const n = encoded.length + 1;
  const decoded = [first]

  let i = 0;

  while (decoded.length < n) {
    decoded.push(encoded[i] ^ decoded[i]);
    i += 1;
  }

  return decoded;
};

// 2 ^ 2 = 0
// 0 ^ 2 = 2

// arr[0] ^ encoded[0]
// encoded[0] === arr[0] ^ arr[1]
//  = arr[0] ^ arr[0] ^ arr[1] === arr[1]

// get arr[1] from first and encoded
//   arr[1] = first ^ encoded[0]

// now we have arr = [first, arr[1]]
// we need to get n total non-negative numbers
//   n = encoded.length + 1

// start i at 0
// while arr is not length n
//   push the next number into it
//   this is arr[i] XOR arr[1 + 1]

// encoded = [1,2,3], first = 1
// decoded = [1,0,2]

// 2 XOR encoded[i] = 3

// 1 ^ 1 = 0

// i: 0, decoded.length = 2 < 4
// next: 1 ^ 0 =

// @lc code=end

