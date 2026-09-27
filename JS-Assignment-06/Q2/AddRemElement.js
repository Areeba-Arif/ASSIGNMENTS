// question2.js

// Create an array named students containing at least 5 student names
let students = ["Ali", "Sara", "Ahmed", "Fatima", "Bilal"];

console.log("--- Question 2: Adding and Removing Array Elements ---");
console.log("Initial students array:", students);

// we Use push() to add a student to the end
students.push("Zainab");
console.log("After push('Zainab'):", students);

// we Use pop() to remove the last student and display the removed value
let removedLast = students.pop();
console.log("Removed last student:", removedLast);
console.log("Array after pop():", students);

//we  Use unshift() to add a student to the beginning
students.unshift("Hamza");
console.log("After unshift('Hamza'):", students);

// we Use shift() to remove the first student and display the removed value
let removedFirst = students.shift();
console.log("Removed first student :", removedFirst);
console.log("Array after shift:", students);

// we Use length at the end to display the final number of students
console.log("Final number of students:", students.length);