// Q1 - Callback-Based Calculator and Bill
function calculate(a, b, callback) {
  callback(a, b);
}
calculate(10, 5, (a, b) => console.log("Addition result:", a + b));

function calculateBill(price1, price2, price3, callback) {
  callback(price1 + price2 + price3);
}
calculateBill(200, 300, 500, total => console.log("Total bill: Rs.", total));

function withdrawMoney(amount, callback) {
  const startingBalance = 10000;
  setTimeout(() => callback(startingBalance - amount), 2000);
}
withdrawMoney(2500, balance => console.log("Remaining balance: Rs.", balance));
