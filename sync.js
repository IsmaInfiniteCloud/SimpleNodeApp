
const {readFileSync,writeFile, writeFileSync} = require('fs');

const first = readFileSync('./content/subFolder/SubSubFolder/first.txt','utf-8');

const secret = readFileSync('./content/subFolder/secret.txt','utf8');

//the following line will create a result text :

writeFileSync('./content/result-sync.txt',`Here is the result : ${first},${secret}`,{flag:'a'})



//exporting these bad boys 

// module.exports = {first,secret}