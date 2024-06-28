import { arrData } from "../mockData/mockData.js";

/**
 * Implement a binary search function that takes a sorted array and a target value,
 * returning the index of the target value if found, or `-1` if not.
 * @param {*} arr array
 * @param {*} ele element
 * @param {*} low low
 * @param {*} high high
 * @returns index of the element if found, otherwise `-1`
 */
const binarySearch = (arr, ele, low, high) => {
  if (high < low) {
    return -1;
  }

  let mid = Math.floor((high + low) / 2);

  if (arr[mid] === ele) {
    return mid; // Element found, return index
  } else if (arr[mid] < ele) {
    return binarySearch(arr, ele, mid + 1, high); // Search in the right half
  } else {
    return binarySearch(arr, ele, low, mid - 1); // Search in the left half
  }
};

let element = 4;
const result = binarySearch(arrData, element, 0, arrData.length - 1);

console.log(`Index of ${element} in the array is ${result}`);
