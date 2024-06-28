/**
 * Creates a throttled version of a function that limits its execution rate to once per specified wait time.
 * Implement a throttling function to limit the rate at which a function can be executed.
 * @param {Function} fun The function to be throttled.
 * @param {number} wait The throttle wait time in milliseconds.
 * @returns {Function} A throttled version of the input function.
 */
function throttling(fun, wait) {
  let timer = false;
  return function (...args) {
    if (!timer) {
      fun.apply(this, args);
      timer = true;
      setTimeout(() => {
        timer = false;
      }, wait);
    }
  };
}

// Counter for throttled function calls
let callCount = 0;
// Counter for throttled function executions
let execCount = 0;

// Create the throttled version of your function
const throttledFunction = throttling(() => {
  execCount++;
  console.log("Throttled function executed", execCount);
}, 1000);

// Set up the interval to call the throttled function
const intervalId = setInterval(() => {
  callCount++;
  console.log("Calling throttled function", callCount);
  throttledFunction();
}, 100);

// Example: Stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
  console.log("Total calls:", callCount);
  console.log("Throttling function executed count:", execCount);
}, 5100);

