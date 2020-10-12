// receives an ISO string formated date and returns a beautified date text
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHNAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function formatDate(stringDate, type = { time: true, date: 'long' }) {
  const date = new Date(stringDate);

  const time = ( type.time ) ? `${time60Formater(date.getHours())}:${time60Formater(date.getMinutes())}h` : '';
  let formatedDate;
  let separator;
  if ( type.date === 'long' || type.date === undefined ){
    formatedDate = `${getWeekdayName(date.getDay())}, ${getDaySuffix(date.getDate())} ${getMonthName(date.getMonth())} ${date.getFullYear()}`
    separator = ( type.time ) ? ' on ' : '' ;
  } else if ( type.date === 'short' ){
    formatedDate = `${date.getDate()}/${date.getMonth()+1}/${String(date.getFullYear()).slice(-2)}`;
    separator = ( type.time ) ? ' ' : '' ;
  } else if ( type.date === false ){
    formatedDate = '';
    separator = '';
  }

  return `${time}${separator}${formatedDate}`;
}


function time60Formater(time){
  return (Number(time) < 10) ? `0${time}` : String(time); 
}

function getWeekdayName(index){
  return WEEKDAYS[index];
}

function getMonthName(index){
  return MONTHNAMES[index];
}

function getDaySuffix(date){
  const strDate = String(date);
  const longEnd = strDate.slice(-2);
  const shortEnd = strDate.slice(-1);
  let suffix;

  if( longEnd === '11' || longEnd === '12' || longEnd === '13' ){ 
    suffix = 'th'
  } else {
    switch (shortEnd){
      case '1':
        suffix = 'st';
        break;
      case '2':
        suffix = 'nd';
        break;
      case '3':
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }
  }

  return `${date}${suffix}`;
}