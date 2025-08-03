// count-subarray-of-length-three-with-a-condition
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubArrays = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    const subarray = [];
    console.log("nums[i + 2]", nums[i + 2]);
    if (nums[i + 2] !== undefined) {
      for (let j = 0; j <= 2; j++) {
        subarray.push(nums[i + j]);
      }
    } else {
      break;
    }
    const first = subarray[0];
    const middle = subarray[1];
    const third = subarray[2];
    if (first + third === middle / 2) {
      result += 1;
    }
    console.log(subarray);
  }

  return result;
};

console.log(countSubArrays([-1, -2, 0]));
