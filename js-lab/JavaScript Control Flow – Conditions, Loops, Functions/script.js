let age = 15;

if (age >= 18) {
  console.log("You are an adult");
} else if (age >= 13) {
  console.log("You are a teenager");
} else {
  console.log("You are a child");
}

// For loop
for (let i = 0; i < 3; i++) {
  console.log("For loop iteration:", i);
}

// While loop
let count = 0;
while (count < 3) {
  console.log("While loop iteration:", count);
  count++;
}


function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Alice"));
