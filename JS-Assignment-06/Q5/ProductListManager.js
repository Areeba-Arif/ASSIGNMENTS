// Product List Manager
//given array
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];

//length
console.log("Number of products:", products.length);

// at()
console.log("First product:", products.at(0));
console.log("Last product:", products.at(-1));

// push()
products.push("Charger");
console.log("After push:", products);

//unshift()
products.unshift("Power Bank");
console.log("After unshift:", products);

//pop()
products.pop();
console.log("After pop:", products);

//shift()
products.shift();
console.log("After shift:", products);

// Create a second product array
let moreProducts = ["USB", "Speaker", "Tablet", "Web camera" , "Printer"];

// concat()
products = products.concat(moreProducts);
console.log("After concat:", products);

//slice()
let smallList = products.slice(1, 4);
console.log("Smaller list:", smallList);

//splice()
products.splice(2, 1, "Smart Watch");
console.log("After splice:", products);

// join()
console.log("Final product list:", products.join(", "));

// Arrow function to display final array
const showProducts = (array) => {
    console.log("Final Array:", array);
};

showProducts(products);

// Verification is the product are in array or not?
console.log("Is final product list an array?", Array.isArray(products));