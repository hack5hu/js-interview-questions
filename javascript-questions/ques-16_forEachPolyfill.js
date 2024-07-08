import { arrData } from "../mockData/mockData.js";

/**
 * Executes a provided function once for each array element.
 * Creates a polyfill for the Array.prototype.forEach method.
 * @param {function} callBack - Function to execute on each element. It takes three arguments:
 *                              - currentValue (any): The current element being processed in the array.
 *                              - index (number): The index of the current element being processed in the array.
 *                              - array (Array): The array forEach was called upon.
 * @param {any} thisArg - Value to use as this when executing callback.
 * @returns {undefined}
 * @throws {TypeError} If the method is called on null or undefined, or if callBack is not a function.
 */
Array.prototype.customForEach = function (callBack, thisArg) {
  if (this === null) {
    throw new TypeError("Array.prototype.reduce called on null or undefined");
  }
  if (typeof callBack !== "function") {
    throw new TypeError(callBack + " is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      callBack.call(thisArg, this[i], i, this);
    }
  }
};

arrData.customForEach((e) => {
  console.log(e);
});


