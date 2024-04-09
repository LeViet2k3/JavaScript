const { readFile, writeFile } = require('fs');
console.log('start');
readFile('./4_3/input.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./4_3/input2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./4_3/output.txt', `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Done with this task');
            }
        )
    })
})
console.log('Starting next task');