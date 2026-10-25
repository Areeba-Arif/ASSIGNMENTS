// Named export: returns a student's full name.
export function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Default export: adds marks from four subjects.
export default function calculateTotal(mark1, mark2, mark3, mark4) {
  return mark1 + mark2 + mark3 + mark4;
}
