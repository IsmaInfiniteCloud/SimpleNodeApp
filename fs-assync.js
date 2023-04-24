const { readFile, writeFile } = require('fs')
readFile('./content/subFolder/SubSubFolder/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/secondFile.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' }, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('File has been written successfully');
        });
    });
});

