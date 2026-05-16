//Q1: Flatten array
// Using In-build method

function flattenArrayInBuild(input) {
  const result = input.flat(Infinity); // it will auto detect level and flat
  // const result = input.flat(3); // how many deep level user want
  return result;
}

// console.log(flattenArrayInBuild([1, 2, 3, [4, 5, [6]]]));
// OutPut: [ 1, 2, 3, 4, 5, 6 ]
// Time and space Complexity is 0(n) and 0(n)

// Using Reduce
function flattenArray(input) {
  return input.reduce((acc, curr) => {
    console.log(acc, curr);
    if (Array.isArray(curr)) {
      console.log("2", acc, curr);
      return acc.concat(flattenArray(curr));
    }
    return acc.concat(curr);
  }, []);
}

// console.log(flattenArray([1, 2, 3, [4, 5, [6]]]));
//OutPut : [ 1, 2, 3, 4, 5, 6 ]
// Time Complexity and space : O(n), O(n)

// Without using In-Build Method
function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

// const arr = [1, 2, [3, 4], [5, [6, 7]]];

// console.log(flattenArray(arr));
//Out Put: [1, 2, 3, 4, 5, 6, 7]
// O(n)

//Q2:  Find Second Largest Number in the Array

//Using in-build method
function findSecondLargestInBuild(input) {
  const result = [...new Set(input)].sort((a, b) => b - a); // b-a : descending order // a-b : ascending order
  return result[1];
}

// console.log(findSecondLargestInBuild([10, 5, 8, 20, 15]));
//Output : 15
// Time And Space Complexity  : O(n log n), O(n)

// Without in-build method
function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    // console.log("l", largest, "s", secondLargest, "n", num);
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

// console.log(findSecondLargest([10, 5, 8, 20, 15]));
//Output : 15
// Time And Space Complexity : O(n)

// Q3: Remove the Duplicate numbers from the Array
// Input: [1, 2, 3, 2, 4, 1, 5]
// OutPut: [1, 2, 3, 4, 5]

function removeDuplicateInbuiltMethod(input) {
  return [...new Set(input)];
}

// console.log(removeDuplicateInbuiltMethod([1, 2, 3, 2, 4, 1, 5]));
// Time Complexity : O(n)
// Space Complexity : O(n)

// Without using the built-in method
function removeDuplicate(input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (input[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(input[i]);
    }
  }
  return result;
}

// console.log("remove duplicate", removeDuplicate([1, 2, 3, 2, 4, 1, 5]));
// Time-Complexity : O(n²)
// Space - Complexity : O(n)

// Using Object HashMap
function removeDuplicatesWithHashMap(input) {
  let seen = {};
  let result = [];

  for (let num of input) {
    // console.log(num);
    if (!seen[num]) {
      seen[num] = true;
      result.push(num);
    }
  }
  return result;
}

// console.log(
//   "removeDuplicatesWithHashMap",
//   removeDuplicatesWithHashMap([1, 2, 3, 2, 4, 1, 5]),
// );
// Time Complexity : O(n)
// Space Complexity : O(n)

//Q4: Sum of All number in the Array
// Input: [10, 20, 30, 40];
// Output: 100

//Using build in method (Reduce)
function sumOfaArray(input) {
  return input.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
}
// Time Complexity: O(n)
// Space Complexity: O(1)

// console.log("Sum Of a Array", sumOfaArray([10, 20, 30, 40]));

//With out Using build in method
function sumOfArray(input) {
  if (input.largest < 0) return 0;
  let result = 0;
  for (let num of input) {
    result += num;
  }
  return result;
}

console.log(sumOfArray([10, 20, 30, 40]));
// Time Complexity: O(n)
// Space Complexity: O(1)
