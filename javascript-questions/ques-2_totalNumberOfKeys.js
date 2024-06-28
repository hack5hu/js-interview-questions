import { person } from "../mockData/mockData.js";

/**
 * Calculate the total number of keys in a nested object, including keys at all levels of nesting.
 * @param {object} obj The object for which to count keys.
 * @returns {number} The total number of keys in the object and its nested objects.
 */
const totalNumberOfKeys = (obj) => {
    let count = 0;

    // Iterate through each key in the object
    for (let key in obj) {
        // Check if the property is a direct property of the object
        if (obj.hasOwnProperty(key)) {
            count++;

            // Recursively count keys if the property is an object (excluding arrays and null values)
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                count += totalNumberOfKeys(obj[key]);
            }
        }
    }

    return count;
};

const result= totalNumberOfKeys(person)
console.log('Total number of key :: ', result);


