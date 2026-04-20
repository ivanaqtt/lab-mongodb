//Arrays
let fruits = ["apple", "banana"];
fruits.push("orange");
fruits.pop();
fruits.unshift("grape");
console.log(fruits); // ["grape", "apple", "banana"]

//Objects
let person = { name: "Alice", age: 25 };
person.age = 26;
console.log(person.name); // "Alice"

//Built-in Methods
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);
numbers.forEach(n => console.log(n));

//Objects in Arrays
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
people.forEach(p => console.log(p.name));
