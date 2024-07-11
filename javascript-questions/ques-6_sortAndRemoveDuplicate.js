import { arrUnsortedAndDuplicateData } from "../mockData/mockData.js";

/**
 * Implement a function to sort an array of integers and remove duplicate elements.
 * @param {Array} arr The array of numbers to be sorted and processed.
 * @returns {Array} A new array with sorted numbers and duplicates removed.
 */
const sortAndRemoveDuplicateMethodOne = (arr) => {
    const sortedArr = arr.sort((a, b) => a - b); 
    const uniqueArr = sortedArr.filter((num, index) => sortedArr.indexOf(num) === index); 
    return uniqueArr;
};

const sortAndRemoveDuplicateMethodTwo = (arr) => {
    const sortedArr = arr.sort((a, b) => a - b); 
    let unique = [];
    for (let index in sortedArr) {
        if (sortedArr[index] !== sortedArr[index - 1]) 
            unique.push(sortedArr[index]);
    }
    return unique;
};

console.log("First method:", sortAndRemoveDuplicateMethodOne(arrUnsortedAndDuplicateData));
console.log("Second method:", sortAndRemoveDuplicateMethodTwo(arrUnsortedAndDuplicateData));