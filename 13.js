/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const digitMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i <= s.length - 1; i++) {
    const curr = digitMap[s[i]];
    console.log("curr", i, s[i], curr);
    const prev = digitMap[s[i - 1]];
    const next = digitMap[s[i + 1]];
    console.log("next", i, s[i + 1], next);
    console.log("prev", i, s[i - 1], prev);

    total += curr;

    if (prev) {
      if (curr > prev) {
        total -= prev;
      }
      //   if (curr === prev) {
      //     total += curr;
      //   }
    }

    if (next) {
      if (next > curr) {
        total -= curr;
      }
    }

    console.log("total", total);
  }

  return total;
};

// console.log("romanToInt IV", romanToInt("IV"));
// console.log("romanToInt III", romanToInt("III"));
// console.log("romanToInt LVIII", romanToInt("LVIII"));
console.log("romanToInt MCMXCIV", romanToInt("MCMXCIV"));
