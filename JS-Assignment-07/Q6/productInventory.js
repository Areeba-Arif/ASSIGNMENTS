let products = [
    {
        name: "Laptop",
        category: "Electronics",
        price: 120000,
        stock: 10
    },
    {
        name: "Headphones",
        category: "Electronics",
        price: 5000,
        stock: 25
    },
    {
        name: "Keyboard",
        category: "Accessories",
        price: 3500,
        stock: 15
    },
    {
        name: "Mouse",
        category: "Accessories",
        price: 2000,
        stock: 30
    },
    {
        name: "Monitor",
        category: "Electronics",
        price: 45000,
        stock: 8
    }
];

// Display total number of products
console.log("Total number of products:", products.length);


// Search for a product by name
let searchedProduct = products.find(function(product) {
    return product.name === "Keyboard";
});

console.log("Searched Product:", searchedProduct);


// Find a product based on price condition
let expensiveProduct = products.find(function(product) {
    return product.price > 50000;
});

console.log("Product with price greater than 50000:", expensiveProduct);


// Sort products from lowest to highest price
let lowToHigh = [...products].sort(function(a, b) {
    return a.price - b.price;
});

console.log("Products from lowest to highest price:");

lowToHigh.forEach(function(product) {
    console.log(product);
});


// Sort products from highest to lowest price
let highToLow = [...products].sort(function(a, b) {
    return b.price - a.price;
});

console.log("Products from highest to lowest price:");

highToLow.forEach(function(product) {
    console.log(product);
});