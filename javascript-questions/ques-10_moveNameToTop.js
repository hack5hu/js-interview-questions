import { people } from "../mockData/mockData.js";

/**
 * Moves the object with the specified name to the top of the array.
 * @param {Array} arr - The array of objects to be rearranged.
 * @param {string} name - The name of the object to move to the top.
 * @param {boolean} firstMethod - If true, use the first method; otherwise, use the second method.
 * @returns {Array} The rearranged array with the specified name at the top.
 */
function moveNameToTop(arr, name, firstMethod) {
  const nameIndex = arr.findIndex((data) => data.name === name);
  //First Method
  if (firstMethod) {
    const newArr = [];
    newArr.push(arr[nameIndex]);
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].name !== name) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  //Second Method
  else {
    if (nameIndex !== -1) {
      const [item] = arr.splice(nameIndex, 1);
      arr.unshift(item);
    }
    return arr;
  }
}
const result1 = moveNameToTop(people, "Alice");
const result2 = moveNameToTop(people, "Alice", true);

console.log("Using the custom Method 1 => ", result1);
console.log("Using the HOF Method 2 => ", result2);

