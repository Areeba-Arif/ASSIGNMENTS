
// ========================================
// Q2 - DOM Manipulation
// ========================================


// Get the heading using its ID
var title = document.getElementById("title");

// Get the paragraph using its ID
var message = document.getElementById("message");

// Get the button using its ID
var button = document.getElementById("showBtn");


// Add a click event to the button
button.onclick = function () {

    // Display heading text using alert()
    alert(title.innerText);

    // Display paragraph text using console.log()
    console.log(message.innerText);

};


// document.write()
// Displays a simple message on the webpage
document.write("<p>This message is displayed using document.write().</p>");