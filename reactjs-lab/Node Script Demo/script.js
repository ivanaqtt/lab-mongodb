
const fs = require('fs');


const content = "Hello, this is a message from Node.js!";


fs.writeFile('message.txt', content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('message.txt has been created successfully.');
  }
});
