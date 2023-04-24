

const sayHi = require('./utils'); // Importing the function from utils.js

const { name1, name2 } = require('./names'); // Importing the variables from names.js

sayHi(name1); // Calling the sayHi function with name1 as an argument
sayHi(name2); // Calling the sayHi function with name2 as an argument
const name3 = 'Lynda'

sayHi(name3)


// const testAlter = require('./alternative')

// console.log(testAlter)

const testTrick = require('./trick');

console.log(testTrick.num1 ,testTrick.num2)