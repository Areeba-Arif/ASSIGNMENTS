
let student1 = {
    name: "Ali",
    class: "10th",
    chemistry: 85,
    mathematics: 90,
    urdu: 80,
    english: 75,

    calculateResult: function() {
        let total = this.chemistry + this.mathematics +
                    this.urdu + this.english;

        let percentage = (total / 400) * 100;

        return {
            totalMarks: total,
            percentage: percentage
        };
    }
};

// Access properties using dot notation
console.log("Student Name:", student1.name);
console.log("Student Class:", student1.class);

// Access a property using bracket notation
console.log("Chemistry Marks:", student1["chemistry"]);

// Calculate and display the first student's result
let result1 = student1.calculateResult();

console.log("Student 1 Name:", student1.name);
console.log("Student 1 Total Marks:", result1.totalMarks);
console.log("Student 1 Percentage:", result1.percentage + "%");


// Create a second student object with the same type of method
let student2 = {
    name: "Sara",
    class: "10th",
    chemistry: 92,
    mathematics: 88,
    urdu: 85,
    english: 95,

    calculateResult: function() {
        let total = this.chemistry + this.mathematics +
                    this.urdu + this.english;

        let percentage = (total / 400) * 100;

        return {
            totalMarks: total,
            percentage: percentage
        };
    }
};

// Calculate and display the second student's result
let result2 = student2.calculateResult();

console.log("Student 2 Name:", student2.name);
console.log("Student 2 Total Marks:", result2.totalMarks);
console.log("Student 2 Percentage:", result2.percentage + "%");

// Remove one property from the first student
delete student1.urdu;

// Display the final student object
console.log("Final Student 1 Object:", student1);
