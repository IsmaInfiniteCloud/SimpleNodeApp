
const os = require('os')

//info about user 

// const user = os.userInfo()
// console.log(user)

// //method returns uptime

// const upt = os.uptime()

// console.log(`the system has been running for : ${os.uptime()} seconds`)


// const currentOs = {
//     name:os.type(),
//     release:os.release(),
//     memoireTotale:os.totalmem(),
//     memoireLibre:os.freemem()
// }

// console.log(currentOs)


const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subFolder','SubSubFolder','secret.txt')

console.log(filePath)

 const baseName = path.basename(filePath)

 console.log(baseName)

 const absolute = path.resolve(__dirname,'content','subFolder','SubSubFolder','secret.txt');

 console.log(absolute)