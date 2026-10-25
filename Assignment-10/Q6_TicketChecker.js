// Q6 - Mini Project: Support Ticket Status Checker
const tickets = [
  { ticketId: "T101", customerName: "Sara Ahmed", status: "Open" },
  { ticketId: "T102", customerName: "Ali Khan", status: "In Progress" },
  { ticketId: "T103", customerName: "Ayesha Noor", status: "Resolved" }
];

function getTicket(ticketId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ticket = tickets.find(ticket => ticket.ticketId === ticketId);
      if (ticket) resolve(ticket);
      else reject(new Error(`Ticket ${ticketId} was not found. Please check the ticket ID.`));
    }, 2000);
  });
}

async function checkTicket(ticketId) {
  console.log(`Loading ticket ${ticketId}...`);
  try {
    const ticket = await getTicket(ticketId);
    console.log("Ticket details:");
    console.log("Ticket ID:", ticket.ticketId);
    console.log("Customer:", ticket.customerName);
    console.log("Status:", ticket.status);
  } catch (error) {
    console.log("Unable to retrieve ticket:", error.message);
  }
}

// Change to T101, T102, T103, or T999 to test the missing-ticket error.
checkTicket("T102");
// For the error test, comment out the line above and use: checkTicket("T999");
