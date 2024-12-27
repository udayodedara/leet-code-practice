/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let arr = [];
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i]) == false) {
      arr.push(nums[i]);
      nums[k] = arr[k];
      k++;
    }
  }
  return k;
};

// let nums = [1, 1, 2]; // Input array
// console.log("nums", nums);
// let expectedNums = [1, 2]; // The expected answer with correct length

// let k = removeDuplicates(nums); // Calls your implementation
// console.log("nums", nums);
// console.log("k", k);

// console.assert(k === expectedNums.length, "Length mismatch");
// for (let i = 0; i < k; i++) {
//   console.log("nums[i]", nums[i]);
//   console.log("expectedNums[i]", expectedNums[i]);
//   console.assert(nums[i] === expectedNums[i], `Mismatch at index ${i}`);
// }

// removeDuplicates([1, 1, 2]);

// console.log("result ", removeDuplicates([1, 1, 2]));
// console.log("result ", removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
