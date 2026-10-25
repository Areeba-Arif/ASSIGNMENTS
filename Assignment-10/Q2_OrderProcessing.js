// Q2 - Order Processing Sequence
function processOrderWithCallbacks() {
  console.log("Callback version: order received.");
  setTimeout(() => {
    console.log("Preparation started.");
    setTimeout(() => {
      console.log("Preparation finished. Packing started.");
      setTimeout(() => {
        console.log("Packing finished. Customer notification started.");
        setTimeout(() => {
          console.log("Customer notified. Order complete.");
          processOrderWithPromises();
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

function waitOneSecond() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

function processOrderWithPromises() {
  console.log("Promise version: order received.");
  waitOneSecond()
    .then(() => {
      console.log("Preparation started.");
      return waitOneSecond();
    })
    .then(() => {
      console.log("Preparation finished. Packing started.");
      return waitOneSecond();
    })
    .then(() => {
      console.log("Packing finished. Customer notification started.");
      return waitOneSecond();
    })
    .then(() => console.log("Customer notified. Order complete."))
    .catch(error => console.log("Order processing failed:", error));
}

// Nested callbacks are deeply indented; Promise chaining is flatter and easier to read.
processOrderWithCallbacks();
