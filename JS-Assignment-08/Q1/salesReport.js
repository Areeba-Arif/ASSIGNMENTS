
let orderAmounts = [1200, 450, 3000, 750, 1500, 250, 4200, 900];

// Find the first order amount greater than 2000
let firstLargeOrder = orderAmounts.find(amount => amount > 2000);

// Get all orders greater than 1000
let largeOrders = orderAmounts.filter(amount => amount > 1000);

// Calculate the total of all orders
let totalSales = orderAmounts.reduce((total, amount) => total + amount, 0);

// Display results
console.log("Original Order Amounts:", orderAmounts);
console.log("First Order Greater Than 2000:", firstLargeOrder);
console.log("Orders Greater Than 1000:", largeOrders);
console.log("Total Sales:", totalSales);
