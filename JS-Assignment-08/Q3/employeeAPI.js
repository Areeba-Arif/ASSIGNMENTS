
let employees = [
    { name: "Ali", department: "IT", salary: 80000 },
    { name: "Sara", department: "HR", salary: 70000 },
    { name: "Ahmed", department: "IT", salary: 95000 },
    { name: "Ayesha", department: "Finance", salary: 85000 }
];

// Get employees from the IT department
let itEmployees = employees.filter(employee => employee.department === "IT");

// Find the first employee whose salary is greater than 90000
let highSalaryEmployee = employees.find(employee => employee.salary > 90000);

// Create a list of employee names
let employeeNames = employees.map(employee => employee.name);

// Calculate the total salary
let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

// Display results
console.log("All Employees:", employees);
console.log("IT Employees:", itEmployees);
console.log("First Employee with Salary Above 90000:", highSalaryEmployee);
console.log("Employee Names:", employeeNames);
console.log("Total Salary:", totalSalary);
