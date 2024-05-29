import { arrData } from "./mockData/mockData.js";

const binarySearch = (arr, k, low, high) => {
  
  if (high < low) {return -1};
  let mid = low + Math.floor((high - low)/2)

  if (arr[mid]===k) {
    return mid;
  } else if(arr[mid]<k){
    return binarySearch(arr,k,mid+1, high )
  }else{
    return binarySearch(arr, k,low, mid-1 )  }
};

let element= 4
const result = binarySearch(arrData, element, 0, arrData.length-1)
console.log(`Index of ${element} in array is ${result}` );