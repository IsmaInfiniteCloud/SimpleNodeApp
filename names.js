const secret = "SUPER SECRET"; // This is a local variable and not exported

const name1 = "John"; // This is a constant variable and is exported
const name2 = "Peter"; // This is a constant variable and is exported

//console.log(module); // This line is just for testing purposes

module.exports = { name1, name2 }; // Exporting the variables
