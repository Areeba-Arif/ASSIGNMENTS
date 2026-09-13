// Question 3 - Login Validation

// Entered username and password
let username = "admin";
let password = "12345";

// Correct username and password
let correctUsername = "admin";
let correctPassword = "12345";

// Login validation
if (username === correctUsername && password === correctPassword) {
    console.log("Login Successful");
}
else {
    console.log("Invalid Username or Password");
}