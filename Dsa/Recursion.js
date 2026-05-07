//Recursion
// Wind // Unwind
//Itrative Approch - Loop
// Find the sum of Array

function sumOfArray(arr) {
  if (!arr.length > 0) return 0;

  let sum = 0;
  for (number of arr) {
    sum += number;
  }

  return sum;
}

// console.log("Sum of Array",sumOfArray([1,2,3,4]))

// Recusive Approch

function sumOfArrayRecursive(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumOfArrayRecursive(arr.splice(1));
}
// console.log("Sum of Array in Recursive Approch",sumOfArrayRecursive([1,2,3,4]))

//Reverse A String in Itrative Approch
function reverseString(str) {
  let rever_str = "";
  for (char of str) {
    rever_str = char + rever_str;
  }
  return rever_str;
}

// console.log("Reverse a string", reverseString("Hello"))

//Reverse A String in Recursive Approch
function reverseStringRecursive(str) {
  if (str.length <= 0) {
    return str;
  }

  return reverseStringRecursive(str.slice(1)) + str[0];
}

// console.log("Reverse a string In Recusive", reverseStringRecursive("Hello"))

// Factorial of Number in Itrative Approch
//0! = 1! = 1
// 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorialOfNumber(num) {
  let result = 1;
  for (let i = 1; i < num + 1; i++) {
    result *= i;
  }
  return result;
}

// console.log("factorialOfNumber -- ",factorialOfNumber(5));

// Factorial of Number in Recusive Approch
// 5! = 5 * 4 * 3 * 2 * 1 = 120
//0! = 1! = 1
function factorialOfNumberRecursive(num) {
  if (num == 1 || num == 0) {
    return 1;
  }
  return num * factorialOfNumberRecursive(num - 1);
}

// console.log("factorialOfNumberRecursive Approch -- ", factorialOfNumberRecursive(4))

//fibonacci series in Itrative Approch
// 0,1,1,2,3,5,8,13,21,34...
function fibonacciSeries(num) {
  if (num <= 1) return num;
  let num1 = 0;
  let num2 = 1;
  for (let i = 2; i <= num; i++) {
    let next = num1 + num2;
    num1 = num2;
    num2 = next;
  }
  return num2;
}

// console.log("fibonacciSeries -Itrative Approch ---",fibonacciSeries(10))

////fibonacci series in Recursive Approch
//0,1,1,2,3,5,8,13,21,34...
function fibonacciSeriesRecursive(num) {
  if (num <= 1) return num;
  return (
    factorialOfNumberRecursive(num - 1) + factorialOfNumberRecursive(num - 2)
  );
}

// console.log("fibonacciSeries -Recursive Approch ---",fibonacciSeries(10)) // O(2*n)

//Function to Generate the Full fibonacci Series
function generateFullFibSeries(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];

  const series = [0, 1];

  for (let i = 2; i < num; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series;
}

console.log(generateFullFibSeries(10));
