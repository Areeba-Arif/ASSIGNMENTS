# JavaScript Assignment 10 — Asynchronous JavaScript

## Overview
This assignment practices synchronous and asynchronous JavaScript, callbacks, callback hell, Promises, `resolve`/`reject`, `.then()`/`.catch()`, Promise chaining, `async`/`await`, and error handling.

## Project Structure
```text
Assignment-10/
├── Q1_Callbacks.html
├── Q1_Callbacks.js
├── Q2_OrderProcessing.html
├── Q2_OrderProcessing.js
├── Q3_Promises.html
├── Q3_Promises.js
├── Q4_AsyncAwait.html
├── Q4_AsyncAwait.js
├── Q6_TicketChecker.html
├── Q6_TicketChecker.js
└── README.md
```

## Questions
- **Q1 — Callback-Based Calculator and Bill:** Adds two numbers using a callback, calculates a bill of Rs. 1000, and simulates a withdrawal after two seconds.
- **Q2 — Order Processing Sequence:** Demonstrates nested callbacks and a Promise-chaining version for sequential order preparation, packing, and notification.
- **Q3 — Event Registration Promise:** Tests successful registration and rejection when the class is full.
- **Q4 — Load Student Records in Sequence:** Uses `async`/`await` to load students with IDs 1, 2, and 3 sequentially, with error handling.
- **Q6 — Support Ticket Status Checker:** Simulates a delayed ticket lookup and handles existing and missing ticket IDs.

## Requirements
- Visual Studio Code or another code editor
- Google Chrome or another modern browser
- VS Code Live Server extension (recommended)

No external libraries or frameworks are required.

## How to Run
1. Open the `Assignment-10` folder in VS Code.
2. Open the relevant HTML file.
3. Right-click in the editor and select **Open with Live Server**.
4. In the browser, press **F12** and open the **Console** tab to view output.

## Test Cases
- **Q1:** Expected bill total is Rs. 1000; withdrawal amount is Rs. 2500 from a starting balance of Rs. 10000.
- **Q3:** One registration succeeds and one fails because the class is full.
- **Q4:** Students load sequentially with a two-second delay per student.
- **Q6:** Use `T101`, `T102`, or `T103` for existing tickets. Use `T999` to test the missing-ticket error. Change the final `checkTicket(...)` call in `Q6_TicketChecker.js`.

## Note
The provided PDF numbers the final mini project as **Question 6**; therefore, these files use the `Q6_` prefix. Question 5 is not included in the PDF.
