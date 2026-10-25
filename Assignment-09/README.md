# JavaScript Assignment 09 — ES6+ Features

## Overview

This assignment covers modern JavaScript (ES6+) features, including array destructuring, object destructuring, default values, the spread operator, and JavaScript modules.

The assignment contains five questions based on practical scenarios involving library records, student profiles, class management, reusable student functions, and course registration.

## Topics Covered

- Array Destructuring
- Object Destructuring
- Default Values
- Renaming Properties
- Nested Object Destructuring
- Spread Operator
- Copying and Merging Arrays
- Updating Objects Without Modifying Original Data
- Named Exports and Imports
- Default Exports and Imports
- JavaScript Modules

## Project Structure

```text
Assignment-09/
│
├── Q1_LibraryRecord.js

├── Q2_StudentProfile.js
├── Q3_ClassManagement.js
├── Q1.html

├── Q2.html
├── Q3.html
│
├── Q4_StudentToolkit/
│   ├── index.html
│   ├── studentTools.js
│   └── main.js
│
├── Q5_CourseRegistration/
│   ├── index.html
│   ├── courses.js
│   ├── courseUtils.js
│   └── main.js
│
└── README.md
```

## Questions and Solutions

### Question 1 — Library Book Record

Demonstrates array destructuring to extract book information, skip unwanted values, assign default values, and display details using template literals.

**File:** `Q1_LibraryRecord.js`

### Question 2 — Student Profile from an API

Demonstrates object destructuring, renaming the `department` property to a local variable named `program`, extracting nested address information, and handling a missing phone number with a default value.

**File:** `Q2_StudentProfile.js`

### Question 3 — Manage Class Lists and Student Profiles

Uses the spread operator to combine student lists, create independent array copies, and update object properties without modifying the original arrays or objects.

**File:** `Q3_ClassManagement.js`

### Question 4 — Reusable Student Toolkit with Modules

Separates reusable student functions into a module and imports them into the main JavaScript file.

- `studentTools.js` — Defines the full-name and total-marks functions.
- `main.js` — Imports and uses both functions.
- `index.html` — Loads the main file as a JavaScript module.

### Question 5 — Course Registration Data

Creates a small course registration project using separate data, utility, and main JavaScript files.

- `courses.js` — Stores the original course records.
- `courseUtils.js` — Provides a reusable function to format course summaries.
- `main.js` — Imports the data and utility function, adds a course, updates a course fee, and displays course summaries.
- `index.html` — Loads the main JavaScript file as a module.

## Requirements

- Visual Studio Code or another code editor
- A modern web browser, such as Google Chrome
- Node.js for running Questions 1–3 from the terminal
- VS Code Live Server for running Questions 4–5

No external libraries or frameworks are required.

## How to Run

### Questions 1–3

Open the project folder in VS Code and run the following commands in the terminal:

```bash
node Q1_LibraryRecord.js
node Q2_StudentProfile.js
node Q3_ClassManagement.js
```

Make sure Node.js is installed on your computer.

### Questions 4–5

1. Open the `Assignment-09` folder in VS Code.
2. Open the relevant question's folder.
3. Open its `index.html` file.
4. Right-click the editor and select **Open with Live Server**.
5. Open the browser developer console by pressing `F12` and selecting **Console** to view the output.

**Important:** Use Live Server to run the module-based questions. Opening the HTML files directly through a `file:///` URL can cause browser security errors when loading JavaScript modules.

## Learning Outcomes

After completing this assignment, the learner should be able to:

- Extract values from arrays and objects using destructuring.
- Handle missing values with default assignments.
- Rename extracted object properties.
- Copy and combine arrays using the spread operator.
- Create updated objects while preserving original data.
- Organize JavaScript code into reusable modules.
- Use named and default exports and imports.
- Run JavaScript module-based projects through a local development server.

## Submission

The project is organized into separate files and folders for all five questions. Each solution demonstrates the relevant ES6+ concepts through practical examples.
