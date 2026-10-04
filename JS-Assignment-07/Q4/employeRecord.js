let employee = {
    employeeId: 101,
    firstName: "Areeba",
    lastName: "Arif",
    department: "IT",
    designation: "Junior Developer",
    salary: 50000
};

// Dot notation
console.log("First Name:", employee.firstName);
console.log("Department:", employee.department);

// Bracket notation
console.log("Designation:", employee["designation"]);
console.log("Salary:", employee["salary"]);

// Add a new property
employee.email = "areeba@example.com";

// Change an existing property
employee.salary = 55000;

// Remove a property
delete employee.designation;

// Display final employee object
console.log("Final Employee Object:", employee);