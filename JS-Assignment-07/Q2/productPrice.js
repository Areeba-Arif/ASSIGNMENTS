let prices = [1200, 450, 3000, 750, 1500, 250];

// Lowest to highest
let lowestToHighest = [...prices].sort(function(a, b) {
    return a - b;
});

// Highest to lowest
let highestToLowest = [...prices].sort(function(a, b) {
    return b - a;
});

// Original list
let originalPrices = [...prices];

// Reversed version
let reversedPrices = [...prices].reverse();

// Random ordering
let randomPrices = [...prices].sort(function() {
    return Math.random() - 0.5;
});

console.log("Original prices:", originalPrices);

console.log("Lowest to highest:", lowestToHighest);

console.log("Highest to lowest:", highestToLowest);

console.log("Reversed prices:", reversedPrices);

console.log("Random ordering:", randomPrices);