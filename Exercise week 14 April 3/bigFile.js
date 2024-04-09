const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i++) {
    writeFileSync('./4_3/bigFile.txt', `levanviet`,
        { flag: 'a' }
    );
}