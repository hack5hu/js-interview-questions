import { arrUnsortedData } from "../mockData/mockData.js";

/**
 * Implement a function to find the second largest number in an array of integers.
 * @param {Array} arr The array of numbers to find the second largest number from.
 * @returns {number} The second largest number in the array.
 */
const secondLargestNoMethodOne = (arr) => {
  if (arr.length === 1) return;
  let max = Math.max(...arr);
  const max2 = arr.filter((item) => item !== max);
  return Math.max(...max2);
};

console.log("methodOne===>", secondLargestNoMethodOne(arrUnsortedData));

/**
 * Implement a function to find the second largest number in an array of integers.
 * Returns `null` if the array has fewer than 2 elements.
 * @param {Array} arr The array of numbers to find the second largest number from.
 * @returns {number|null} The second largest number in the array, or `null` if not found.
 */
const secondLargestNoMethodTwo = (arr) => {
  if (arr.length < 2) return null;

  let max = -Infinity;
  let max2 = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max2 = max;
      max = arr[i];
    } else if (arr[i] > max2 && arr[i] !== max) {
      max2 = arr[i];
    }
  }

  return max2 === -Infinity ? null : max2;
};

console.log("methodTwo===>", secondLargestNoMethodTwo(arrUnsortedData));




