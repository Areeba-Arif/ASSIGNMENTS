// Question 5 - Mini Project: Course Registration Data
import courses from "./courses.js";
import { formatCourseSummary } from "./courseUtils.js";

// Destructure the course name and fee from the first course.
const { courseName, fee } = courses[0];
console.log(`Selected course: ${courseName}; Fee: Rs. ${fee}`);

// Add a new course to a new array; the original courses array is unchanged.
const updatedCourseList = [
  ...courses,
  {
    courseName: "Introduction to C++",
    instructor: "Mr. Ahmed",
    duration: "7 weeks",
    fee: 10000
  }
];

// Update the fee by creating a new object; preserve the original course object.
const revisedCourse = { ...courses[1], fee: 13500 };

console.log("Original course list:", courses);
console.log("New course list:", updatedCourseList);
console.log("Original Java course:", courses[1]);
console.log("Revised Java course:", revisedCourse);

// Display summaries for all courses in the new list.
console.log("Course summaries:");
updatedCourseList.forEach((course) => {
  console.log(formatCourseSummary(course));
});
console.log("Revised course summary:", formatCourseSummary(revisedCourse));
