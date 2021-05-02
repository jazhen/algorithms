/*
 * @lc app=leetcode id=811 lang=javascript
 *
 * [811] Subdomain Visit Count
 *
 * https://leetcode.com/problems/subdomain-visit-count/
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
  const visitCount = {};

  for (const cpdomain of cpdomains) {
    let [count, domain] = cpdomain.split(' ');

    let subdomains = domain.split('.');

    for (let i = 0; i < subdomains.length; i++) {
      let subdomain = subdomains.slice(i).join('.');

      if (!(subdomain in visitCount)) {
        visitCount[subdomain] = 0;
      }

      visitCount[subdomain] += Number(count);
    }
  }

  return Object.entries(visitCount).map(([subdomain, count]) => [count, subdomain].join(' '));
};
// @lc code=end

