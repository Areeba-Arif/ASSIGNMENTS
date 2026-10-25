// Reusable named export for formatting a course summary.
export function formatCourseSummary(course) {
  return `${course.courseName} — Instructor: ${course.instructor}, Fee: Rs. ${course.fee}`;
}
