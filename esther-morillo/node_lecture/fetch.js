const https = require('https');

function fetch (url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data = data + chunk;
            });
            response.on('end', () => resolve(data));
            response.on('error', (error) => reject(error));
        })
    })
}

fetch('https://www.javascript.com/').then((data) => {
    console.log(data.length)
});

(async function read() {
    const data = await fetch('https://www.javascript.com/');
    console.log(data)
})();