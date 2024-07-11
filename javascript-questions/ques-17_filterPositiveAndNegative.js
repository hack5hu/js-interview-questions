import { unsortedArray } from "../mockData/mockData.js";

/**
 * Sorts an array of numbers using the insertion sort algorithm.
 * @param {Array} arr - The array of numbers to sort.
 * @returns {Array} The sorted array using the insertion sort algorithm.
 */

const filterArrayMethod1 = (arr) => {
  const positiveArr = [];
  const negativeArr = [];
  arr.forEach((element) => {
    if (element > 0) positiveArr.push(element);
    else negativeArr.push(element);
  });
  return [...positiveArr, ...negativeArr];
};

const filterArrayMethod2 = (arr) => {
  const result = [];
  let positiveIndex = 0;
  let negativeIndex = arr.length - 1;
  arr.forEach((element) => {
    if (element >= 0) {
      result[positiveIndex++] = element;
    } else {
      result[negativeIndex--] = element;
    }
  });
  return result;
};


const result1 = filterArrayMethod1(unsortedArray);
console.log(result1);
const result2 = filterArrayMethod2(unsortedArray);
console.log(result2);





