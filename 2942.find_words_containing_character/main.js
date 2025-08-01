/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  const ind = [];
  words.forEach((el, i) => {
    console.log("el i", el, i);
    if (el.includes(x)) {
      ind.push(i);
    }
  });
  return ind;
};

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
