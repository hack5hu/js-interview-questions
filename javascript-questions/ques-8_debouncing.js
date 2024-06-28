/**
 * Creates a debounced version of a function that delays its execution until after a specified wait time.
 * Implement a debouncing function to limit the rate at which a function can fire.
 * @param {Function} fun The function to be debounced.
 * @param {number} wait The debounce wait time in milliseconds.
 * @returns {Function} A debounced version of the input function.
 */
function debouncing(fun, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fun.apply(this, args), wait);
  };
}

// Counter for debounced function calls
let callCount = 0;
// Counter for debounced function executions
let execCount = 0;

// Create the debounced version of your function
const debouncedFunction = debouncing(() => {
  execCount++;
  console.log("Debounced function executed");
  console.log("Debouncing function executed count:", execCount);
}, 1000);

// Set up the interval to call the debounced function
const intervalId = setInterval(() => {
  callCount++;
  console.log("Calling debounced function", callCount);
  debouncedFunction();
}, 500);

// Example: Stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
  console.log("Total calls:", callCount);
}, 5000);

