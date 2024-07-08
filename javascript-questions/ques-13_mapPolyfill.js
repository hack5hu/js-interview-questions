import { arrData } from "../mockData/mockData.js";

/**
 * Creates a new array populated with the results of calling a provided function on every element in the calling array.
 * Creates a polyfill for the Array.prototype.map method.
 * @param {function} callBack - Function that produces an element of the new array, taking three arguments:
 *                              - currentValue (any): The current element being processed in the array.
 *                              - index (number): The index of the current element being processed in the array.
 *                              - array (Array): The array map was called upon.
 * @param {any} args - Value to use as this when executing the callback.
 * @returns {Array} A new array with each element being the result of the callback function.
 * @throws {TypeError} If the method is called on null or undefined, or if callBack is not a function.
 */
Array.prototype.customMap = function (callBack, thisArg) {
  if (this === null) {
    throw new TypeError("Array.prototype.map1 called on null or undefined");
  }
  if (typeof callBack !== "function") {
    throw new TypeError(callBack + " is not a function");
  }
  var result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined || this[i] === null) {
      result[i] = undefined;
    } else {
      result[i] = callBack.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

const result = arrData.customMap((num) => num * 2);

console.log(result)