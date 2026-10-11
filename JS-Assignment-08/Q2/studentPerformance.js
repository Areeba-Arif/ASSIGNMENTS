
let marks = [45, 78, 92, 61, 88, 54, 73, 95];

// Increase every mark by 5
let practiceMarks = marks.map(mark => mark + 5);

// Get marks that are 70 or above
let passingMarks = marks.filter(mark => mark >= 70);

// Find the first mark greater than 90
let firstMarkAbove90 = marks.find(mark => mark > 90);

// Calculate the total of the original marks
let totalMarks = marks.reduce((total, mark) => total + mark, 0);

// Display results
console.log("Original Marks:", marks);
console.log("Practice Marks:", practiceMarks);
console.log("Marks 70 or Above:", passingMarks);
console.log("First Mark Above 90:", firstMarkAbove90);
console.log("Total Original Marks:", totalMarks);
