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

exports.formatDate = formatDate;