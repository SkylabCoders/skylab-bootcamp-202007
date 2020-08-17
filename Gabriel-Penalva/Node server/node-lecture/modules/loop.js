//console.log(process.env.HOME);
const fs = require('fs');

const path = require('path');
const files = ['assd', '.npmrc', __filename];

files.forEach((file) => {
    try {
        const filePath = path.resolve(process.env.HOME, file)
        const data = fs.readFileSync(filePath, 'utf8');
        console.log('File is' + data)
    } catch (err) {
        if (err.code === 'ENOENT')
            console.log('error: ' + err.code)
        else
            throw err
    }

})