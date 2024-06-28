import { arrUnsortedData } from "../mockData/mockData.js";

/**
 * Implement the Merge Sort algorithm, which recursively divides the array into halves, sorts each half,
 *  and merges them back together in sorted order. 
 * @param {Array} arr - The original array to be sorted.
 * @param {Array} result - Temporary array to store merged results.
 * @param {number} mid - Middle index dividing the array into two halves.
 * @param {number} low - Starting index of the first half.
 * @param {number} high - Ending index of the second half.
 */
const merge = (arr, result, mid, low, high) => {
  let k = low,
    i = low,
    j = mid + 1;

  // Merge the two halves into the result array based on comparison
  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      result[k++] = arr[i++];
    } else {
      result[k++] = arr[j++];
    }
  }

  // Copy any remaining elements from the left half
  while (i <= mid) {
    result[k++] = arr[i++];
  }

  // Copy any remaining elements from the right half
  while (j <= high) {
    result[k++] = arr[j++];
  }

  // Copy the merged elements back to the original array
  for (i = low; i <= high; i++) {
    arr[i] = result[i];
  }
};

/**
 * Merge sort function to recursively divide and merge the array.
 * @param {Array} arr - The array to be sorted.
 * @param {Array} result - Temporary array to store merged results.
 * @param {number} low - Starting index of the array segment to be sorted.
 * @param {number} high - Ending index of the array segment to be sorted.
 */
const mergeSort = (arr, result, low, high) => {
  // Base case: if low equals high, segment is sorted (single element)
  if (low === high) {
    return;
  }

  // Calculate middle index to divide the array into two halves
  let mid = Math.floor((low + high) / 2);

  // Recursively sort the two halves
  mergeSort(arr, result, low, mid);
  mergeSort(arr, result, mid + 1, high);

  // Merge the sorted halves
  merge(arr, result, mid, low, high);
};

// Example usage:
const result = [];
let n = arrUnsortedData.length - 1;
mergeSort(arrUnsortedData, result, 0, n);
console.log(arrUnsortedData);

