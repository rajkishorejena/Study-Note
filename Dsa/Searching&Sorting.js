/*
 Linear Search
 This function performs a linear search on an array to find the index of a target value.
*/
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the target is found
    }
  }
  return -1; // Return -1 if the target is not found
}
linearSearch([1, 2, 3, 4, 5], 3); // Returns 2
// This approach has a time complexity of O(n) and a space complexity of O(1) since it uses only a few variables for indexing.

/*
Binary Search
 This function performs a binary search on a sorted array to find the index of a target value.
 https://leetcode.com/problems/binary-search/description/
 
 Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let middle = Math.floor((right + left) / 2);
    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));

// The function uses a while loop to repeatedly divide the search space in half until the target is found or the search space is empty.
// It calculates the middle index and compares the target with the value at that index.
// If the target is found, it returns the index; if the target is less than the middle value, it narrows the search to the left half; otherwise, it narrows to the right half.
// The function returns -1 if the target is not found in the array.
// This approach has a time complexity of O(log n) and a space complexity of O(1) since it uses only a few variables for indexing.

/*
Bubble Sort
 This function sorts an array using the bubble sort algorithm.
*/
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

console.log(bubbleSort([10, -22, 54, 3, 4, 45, 6]));
// The function uses a nested loop to repeatedly compare adjacent elements and swap them if they are in the wrong order.
// The outer loop runs n-1 times, and the inner loop runs n-i-1 times, where n is the length of the array.
// If no swaps are made during an inner loop iteration, the array is already sorted, and the function breaks out of the loop early.
// This approach has a time complexity of O(n^2) in the worst case and a space complexity of O(1) since it uses only a few variables for indexing and swapping.

/**
 * Selection Sort
 * This function sorts an array using the selection sort algorithm.
 * Selection sort works by repeatedly selecting the smallest unsorted element and swapping it with the first unsorted element until the entire array is sorted.
 * The function uses a nested loop to find the minimum element in the unsorted portion of the array and swap it with the first unsorted element.
 * The outer loop runs n-1 times, and the inner loop runs i+1 to n times, where n is the length of the array.
 * This approach has a time complexity of O(n^2) in the worst case and a space complexity of O(1) since it uses only a few variables for indexing and swapping.
 * Space complexity is O(1) because it sorts the array in place without using any additional data structures.
 */

let arr = [7, 1, 5, 4, 3, 2];

function selectionSort(a) {
  let n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }
  return a;
}

console.log(selectionSort(arr));
