let products = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
products.push("Grapes");
products.pop();
console.log(products);

let scores = [85, 90, 78, 92, 88];
scores[1] = 95;

let averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;


console.log("Updated Scores:", scores);
console.log("Average Score:", averageScore);
