let employee1 = {
    employeeId: 101,
    firstName: "Areeba",
    lastName: "Arif",
    department: "IT",
    designation: "Junior Developer",
    salary: 55000,

    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    getEmployeeInfo: function() {
        return "Employee ID: " + this.employeeId +
               ", Department: " + this.department;
    }
};

// Call methods for first employee
console.log("Employee 1 Full Name:", employee1.getFullName());
console.log("Employee 1 Information:", employee1.getEmployeeInfo());


// Second employee object
let employee2 = {
    employeeId: 102,
    firstName: "Sara",
    lastName: "Khan",
    department: "Marketing",
    designation: "Marketing Officer",
    salary: 60000,

    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    getEmployeeInfo: function() {
        return "Employee ID: " + this.employeeId +
               ", Department: " + this.department;
    }
};

// Call methods for second employee
console.log("Employee 2 Full Name:", employee2.getFullName());
console.log("Employee 2 Information:", employee2.getEmployeeInfo());