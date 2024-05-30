import { arrUnsortedData } from "../mockData/mockData.js";

const merge = (arr, result, mid, low, high) => {
  let k = low,
      i = low,
      j = mid + 1;
  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      result[k++] = arr[i++];
    } else {
      result[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    result[k++] = arr[i++];
  }
  while (j <= high) {
    result[k++] = arr[j++];
  }
  for (i = low; i <= high; i++) {
    arr[i] = result[i];
  }
};

const mergeSort = (arr, result, low, high) => {
  if (low === high) {
    return;
  }
  let mid = Math.floor((low + high) / 2);

  mergeSort(arr, result, low, mid);
  mergeSort(arr, result, mid + 1, high);
  merge(arr, result, mid, low, high);
};

const result = [];
let n = arrUnsortedData.length - 1;
const res = mergeSort(arrUnsortedData, result, 0, n);
console.log(arrUnsortedData);
