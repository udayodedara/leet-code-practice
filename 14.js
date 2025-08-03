/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const res = [];
  for (let i = 0; i <= strs.length - 1; i++) {
    const string = strs[i].split("");
    for (let j = 0; j <= string.length - 1; j++) {
      if (i === 0) {
        res.push(string[j]);
      } else if (res[j] !== string[j]) {
        res.splice(j);
      }
    }
    if (res.length > string.length) {
      res.splice(string.length);
    }
  }
  return res.join("");
};

// console.log("longestCommonPrefix", longestCommonPrefix(["ab", "a"]));
console.log(
  "longestCommonPrefix",
  longestCommonPrefix(["flower", "flower", "flower", "flower"])
);
