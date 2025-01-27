let products = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
products.push("Grapes");
products.pop();
console.log(products);

let scores = [85, 90, 78, 92, 88];
scores[1] = 95;

let averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;


console.log("Updated Scores:", scores);
console.log("Average Score:", averageScore);

let employee = {name: "John Doe", age: 30, department: "Marketing", isActive: true};
  
employee.department = "Sales";
employee.position = "Manager";

console.log(employee);  


let customers = [{ name: "Alice", email: "alice@example.com", purchaseAmount: 120.5 },
{ name: "Bob", email: "bob@example.com", purchaseAmount: 45.75 },
{ name: "Charlie", email: "charlie@example.com", purchaseAmount: 200.0 }];
customers.push({name: "David", email: "david@example.com", purchaseAmount: 80.25});

console.log(customers);
  