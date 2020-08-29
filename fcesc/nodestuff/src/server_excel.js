const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

const CREDS = require('./../config/client_secret.json');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = './../config';




/**
 * Prints the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @see https://docs.google.com/spreadsheets/d/1MYuYVdyzhhuBtTxkQSSqypgOQTjvpT4mFsgBGd0PYPM/edit#gid=0 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
/*
function listMajors(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1MYuYVdyzhhuBtTxkQSSqypgOQTjvpT4mFsgBGd0PYPM',
    range: 'Data_age!A1:H6',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Human age in some animal equivalent age:');
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row) => {
        console.log(`${row[0]}, ${row[1]}, ${row[2]}, ${row[3]}, ${row[4]}, ${row[5]}, ${row[6]}, ${row[7]}, ${row[8]}`);
      });
    } else {
      console.log('No data found.');
    }
  });
}
*/