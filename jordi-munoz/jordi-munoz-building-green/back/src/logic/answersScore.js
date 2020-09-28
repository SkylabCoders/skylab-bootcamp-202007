
function calc(answers) {
  for (let key in answers) {
    try {
      switch (key) {
        case '0':
          break;
        case '1':
          if (answers[key].input >= 6) {
            answers[key].score = 3;
          } else if (answers[key].input >= 4) {
            answers[key].score = 2;
          } else if (answers[key].input >= 2) {
            answers[key].score = 1;
          } else if (answers[key].input >= 0) {
            answers[key].score = 0;
          }
          break;
        case '2':
          if (answers[key].input === 'true') {
            answers[key].score = 1;
          } else {
            answers[key].score = 0;
          }
          break;
        case '3':
          if (answers[key].input === 'true') {
            answers[key].score = 1;
          } else {
            answers[key].score = 0;
          }
          break;
        case '4':
          if (answers[key].input === 'true') {
            answers[key].score = 1;
          } else {
            answers[key].score = 0;
          }
          break;
        case '5':
          if (answers[key].input === 0) {
            answers[key].score = 0;
          } else if (answers[key].input === 1) {
            answers[key].score = 1;
          } else if (answers[key].input === 2) {
            answers[key].score = 2;
          }
          break;
        case '6':
          if (answers[key].input === 'true') {
            answers[key].score = 1;
          } else {
            answers[key].score = 0;
          }
          break;
        case '7':
          if (answers[key].input >= 20) {
            answers[key].score = 2;
          } else if (answers[key].input >= 15) {
            answers[key].score = 1;
          } else if (answers[key].input >= 0) {
            answers[key].score = 0;
          }
          break;
        case '8':
          if (answers[key].input === 'true') {
            answers[key].score = 1;
          } else {
            answers[key].score = 0;
          }
          break;
        case '9':
          if (answers[key].input === 'true') {
            answers[key].score = 1;
          } else {
            answers[key].score = 0;
          }
          break;
        case '10':
          if (answers[key].input === 'true') {
            answers[key].score = 1;
          } else {
            answers[key].score = 0;
          }
          break;
        case '11':
          if (answers[key].input === 'true') {
            answers[key].score = 1;
          } else {
            answers[key].score = 0;
          }
          break;
        case '12':
          if (answers[key].input === 'true') {
            answers[key].score = 1;
          } else {
            answers[key].score = 0;
          }
          break;
        case '13':
          if (answers[key].input >= 30) {
            answers[key].score = 3;
          } else if (answers[key].input >= 20) {
            answers[key].score = 2;
          } else if (answers[key].input >= 10) {
            answers[key].score = 1;
          } else if (answers[key].input >= 0) {
            answers[key].score = 0;
          }
          break;
        case '14':
          if (answers[key].input >= 30) {
            answers[key].score = 6;
          } else if (answers[key].input >= 25) {
            answers[key].score = 4;
          } else if (answers[key].input >= 20) {
            answers[key].score = 3;
          } else if (answers[key].input >= 15) {
            answers[key].score = 2;
          } else if (answers[key].input >= 10) {
            answers[key].score = 1;
          } else if (answers[key].input >= 0) {
            answers[key].score = 0;
          }
          break;
        case '15':
          if (answers[key].input >= 6) {
            answers[key].score = 2;
          } else if (answers[key].input >= 3) {
            answers[key].score = 1;
          } else if (answers[key].input >= 0) {
            answers[key].score = 0;
          }
          break;
        case '16':
          if (answers[key].input >= 15) {
            answers[key].score = 2;
          } else if (answers[key].input >= 5) {
            answers[key].score = 1;
          } else if (answers[key].input >= 0) {
            answers[key].score = 0;
          }
          break;
        case '17':
          if (answers[key].input === 'true') {
            answers[key].score = 1;
          } else {
            answers[key].score = 0;
          }
          break;

        default:
          break;
      }
    } catch { }
  }
}

module.exports = { calc }