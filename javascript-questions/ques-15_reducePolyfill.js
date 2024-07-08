import { arrData } from "../mockData/mockData.js";

/**
 * Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * Creates a polyfill for the Array.prototype.reduce method.
 * @param {function} callBack - Function to execute on each element in the array, taking four arguments:
 *                              - accumulator (any): The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
 *                              - currentValue (any): The current element being processed in the array.
 *                              - index (number): The index of the current element being processed in the array.
 *                              - array (Array): The array reduce was called upon.
 * @param {any} initialValue - Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue.
 * @returns {any} The value that results from the reduction.
 * @throws {TypeError} If the method is called on null or undefined, or if callBack is not a function.
 */

Array.prototype.customReduce = function (callBack, initialValue) {
  if (this === null) {
    throw new TypeError("Array.prototype.reduce called on null or undefined");
  }
  if (typeof callBack !== "function") {
    throw new TypeError(callBack + " is not a function");
  }

  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callBack(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

const result = arrData.customReduce(
  (accumulated, element) => accumulated + accumulated,
  1
);


console.log(result)