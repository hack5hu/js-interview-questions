import { arrData } from "../mockData/mockData.js";

/**
 * Creates a new array with all elements that pass the test implemented by the provided function.
 * Creates a polyfill for the Array.prototype.filter method.
 * @param {function} callBack - Function to test each element of the array. Return true to keep the element, false otherwise.
 * @param {any} thisArg - Value to use as this when executing the callback.
 * @returns {Array} A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
 * @throws {TypeError} If the method is called on null or undefined, or if callBack is not a function.
 */

Array.prototype.customFilter = function (callBack, thisArg) {
  if (this === null) {
    throw new TypeError("Array.prototype.filter called on null or undefined");
  }
  if (typeof this === "function") {
    throw new TypeError(callBack + " is not a function");
  }
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callBack.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const result = arrData.customFilter((item) => item % 2 === 0);
console.log(result);



