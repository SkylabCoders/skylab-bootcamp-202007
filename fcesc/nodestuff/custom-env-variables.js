// se queda colgado esperando un event 'readable' y luego lo devuelve - puede ser el princio de un chat

function formatDate(someTime){
    let someDate = new Date(someTime);
    let year = someDate.getFullYear();
    let month = someDate.getMonth() + 1;
    let day = someDate.getDate();
    let hour = someDate.getHours();
    if(hour < 10){ hour = '0' + hour};
    let minute = someDate.getMinutes();
    if(minute < 10){ minute = '0' + minute};
    let second = someDate.getSeconds();
    if(second < 10){ second = '0' + second};
    let date = `${day}/${month}/${year}`;
    let spaces1 = ' '.repeat(10 - date.length);
    let time = `${hour}:${minute}:${second}`;
    let spaces2 = ' '.repeat(8 - time.length);
    return `${spaces1}${date} ${spaces2}${time}`;
  }

function listenAndPrint(chatHistory){
    process.stdin.on('readable', ()=>{
        const chunk = process.stdin.read();
        if(chunk !== null){
            let idx = chatHistory.length;
            let date = new Date();
            chatHistory.push({chunk, idx, date});
            for (let el of chat){
                let spaces = ' '.repeat(3 - String(el.idx).length);
                process.stdout.write(`_ ${spaces}${el.idx} @ ${formatDate(el.date)} # ${process.env.USERNAME}: ${el.chunk}`);
            }
        }
    });
    return chatHistory;
}
// process.on('exit',()=>{
//     console.log('Hasta la próxima!');
// })

function chatty(){
    const chat = [];
    console.log('----- [ Welcome to your self-chat pointless app ] ---------------------');
    process.stdin.on('readable', ()=>{
        const option = process.stdin.read();
        console.log('option', option, typeof(option));
        for(let p in option){
            console.log(`   p - ${p}:${option[p]}...`)
        }
        console.log('no more props for \'option\' object');
        process.stdout.write(option);
        if (option !== null){
            switch(option){
                case 'c':
                    chat = listenAndPrint(chat);
                    break;
                case 'e':
                    process.exit();
                default:
                    process.stdout.write('Please, enter a valid option: \'c\' to continue or \'e\' to exit.');
                    break;
            }
        }
    })
}

chatty();