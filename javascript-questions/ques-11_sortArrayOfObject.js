import { people } from "../mockData/mockData.js";

/**
 * Sorts an array of objects based on the 'name' property.
 * @param {Array} arr - The array of objects to sort.
 * @returns {Array} The sorted array with objects ordered by the 'name' property.
 */
function sortArrayOfObjectMethod1(arr) {
  return arr.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
}
function sortArrayOfObjectMethod2(arr) {
 for (let i = 0; i < arr.length - 1; i++) {
   for (let j = 1; j < arr.length - 1 - i; j++) {
     if (arr[i].name > arr[j + 1]?.name) {
       [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]];
     }
   }
 }
  return arr
}

const result1 = sortArrayOfObjectMethod1(people);
console.log("Sorted Array of Objects:", result1);

const result2 = sortArrayOfObjectMethod2(people);
console.log("Sorted Array of Objects:", result2);




