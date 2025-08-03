/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const string = x.toString();
  const revString = reverseString(string);
  return string === revString;
};

function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    console.log("string", string[i]);
    newString += string[i];
  }
  return newString;
}

console.log("isPalindrome", isPalindrome("oho"));
