const https = require('https');

const URL = 'https://www.switchup.org/rankings/best-coding-bootcamps';

function fetch(url){
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (chunk) => { // a nivel de servidor puede ser interesante tratar los datos
                //console.log(chunk);
                data = data + chunk
            });
            response.on('end', () => resolve(data));
            response.on('error', (error) => reject(error));
        })
    })
}

fetch(URL).then((data)=>{
    console.log('Data from fetch: ', data.length);
});

(async function read(){
    const data = await fetch(URL);
    console.log('Data from fetch inside IIFE: ', data.length);
})();