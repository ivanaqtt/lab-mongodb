//  Convert Variables (var → let/const)
let userName = "Alice";
const MAX_USERS = 100;
let userCount = 0;

//  Convert Functions to Arrow Functions
const greet = (name) => `Hello, ${name}!`;

const calculateAge = (birthYear) => new Date().getFullYear() - birthYear;

const multiply = (a, b = 2) => a * b;

// Use Template Literals
const displayUser = (name, age) => {
    return `User: ${name}, Age: ${age}`;
};

//  Apply Modern ES6 Features

// Destructuring
const user = { name: "Bob", age: 25, city: "NYC" };
const { name, age, city } = user;

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, ...obj1 };

// Default Parameters
const createUser = (name = "Guest", role = "user") => {
    return `${name} is a ${role}`;
};

// Test Output
const output = document.getElementById("output");
output.innerHTML = `
    <p>${greet(userName)}</p>
    <p>${displayUser(name, age)}</p>
    <p>${createUser("Charlie", "admin")}</p>
    <p>Combined Array: ${combined}</p>
    <p>Multiply: ${multiply(5)}</p>
`;