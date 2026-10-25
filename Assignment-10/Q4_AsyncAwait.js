// Q4 - Load Student Records in Sequence
function getStudentData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const students = {
        1: { id: 1, name: "Sara Ahmed", department: "Computer Science" },
        2: { id: 2, name: "Ali Khan", department: "Software Engineering" },
        3: { id: 3, name: "Ayesha Noor", department: "Information Technology" }
      };
      if (students[id]) resolve(students[id]);
      else reject(new Error(`No student found with ID ${id}.`));
    }, 2000);
  });
}

async function loadStudentsInSequence() {
  try {
    console.log("Loading Student 1...");
    const student1 = await getStudentData(1);
    console.log("Student 1 data:", student1);

    console.log("Loading Student 2...");
    const student2 = await getStudentData(2);
    console.log("Student 2 data:", student2);

    console.log("Loading Student 3...");
    const student3 = await getStudentData(3);
    console.log("Student 3 data:", student3);
  } catch (error) {
    console.log("Could not load student data:", error.message);
  }
}

// await pauses this async function, not the entire program; other work can continue.
loadStudentsInSequence();
