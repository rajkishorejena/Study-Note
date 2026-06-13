/**
 * Given an integer array nums sorted in non-decreasing order,
 *  remove the duplicates in-place such that each unique element appears only once.
 *  The relative order of the elements should be kept the same.
 *  Then return the number of unique elements in nums
 * Input: nums = [0,0,1,1,1,2,2,3,3,4] , Output: 5
 * LeetCode: 26. Remove Duplicates from Sorted Array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let n = nums.length;
  let x = 0; //uniquePointer
  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};
console.log(
  `number of unique element in this Array [0,0,1,1,1,2,2,3,3,4] is ${removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])}`,
);

/**
 * LeetCode: 27. Remove Element
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 *  The order of the elements may be changed.
 *  Then return the number of elements in nums which are not equal to val.
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2 // Output: 5
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = function (nums, val) {
  let n = nums.length;
  let x = 0; //uniquePointer
  for (let i = 0; i < n; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};

console.log(
  `Remove the given val 2 from this Array [0,1,2,2,3,0,4,2] and length is ${removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)}`,
);

/**
 * Leet code: 344. Reverse String
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * Input: s = ["H","a","n","n","a","h"] // Output: ["h","a","n","n","a","H"]
 */

const reverseString = function (s) {
  let length = s.length;
  let halfLen = Math.floor(length / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[length - 1 - i];
    s[length - 1 - i] = temp;
  }
  return s;
};

console.log(`${reverseString(["H", "a", "n", "n", "a", "h"])}`);
