// Import the named export by its exact name and the default export by any local name.
import calculateTotal, { getFullName } from "./studentTools.js";

const fullName = getFullName("Sara", "Ahmed");
const totalMarks = calculateTotal(85, 90, 78, 88);

console.log("Full name:", fullName);
console.log("Total marks:", totalMarks);
