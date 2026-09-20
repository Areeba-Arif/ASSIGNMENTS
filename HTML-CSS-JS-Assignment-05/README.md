# HTML, CSS & JavaScript — Assignment 05

## Simple Calculator, Functions & Loops

This assignment focuses on basic **HTML, CSS, and JavaScript** concepts. It includes a simple calculator, JavaScript functions, loops, and the use of `break` and `continue` statements.

The assignment is divided into four separate questions, with each question stored in its own folder.

---

## 📁 Project Structure

```text
Assignment-05/
│
├── Q1-Calculator/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── Q2-Functions/
│   ├── index.html
│   └── functions.js
│
├── Q3-Loops/
│   ├── index.html
│   └── patter.js
│
└── Q4-Scenario/
    ├── index.html
    └── sceario.js
```

---

## 📌 Question 1 — Simple Calculator

**Folder:** `Q1-Calculator`

### Files

* `index.html` — Calculator structure and input fields
* `style.css` — Styling and layout
* `script.js` — Calculator operations

### Features

The calculator takes two numbers from the user and performs four basic operations:

* Addition
* Subtraction
* Multiplication
* Division

Four separate JavaScript functions are used for the operations. The result is displayed directly on the webpage.

The division function also checks if the second number is `0`. If so, it displays:

```text
Cannot divide by zero
```

### Concepts Practiced

* HTML forms and input fields
* Buttons
* CSS styling
* JavaScript functions
* Getting values from HTML elements
* Basic arithmetic operations
* Displaying results on a webpage
* Conditional statements

---

## 📌 Question 2 — Functions With and Without Parameters

**Folder:** `Q2-Functions`

### Files

* `index.html` — Connects the JavaScript file to the browser
* `functions.js` — Contains the JavaScript functions

### Functions Used

#### `greet()`

A function without parameters that displays a fixed welcome message using `console.log()`.

#### `greetUser(name)`

A function with one parameter that displays a personalized welcome message.

#### `addNumbers(num1, num2)`

A function with two parameters that adds two numbers and returns the result using the `return` keyword.

The returned value is stored in a variable and then displayed using `console.log()`.

### Concepts Practiced

* Functions
* Parameters
* Arguments
* Functions without parameters
* Functions with parameters
* `return` statement
* Variables
* `console.log()`

---

## 📌 Question 3 — Number Pattern Using Loops

**Folder:** `Q3-Loops`

### Files

* `index.html` — Connects the JavaScript file to the browser
* `patter.js` — Contains the pattern program

### Description

The program asks the user to enter a number using:

```javascript
prompt("Enter a number:")
```

The input is converted into a number using `parseInt()`.

The program then uses loops to print a number pattern in the browser console.

For example, if the user enters `5`, the output is:

```text
1
12
123
1234
12345
```

### Concepts Practiced

* `prompt()`
* `parseInt()`
* `for` loops
* Nested loops
* `console.log()`
* Number patterns

---

## 📌 Question 4 — Roll Call Scenario Using `break` and `continue`

**Folder:** `Q4-Scenario`

### Files

* `index.html` — Connects the JavaScript file to the browser
* `sceario.js` — Contains the roll-call program

### Description

This program simulates a teacher calling roll numbers from `1` to `20`.

Two JavaScript control statements are used:

### `continue`

When the loop reaches roll number `13`, `continue` is used to skip that number.

Therefore, roll number `13` is not printed.

### `break`

When the loop reaches roll number `18`, `break` is used to stop the loop completely.

Therefore, roll numbers `18`, `19`, and `20` are not printed.

The program also counts the total number of roll numbers called.

### Expected Output

The program calls:

```text
1 to 12
14 to 17
```

Roll number `13` is skipped, and the loop stops at `18`.

```text
Total roll numbers called = 16
```

### Concepts Practiced

* `for` loop
* `continue` statement
* `break` statement
* Conditional statements
* Counter variables
* `console.log()`

---

## 🛠️ Technologies Used

* **HTML5** — Page structure
* **CSS3** — Styling and layout
* **JavaScript** — Functions, calculations, loops, and control statements

No JavaScript frameworks or external libraries were used.

---

## 🎯 Learning Objectives

Through this assignment, I practiced:

* Creating basic webpage layouts with HTML
* Styling webpages using CSS
* Connecting JavaScript with HTML
* Handling button clicks
* Creating and calling JavaScript functions
* Using functions with and without parameters
* Returning values from functions
* Taking input using `prompt()`
* Converting input using `parseInt()`
* Using `for` loops and nested loops
* Creating number patterns
* Understanding `break` and `continue`
* Displaying output using `console.log()`
* Displaying JavaScript results directly on a webpage

---

## ▶️ How to Run

### Q1 — Calculator

1. Open the `Q1-Calculator` folder.
2. Open `index.html` in a web browser.
3. Enter two numbers.
4. Click **Add**, **Subtract**, **Multiply**, or **Divide**.
5. View the result on the webpage.

### Q2 — Functions

1. Open the `Q2-Functions` folder.
2. Open `index.html` in a browser.
3. Open the browser **Developer Tools → Console**.
4. View the function outputs in the Console.

### Q3 — Loops

1. Open the `Q3-Loops` folder.
2. Open `index.html` in a browser.
3. Enter a number when the prompt appears.
4. Open the browser **Console** to view the generated pattern.

### Q4 — Scenario

1. Open the `Q4-Scenario` folder.
2. Open `index.html` in a browser.
3. Open the browser **Developer Tools → Console**.
4. View the roll-call messages and total count.

---



## 👩‍💻 Author

**Areeba Arif**

Computer Science Student
