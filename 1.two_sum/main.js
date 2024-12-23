/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < i; k++) {
      if (nums[i] + nums[k] === target) {
        return (result = [k, i]);
      }
    }
  }
};
