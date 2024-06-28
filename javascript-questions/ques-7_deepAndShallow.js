/**
 * Custom function to create a deep copy of an object or array.
 * Handles nested objects and arrays recursively to ensure all levels of nesting are duplicated.
 * @param {any} obj The object or array to be deeply copied.
 * @returns {any} A deep copy of the input object or array.
 */
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepCopy(obj[i]); // Recursively deep copy each element of the array
    }
    return arrCopy;
  }

  const objCopy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepCopy(obj[key]); // Recursively deep copy each property of the object
    }
  }
  return objCopy;
}

const original = { a: 1, b: { c: 2 }, d: [3, 4, { e: 5 }] };

// Example of deep copy using custom function
const copy = deepCopy(original);

console.log("Deep Copy with custom function:", copy);

const original2 = { a: 1, b: { c: 2 }, d: [3, 4, { e: 5 }] };

// Shallow copy using spread operator
const shallowCopy = { ...original2 }; // Shallow copy of original2
shallowCopy.b.c = 42;
shallowCopy.d[2].e = 99;

console.log("Original after shallow copy modification:", original2);
console.log("Shallow copy:", shallowCopy);

// Deep copy using JSON methods
const deepCopy1 = JSON.parse(JSON.stringify(original2)); // Deep copy of original2 using JSON methods
deepCopy1.b.c = 2;
deepCopy1.d[2].e = 5;

console.log("Original after deep copy modification:", original2);
console.log("Deep copy:", deepCopy1);
