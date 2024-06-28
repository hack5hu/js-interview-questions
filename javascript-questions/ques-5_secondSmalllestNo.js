import { arrUnsortedData } from "../mockData/mockData.js";

/**
 * Implement a function to find the second smallest number in an array of integers.
 * Returns `undefined` if the array has fewer than 2 elements.
 * @param {Array} arr The array of numbers to find the second smallest number from.
 * @returns {number|undefined} The second smallest number in the array, or `undefined` if not found.
 */
const secondSmallestNo = (arr) => {
  if (arr.length < 2) return undefined;

  const smallest = Math.min(...arr);
  const filteredArr = arr.filter(num => num !== smallest);
  return Math.min(...filteredArr);
};



console.log('Second smallest ->', secondSmallestNo(arrUnsortedData));