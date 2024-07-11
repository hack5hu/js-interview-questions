
// console.log(reverseSegments("a-bc-d")); // Output: d-cb-a


// function reverseSegments(str) {
//   let result = "";
//   let currentSegment = "";
  
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] === '-') {
//       // Reverse and append the current segment to the result
//       console.log(currentSegment,12);
//       result += currentSegment.split('').reverse().join('') + '-';
//       console.log(result, 14);
      
//       currentSegment = ""; // Reset current segment for the next segment
//     } else {
//       console.log(currentSegment, 12);

//       // Build the current segment in reverse order
//       currentSegment = str[i] + currentSegment;
//     }
//   }

//   // Append the last segment (which doesn't end with '-')
//   result += currentSegment.split('').reverse().join('');

//   return result;
// }
function reverseSegments(str) {
  let result = "";
  let currentSegment = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '-') {
      // Reverse and append the current segment to the result
      for (let j = currentSegment.length - 1; j >= 0; j--) {
        result += currentSegment[j];
      }
      result += '-';
      currentSegment = ""; // Reset current segment for the next segment
    } else {
      // Build the current segment
      currentSegment = str[i] + currentSegment;
    }
  }

  // Append the last segment (which doesn't end with '-')
  for (let j = currentSegment.length - 1; j >= 0; j--) {
    result += currentSegment[j];
  }

  return result;
}

console.log(reverseSegments("a-bc-d-")); // Output: d-cb-a
// console.log(reverseSegments("a-bcd")); // Output: d-cba

// console.log(reverseSegments("a-b-c-d")); // Output: d-cb-a
// console.log(reverseSegments("a-bcd")); // Output: d-cba








