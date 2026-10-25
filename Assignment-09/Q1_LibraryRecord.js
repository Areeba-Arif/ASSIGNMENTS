// Question 1 - Library Book Record
const bookRecord = ["BK-104", "JavaScript for Beginners", "Programming", 1200];


const [bookId, bookTitle, , bookPrice] = bookRecord;


const shortRecord = ["BK-105", "Learning ES6"];
const [, , category = "General"] = shortRecord;

console.log(`Book ID: ${bookId}, Title: ${bookTitle}, Price: ${bookPrice}`);
console.log(`Category for ${shortRecord[1]}: ${category}`);


console.log("Original book record:", bookRecord);
console.log("Original short record:", shortRecord);
