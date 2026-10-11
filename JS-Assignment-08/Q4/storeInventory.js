
let inventory = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Display the initial inventory
console.log("Initial Inventory:", inventory);

// Add a new product
inventory.set("mangoes", 150);
console.log("After Adding Mangoes:", inventory);

// Update the quantity of an existing product
inventory.set("bananas", 350);
console.log("After Updating Bananas:", inventory);

// Retrieve the quantity of a specific product
console.log("Apple Quantity:", inventory.get("apples"));

// Check whether a product exists
console.log("Does Orange Exist?", inventory.has("oranges"));

// Remove one product
inventory.delete("oranges");
console.log("After Removing Oranges:", inventory);

// Display the current number of products
console.log("Number of Products:", inventory.size);

// Display all product names and quantities
console.log("Product Names:", [...inventory.keys()]);
console.log("Product Quantities:", [...inventory.values()]);

// Iterate through the Map
console.log("Current Inventory Details:");

inventory.forEach((quantity, productName) => {
    console.log(productName + ": " + quantity);
});

// Empty the inventory
inventory.clear();

console.log("Final Inventory:", inventory);
console.log("Final Inventory Size:", inventory.size);
