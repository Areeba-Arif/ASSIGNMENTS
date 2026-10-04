let marksGroup1 = [78, 45, 92, 66, 88, 54, 91, 73];

let marksGroup2 = [81, 69, 95, 58];

// Combine both groups
let combinedMarks = marksGroup1.concat(marksGroup2);

console.log("Group 1 marks:", marksGroup1);
console.log("Group 2 marks:", marksGroup2);
console.log("Combined marks:", combinedMarks);

// Create a smaller list from the combined array
let selectedMarks = combinedMarks.slice(2, 7);

console.log("Selected portion:", selectedMarks);

// Change one mark in the middle
combinedMarks.splice(4, 1, 90);

console.log("After changing one mark:", combinedMarks);

// Remove one mark from the middle
combinedMarks.splice(5, 1);

console.log("After removing one mark:", combinedMarks);

// Total number of marks
console.log("Total number of marks:", combinedMarks.length);

// Sort from lowest to highest
let sortedMarks = [...combinedMarks].sort(function(a, b) {
    return a - b;
});

console.log("Lowest to highest:", sortedMarks);

// Reverse the sorted list
let reversedMarks = [...sortedMarks].reverse();

console.log("Highest to lowest:", reversedMarks);

// Arrow function
let displayFinalResult = (marks) => {
    console.log("Final Result:", marks);
};

// Call arrow function
displayFinalResult(reversedMarks);