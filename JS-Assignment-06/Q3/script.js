console.log("--- Question 3: concat(), slice(), splice() and delete ---");

let array1 = [10, 20, 30];
let array2 = [40, 50, 60];

// Use concat() to combine the two arrays into a new array
let combinedArray = array1.concat(array2);
console.log("Combined array:", combinedArray);

// Use slice() to create a new array containing a selected portion
let slicedArray = combinedArray.slice(1, 4);
console.log("Sliced array from index 1 to 4:", slicedArray);

// Use splice() to remove at least one element
let splicedRemoved = combinedArray.splice(2, 2); 
console.log("Elements removed using splice():", splicedRemoved);
console.log("Array after splice removal:", combinedArray);

// Use splice() again to add at least one element at a specific position
combinedArray.splice(2, 0, 99, 100); 
console.log("Array after splice addition:", combinedArray);

// Use the delete operator to delete one array element using its index
delete combinedArray[0];
console.log("Array after delete operator:", combinedArray);
console.log("Length after delete:", combinedArray.length);
console.log("Element at deleted position :", combinedArray[0]);