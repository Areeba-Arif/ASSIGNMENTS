// Q3 - Event Registration Promise
function registerStudent(studentName, seatAvailable) {
  return new Promise((resolve, reject) => {
    if (seatAvailable) {
      resolve(`Registration successful for ${studentName}.`);
    } else {
      reject(new Error(`Registration failed for ${studentName}: the class is full.`));
    }
  });
}

registerStudent("Sara Ahmed", true)
  .then(message => console.log(message))
  .catch(error => console.log(error.message));

registerStudent("Ali Khan", false)
  .then(message => console.log(message))
  .catch(error => console.log(error.message));
