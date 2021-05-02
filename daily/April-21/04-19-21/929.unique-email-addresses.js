/*
 * @lc app=leetcode id=929 lang=javascript
 *
 * [929] Unique Email Addresses
 *
 * https://leetcode.com/problems/unique-email-addresses/
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 *
 * time: O(n * m), where n = emails.length and m = the max email length
 * space: O(n)
 */
var numUniqueEmails = function(emails) {
  const set = new Set();

  for (const email of emails) {
    let [localName, domainName] = email.split('@');

    /** parse local name */
    if (localName.includes('+')) {
      localName = email.slice(0, email.indexOf('+'));
    }

    localName = localName.split('.').join('');

    set.add(localName + '@' + domainName);
  }

  return set.size;
};
// @lc code=end

