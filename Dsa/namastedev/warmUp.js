/**
 * Write a function countDigits(n)that takes an integer n and returns how many digits it contains.
 * Input : 289 / Output: 3
 */

function countDigits(num) {
  if (num === 0) return 1;

  let n = Math.abs(num);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(`Number of digits in this number ${289}`, countDigits(289));

/**
 * Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.
 * input : 383 // Output: true
 */

function isPalindrome(num) {
  if (num < 0) return false;
  let tempNum = num;
  let reverse = 0;
  while (num > 0) {
    let reminder = num % 10;
    reverse = reverse * 10 + reminder;
    num = Math.floor(num / 10);
  }

  return tempNum === reverse;
}

console.log(`This is given number ${3832} isPalindrome: ${isPalindrome(3832)}`);

/**
 * Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.
 * Input:123 Output:321, Input:-123 Output:-321 ,Input:1534236469 Output:0 (overflow)
 */

function reverse(num) {
  let copy = num;
  num = Math.abs(num);
  const reverse = 0;
  while (num > 0) {
    let reminder = num % 10;
    reverse = reverse * 10 + reminder;
    num = Math.floor(num / 10);
  }

  if (rev > 2 ** 31 - 1) return 0;

  return copy < 0 ? -reverse : reverse;
}
