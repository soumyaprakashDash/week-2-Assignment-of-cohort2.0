// Crate a map function that takes 2 input an array and transform callback and transfrom ther array nto new one
//using the transformation fn 
// Custom map function
function customMap(array, callback) {
    let result = []; // Array to store the transformed values
  
    for (let i = 0; i < array.length; i++) {
      // Apply the callback to each element
      let transformedValue = callback(array[i], i, array);
      result.push(transformedValue); // Store the result
    }
  
    return result; // Return the new array
  }
  
  // Example array
  let numbers = [1, 2, 3, 4, 5];
  
  // Transformation function (double the value)
  function doubleValue(num) {
    return num * 2;
  }
  
  // Use customMap to apply the transformation
  let doubledNumbers = customMap(numbers, doubleValue);
  
  // Print the result
  console.log("Original Array:", numbers);
  console.log("Doubled Array:", doubledNumbers);
  