// Question 3 - Manage Class Lists and Student Profiles
const groupA = ["Ali", "Ahmed", "Hamza"];
const groupB = ["Sara", "Ayesha", "Laiba"];
const profile = {
  name: "Laiba",
  className: "Web Development",
  city: "Karachi"
};

// Combine both groups without changing either original array.
const combinedClass = [...groupA, ...groupB];

// Make an independent copy, then update only the copy.
const copiedGroupA = [...groupA];
copiedGroupA.push("Usman");

// Create new profile objects with spread syntax.
const lahoreProfile = { ...profile, city: "Lahore" };
const profileWithEmail = { ...profile, email: "laiba@example.com" };

console.log("Original Group A:", groupA);
console.log("Original Group B:", groupB);
console.log("Combined class:", combinedClass);
console.log("Copied Group A after adding a student:", copiedGroupA);
console.log("Original profile:", profile);
console.log("Profile with updated city:", lahoreProfile);
console.log("Profile with added email:", profileWithEmail);
