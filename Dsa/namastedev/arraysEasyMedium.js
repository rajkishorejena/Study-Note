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

/**
 * Leet Code: 121. Best Time to Buy and Sell Stock
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * Input: prices = [7,1,5,3,6,4] // Output: 5
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }

    if (min > prices[i]) {
      min = prices[i];
    }
  }
  return maxProfit;
};

console.log("Max Profit [7,1,5,3,6,4]", maxProfit([7, 1, 5, 3, 6, 4]));

/**
 * Leet Code: 485. Max Consecutive Ones
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * Input: nums = [1,1,0,1,1,1] // Output: 3
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let currentCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
      maxCount = Math.max(currentCount, maxCount);
    } else {
      currentCount = 0;
    }
  }
  return Math.max(currentCount, maxCount);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

/**
 * Leet Code: 136. Missing Number
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 * Input: nums = [3,0,1] , // Output: 2
 * n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let actualTotal = (n * (n + 1)) / 2;
  let arrTotal = 0;
  for (let i = 0; i < n; i++) {
    arrTotal = arrTotal + nums[i];
  }

  return actualTotal - arrTotal;
};

/**
 * Leet Code : 136. Single Number
 * Given a non-empty array of integers nums, every element appears twice except for one.
 * Find that single one.
 * Input: nums = [2,2,1] // Output: 1
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// Approach  : 1
// const singleNumber = function (nums) {
//   let numsObj = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (!numsObj[nums[i]]) {
//       numsObj[nums[i]] = 1;
//     } else {
//       numsObj[nums[i]]++;
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (numsObj[nums[i]] == 1) {
//       return nums[i];
//     }
//   }
// };

// Better Approach : 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
