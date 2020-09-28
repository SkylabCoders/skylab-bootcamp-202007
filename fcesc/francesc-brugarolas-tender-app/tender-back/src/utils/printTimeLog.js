const chalk = require('chalk');

function printTimeLog() {
  const now = new Date();
  const timeStamp = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`
  return timeStamp;
}

module.exports = printTimeLog;