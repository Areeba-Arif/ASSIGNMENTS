let students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal'];

// Check whether Ayesha is present
let isAyeshaPresent = students.includes('Ayesha');

// Find the position of the first Sara
let firstSaraPosition = students.indexOf('Sara');

// Find the position of the last Sara
let lastSaraPosition = students.lastIndexOf('Sara');

// Find the first student whose name starts with A
let firstStudentWithA = students.find(function(student) {
    return student.startsWith('A');
});

// Find the position of the first student whose name starts with A
let firstAIndex = students.findIndex(function(student) {
    return student.startsWith('A');
});

// Find the last student whose name starts with A
let lastStudentWithA = students.findLast(function(student) {
    return student.startsWith('A');
});

// Find the position of the last student whose name starts with A
let lastAIndex = students.findLastIndex(function(student) {
    return student.startsWith('A');
});

console.log("Students:", students);

console.log("Is Ayesha present?", isAyeshaPresent);

console.log("First Sara position:", firstSaraPosition);

console.log("Last Sara position:", lastSaraPosition);

console.log("First student whose name starts with A:", firstStudentWithA);

console.log("Position of first student starting with A:", firstAIndex);

console.log("Last student whose name starts with A:", lastStudentWithA);

console.log("Position of last student starting with A:", lastAIndex);