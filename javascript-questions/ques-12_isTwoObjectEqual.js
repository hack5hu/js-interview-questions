import { objA, objB } from "../mockData/mockData.js";

/**
 * Compares two objects for deep equality.
 * @param {Object} obj1 - The first object to compare.
 * @param {Object} obj2 - The second object to compare.
 * @returns {boolean} True if the objects are equal, false otherwise.
 */
function isTwoObjectEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    obj1 == null ||
    obj2 == null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return false; // If one is an array and the other is not, they are not equal
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false; // If arrays have different lengths, they are not equal
    }

    for (let i = 0; i < obj1.length; i++) {
      if (!isTwoObjectEqual(obj1[i], obj2[i])) {
        return false; // Recursively check each element of the array
      }
    }
    return true;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false; // If objects have different numbers of keys, they are not equal
  }

  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false; // If keys don't match, they are not equal
    }

    if (!isTwoObjectEqual(obj1[key], obj2[key])) {
      return false; // Recursively check nested objects or primitives
    }
  }

  return true; 

const result = isTwoObjectEqual(objA, objB);
console.log("both objects are equal", result);

