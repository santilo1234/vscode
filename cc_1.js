let employeeName = "John Doe";
const employeeID = 12345;
var isActive = true;

console.log(employeeName, typeof employeeName);
console.log(employeeID, typeof employeeID);
console.log(isActive, typeof isActive);

let productName = "Wireless Mouse";
const productPrice = 29.99;
var isAvailable = true;

console.log(productName, typeof productName);
console.log(productPrice, typeof productPrice);
console.log(isAvailable, typeof isAvailable);

let accountBalance = 1000.00;
accountBalance += 200; // Deposit
console.log("After deposit: ", accountBalance);
accountBalance -= 150; // Withdrawal
console.log("After withdrawal: ", accountBalance);
accountBalance *= 1.05; // Interest
console.log("After interest: ", accountBalance);
accountBalance /= 2; // Half balance
console.log("After halving: ", accountBalance);

let customerName = "Alice";
let welcomeMessage = "Welcome, " + customerName + "!";
console.log(welcomeMessage);

let isLoggedIn = false;
let hasAccess = isLoggedIn && isActive;

console.log("Access granted: ", hasAccess);