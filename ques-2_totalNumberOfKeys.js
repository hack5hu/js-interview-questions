import { person } from "./mockData/mockData.js";

let count = 0
    const totalNumberOfKeys = (obj) => {
        for (let key in obj) {
            // Check if the property is a direct property of the object
            if (obj.hasOwnProperty(key)) {
                count++;
                // Recursively count keys if the property is an object
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray (obj[key])) {
                totalNumberOfKeys(obj[key]);
                }
            }
        }
        return count;
    };

const result= totalNumberOfKeys(person)
console.log('Total number of key :: ', result);
