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
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 4, 0, arr.length-1));