const chose = require('./names'); // Importing the variables from names.js

const sayHi = (name) => {
  console.log(`Hello there ${name}`); // A function that takes a name as an argument and logs a message
};

module.exports = sayHi; // Exporting the function
