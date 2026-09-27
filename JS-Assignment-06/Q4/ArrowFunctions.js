// Create different variables
let fruits = ["Apple", "Banana", "Mango"];
let Myname = "Areeba";
let age = 20;


console.log("Is fruits an array?", Array.isArray(fruits));
console.log("Is Myname an array?", Array.isArray(Myname));
console.log("Is age an array?", Array.isArray(age));

// Arrow function to display an array
const showArray = (array) => {
    console.log("Array:", array);
};

// Call the arrow function
showArray(fruits);


// Another arrow function that accepts one value
const showValue = (value) => {
    console.log("Value:", value);
};

// Call the function
showValue("Hello JavaScript");
showValue(age);
showValue(Myname);
showValue(fruits[1]); 