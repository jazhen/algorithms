// https://leetcode.com/problems/maximum-number-of-balloons/

const maxNumberOfBalloons = function(text) {
  const textLetterCount = new Map();

  for (const char of text) {
    if (textLetterCount.has(char)) {
      const prevCount = textLetterCount.get(char);
      textLetterCount.set(char, prevCount + 1);
    } else {
      textLetterCount.set(char, 1);
    }
  }

  const match = 'balloon';
  const matchLetterCount = new Map();

  for (const char of match) {
    if (matchLetterCount.has(char)) {
      const prevCount = matchLetterCount.get(char);
      matchLetterCount.set(char, prevCount + 1);
    } else {
      matchLetterCount.set(char, 1);
    }
  }

  let minInstances = Infinity;

  for (const [key, val] of matchLetterCount.entries()) {
    if (!textLetterCount.has(key)) {
      minInstances = 0;
    } else {
      const possibleInstances = Math.floor(textLetterCount.get(key) / val);
      minInstances = Math.min(minInstances, possibleInstances);
    }
  }

  return minInstances;
};

console.log(maxNumberOfBalloons('nlaebolko'));
console.log(maxNumberOfBalloons('loonbalxballpoon'));
console.log(maxNumberOfBalloons('leetcode'));
