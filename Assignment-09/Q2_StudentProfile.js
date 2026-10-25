// Question 2 - Student Profile from an API
const student = {
  name: "Sara Ahmed",
  age: 19,
  department: "Software Engineering",
  address: {
    city: "Karachi",
    country: "Pakistan"
  }
  // phone is intentionally missing to demonstrate the default value.
};

// Rename department to the local variable program.
const {
  name,
  age,
  department: program,
  address: { city, country },
  phone = "Not provided"
} = student;

console.log(`Name: ${name}, Program: ${program}, City: ${city}, Phone: ${phone}`);
console.log(`Age: ${age}, Country: ${country}`);
