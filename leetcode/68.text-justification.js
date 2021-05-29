/*
 * @lc app=leetcode id=68 lang=javascript
 *
 * [68] Text Justification
 *
 * https://leetcode.com/problems/text-justification/
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
 var fullJustify = function(words, maxWidth) {
  let lineStartWordIndex = 0;
  let justifiedLines = [];

  while (lineStartWordIndex < words.length) {
    const lineEndWordIndex = getLineEndWord(words, maxWidth, lineStartWordIndex);
    const justifiedLine = getJustifiedLine(words, maxWidth, lineStartWordIndex, lineEndWordIndex);

    justifiedLines.push(justifiedLine);
    lineStartWordIndex = lineEndWordIndex + 1;
  }

  return justifiedLines;
};

function getLineEndWord(words, maxWidth, lineStartWordIndex) {
  let lineWidth = words[lineStartWordIndex].length;
  let lineEndWordIndex = lineStartWordIndex + 1;

  while (lineEndWordIndex < words.length) {
    if (lineWidth + words[lineEndWordIndex].length + 1 > maxWidth) break;

    lineWidth += words[lineEndWordIndex].length + 1;
    lineEndWordIndex += 1;
  }

  return lineEndWordIndex - 1;
}

function getJustifiedLine(words, maxWidth, lineStartWordIndex, lineEndWordIndex) {
  let line = '';

  // if we're on the last line or the number of words in the line is 1 we left justify
  if (lineEndWordIndex === words.length - 1 || lineEndWordIndex - lineStartWordIndex === 0) {
    for (let i = lineStartWordIndex; i <= lineEndWordIndex; i++) {
      line += words[i];

      if (i < lineEndWordIndex) {
        line += ' ';
      }
    }

    line += addPaddingSpaces(maxWidth - line.length);
  } else {
    const totalWordsLength = getTotalWordsLength(words, lineStartWordIndex, lineEndWordIndex);
    const numWords = lineEndWordIndex - lineStartWordIndex + 1;
    const numSpaces = (maxWidth - totalWordsLength) / (numWords - 1);
    let remainder = (maxWidth - totalWordsLength) % (numWords - 1);

    for (let i = lineStartWordIndex; i <= lineEndWordIndex; i++) {
      line += words[i];

      if (i === lineEndWordIndex) break;

      const numSpacesAfterWord = numSpaces + (remainder > 0 ? 1 : 0);
      line += addPaddingSpaces(numSpacesAfterWord);
      remainder -= 1;
    }
  }

  return line;
}

function getTotalWordsLength(words, lineStartWordIndex, lineEndWordIndex) {
  let wordLength = 0;

  for (let i = lineStartWordIndex; i <= lineEndWordIndex; i++) {
    wordLength += words[i].length;
  }

  return wordLength;
}

function addPaddingSpaces(length) {
  return ' '.repeat(length);
}
// @lc code=end

