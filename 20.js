/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (const i in s) {
    const char = s[i];
    console.log("char", char);
    if (char === "(") {
      stack.push(")");
    } else if (char === "[") {
      stack.push("]");
    } else if (char === "{") {
      stack.push("}");
    } else if (stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log("isValid", isValid("(]"));
