// https://leetcode.com/problems/reformat-date/

/*
 * @lc app=leetcode id=1507 lang=javascript
 *
 * [1507] Reformat Date
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  const months = {
    "Jan": '01',
    "Feb": '02',
    "Mar": '03',
    "Apr": '04',
    "May": '05',
    "Jun": '06',
    "Jul": '07',
    "Aug": '08',
    "Sep": '09',
    "Oct": '10',
    "Nov": '11',
    "Dec": '12'
  }

  date = date.split(' ');
  const day = parseInt(date[0].slice(0, 2)).padStart(2, '0');
  const month = months[date[1]];
  const year = date[2];

  return year + '-' + month + '-' + day;
};
// @lc code=end

