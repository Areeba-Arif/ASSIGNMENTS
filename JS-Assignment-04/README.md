# JavaScript Basics — Assignment 04

## Operators & Conditional Statements

This assignment focuses on the fundamental concepts of JavaScript operators and conditional statements. The programs are written at a beginner level to practice basic JavaScript logic, comparisons, calculations, and decision-making.

## 📚 Topics Covered

* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* `if` Statement
* `if / else`
* `if / else if / else`
* Ternary Operator
* `switch` Statement
* `console.log()`
* `alert()`
* Basic JavaScript Variables

## 📁 Assignment Structure

```text
JS-Assignment-04/
│
├── JavaScriptOperator.js
├── GradeCalculator.js
├── LoginValidation.js
├── TernaryOpertor.js
├── MenuSelection.js
└── README.md
```

## 📝 Questions & Programs

### Question 1 — JavaScript Operators

**File:** `JavaScriptOperator.js`

This program demonstrates three main types of JavaScript operators:

* **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%`, `++`, `--`
* **Assignment Operators:** `=`, `+=`, `-=`, `*=`, `/=`
* **Comparison Operators:** `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

The results are displayed using `console.log()`.

---

### Question 2 — Student Grade Calculator

**File:** `GradeCalculator.js`

This program takes a student's marks and determines the grade using `if`, `else if`, and `else`.

| Marks    | Grade |
| -------- | ----- |
| 90–100   | A     |
| 80–89    | B     |
| 70–79    | C     |
| 60–69    | D     |
| Below 60 | F     |

The student's marks and calculated grade are displayed using `console.log()`.

The program can be tested with different marks to verify the grading conditions.

---

### Question 3 — Login Validation

**File:** `LoginValidation.js`

This program demonstrates basic login validation using `if` and `else`.

It compares:

* Entered username with the correct username
* Entered password with the correct password

If both credentials are correct:

```text
Login Successful
```

If either the username or password is incorrect:

```text
Invalid Username or Password
```

Comparison operators are used to perform the validation.

---

### Question 4 — Ternary Operator

**File:** `TernaryOpertor.js`

This program demonstrates the **ternary operator** as a shorter alternative to a simple `if / else` statement.

The program checks whether a person is eligible to vote based on their age.

The basic syntax used is:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

If the age is 18 or above:

```text
Eligible to Vote
```

Otherwise:

```text
Not Eligible to Vote
```

---

### Question 5 — Menu Selection Using Switch

**File:** `MenuSelection.js`

This program uses a `switch` statement to handle different menu choices.

| Choice | Option   | Output                |
| ------ | -------- | --------------------- |
| 1      | Home     | You selected Home     |
| 2      | About    | You selected About    |
| 3      | Services | You selected Services |
| 4      | Contact  | You selected Contact  |

A `default` case is also included to handle an invalid choice.

Example:

```text
Invalid Choice
```

---


## 🎯 Learning Objectives

After completing this assignment, the following concepts were practiced:

* Performing mathematical calculations using JavaScript operators.
* Understanding different assignment operators.
* Comparing values using comparison operators.
* Making decisions using conditional statements.
* Creating multiple conditions using `else if`.
* Validating user information using `if / else`.
* Using the ternary operator for simple conditions.
* Handling multiple choices with a `switch` statement.
* Displaying JavaScript output using `console.log()` and `alert()`.


## 👩‍💻 Author

**Areeba Arif**

Computer Science Student
JavaScript Basics — Assignment 04

---
